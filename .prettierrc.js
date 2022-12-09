/*
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2022-12-09
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2022-12-09
 */
module.exports = {
    tabWidth: 2,
    jsxSingleQuote: true,
    jsxBracketSameLine: true,
    printWidth: 100,
    singleQuote: false,
    semi: false,
    useTabs: false,
    overrides: [
      {
        files: '*.json',
        options: {
          printWidth: 200,
        },
      },
    ],
    arrowParens: 'always',
    bracketSpacing: true,
    endOfLine: 'auto'
}