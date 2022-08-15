import { dtTypeEnum } from '../index.js';
/**
 * 脱敏规则
 * 1.姓名： 展示后一  如：*三  type: name
 * 2.身份证： 展示前2后2 如： 32********81 type: idCard
 * 3.手机号： 展示前三后三  如：150****999 type: mobile
 * 4.银行卡：展示后四 如：*********1234  type: bankCard
 * 5.固定电话： 展示区号和后两位 如：021-******62 // telephone
 * 6.地址：展示到省市  如：上海市****** // address
 * 7.邮箱地址： 展示邮箱后缀 如：****@qq.com //  mailbox
 * 9.密码： 全部脱敏 如：***** // password
 */
function desensitizationRule(value, type) {
    let result = null;
    if (value && value.length > 0) { 
      switch (type) {
        case dtTypeEnum.NAME: //姓名
          // * (?<=XXX)\w*：表示匹配XXX后面的字母和数字
          // *  \w*(?=XXX)：表示匹配XXX前面的字母和数字
          // * 一定要加括号，表示这是一个 整体,还要注意表达式的顺序
          result = value.replace(/.(?=.)/g,'*');
          break;
  
        case dtTypeEnum.ID_CARD: // 身份证
          let cardSrarts = '';
          for (let i = 0; i < value.length - 4; i++) {
            cardSrarts = cardSrarts + '*'
          }
          result = value.slice(0,2) + cardSrarts + value.slice(value.length - 2, value.length);
          // result = value.replace(/^(.{2})(?:\w+)(.{2})$/, "\$1**************\$2");
          break;
  
        case dtTypeEnum.MOBILE: // 手机号
          const mobileList = value.split(',');
          result = mobileList.map(item => item.replace(/^(.{3})(?:\w+)(.{4})$/, "\$1****\$2")).join(',');
          break;
  
        case dtTypeEnum.BACK_CARD: // 银行卡
          let stars = '';
          for (let i = 0; i < value.length - 4; i++) {
              stars = stars + '*'
          }
          result = stars + value.slice(value.length - 4);
          break;
        
        case dtTypeEnum.TELEPHONE: // 固定电话
          const str_before = value.split('-')[0];
          let telStars = '';
          const reduceLength = str_before.length + 3;
          for (let i = 0; i < value.length - reduceLength; i++) {
              telStars = telStars + '*'
          }
          result = value.slice(0, str_before.length + 1) + telStars + value.slice(value.length - 2);
          break;
  
        case dtTypeEnum.ADDRESS: // 地址
          const index = value.indexOf('市');
          if (index !== -1) { 
            const indexLength = index + 1;
            let ressStars = '';
            for (let i = 0; i < value.length - indexLength; i++) {
                ressStars = ressStars + '*'
            }
            result = value.slice(0, indexLength) + ressStars;
          }
          break;  

        case dtTypeEnum.MAILBOX: // 邮箱地址
          const box_before = value.split('@')[0];
          let boxStars = '';
          for (let i = 0; i < box_before.length; i++) {
              boxStars = boxStars + '*'
          }
          result = boxStars + value.slice(box_before.length, value.length);
          break;
        default: 
          result = null;
      }
    }

    return result;
}

export default desensitizationRule;