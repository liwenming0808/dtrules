import desensitizationRule from './src/desensitizationRule.js';
import { dtTypeEnum } from './model/model.js';

console.log(desensitizationRule('上海省', 'address'))
export {
    desensitizationRule,
    dtTypeEnum
}