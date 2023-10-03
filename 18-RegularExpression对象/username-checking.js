/*   用户验证案例

      需求： 用户名 要求 英文字母，数字，下划线 或者 短横线 组成，并且 用户名长度 为  6~16位

      分析 ：

      1、首先 定义 正则表达式 模式 /^[a-zA-Z0-9-_]{6,16}$/
      2、当 表单失去焦点 就开始  验证
        2.1、如果 符合 正则规范，则让 后面的 span标签 添加 right 类
        2.2、如果 不符合 正则规范，则让 后面的 span标签 添加 wrong 类 
*/

const reg = /^[\w]{6,16}$/;

const input = document.querySelector('input');

const span = input.nextElementSibling;

input.addEventListener('blur', function () {

  console.log(reg.test(this.value));

  if (reg.test(this.value)) {

    span.innerHTML = '输入正确';
    span.className = 'right';

  } else {

    span.innerHTML = '请输入6~16位的英文,数字,下划线';
    span.className = 'wrong';

  }

})