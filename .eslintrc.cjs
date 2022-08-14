module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "es6": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "space-before-function-paren": 0,// 函数定义时括号前面要不要有空格
        "semi": 0,// 语句可以不需要分号结尾
        "eqeqeq": 1,// 必须使用全等
    }
}
