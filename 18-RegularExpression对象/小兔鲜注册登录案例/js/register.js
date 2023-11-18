
(function () {
  // 1. 发送短信验证码模块
  const code = document.querySelector('.code')
  let flag = true  // 通过一个变量来控制   节流阀
  //  1.1 点击事件
  code.addEventListener('click', function () {
    if (flag) {
      // 取反了，不能马上第二次点击
      flag = false
      let i = 5
      // 点击完毕之后立马触发
      code.innerHTML = `0${i}秒后重新获取`
      // 开启定时器
      let timerId = setInterval(function () {
        i--
        code.innerHTML = `0${i}秒后重新获取`
        if (i === 0) {
          // 清除定时器
          clearInterval(timerId)
          // 从新获取
          code.innerHTML = `重新获取`
          // 到时间了，可以开启 flag了
          flag = true
        }
      }, 1000)
    }
  })
})();


// 2. 验证的是用户名
// 2.1 获取用户名表单
const username = document.querySelector('[name=username]')
// 2.2 使用change事件  值发生变化的时候
username.addEventListener('change', verifyName)
// 2.3 封装verifyName函数
function verifyName() {
  // console.log(11)
  const span = username.nextElementSibling
  // 2.4 定规则  用户名
  const reg = /^[a-zA-Z0-9-_]{6, 10}$/
  if (!reg.test(username.value)) {
    // console.log(11)
    span.innerText = '输入不合法,请输入6~10位'
    return false
  }
  // 2.5 合法的 就清空span
  span.innerText = ''
  return true
}



// 3. 验证的是手机号
// 2.1 获取手机表单
const phone = document.querySelector('[name=phone]')
// 2.2 使用change事件  值发生变化的时候
phone.addEventListener('change', verifyPhone)
// 2.3 verifyPhone
function verifyPhone() {
  // console.log(11)
  const span = phone.nextElementSibling
  // 2.4 定规则  用户名
  const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  if (!reg.test(phone.value)) {
    // console.log(11)
    span.innerText = '输入不合法,请输入正确的11位手机号码'
    return false
  }
  // 2.5 合法的 就清空span
  span.innerText = ''
  return true
}


// 4. 验证的是验证码
// 4.1 获取验证码表单
const codeInput = document.querySelector('[name=code]')
//4.2 使用change事件  值发生变化的时候
codeInput.addEventListener('change', verifyCode)
// 4.3 verifyPhone
function verifyCode() {
  // console.log(11)
  const span = codeInput.nextElementSibling
  // 4.4 定规则  验证码
  const reg = /^\d{6}$/
  if (!reg.test(codeInput.value)) {
    // console.log(11)
    span.innerText = '输入不合法,6 位数字'
    return false
  }
  // 4.5 合法的 就清空span
  span.innerText = ''
  return true
}

// 5. 验证的是密码框
// 5.1 获取密码表单
const password = document.querySelector('[name=password]')
//5.2 使用change事件  值发生变化的时候
password.addEventListener('change', verifyPwd)
// 5.3 verifyPhone
function verifyPwd() {
  // console.log(11)
  const span = password.nextElementSibling
  // 5.4 定规则  密码
  const reg = /^[a-zA-Z0-9-_]{6, 20}$/
  if (!reg.test(password.value)) {
    // console.log(11)
    span.innerText = '输入不合法,6~20位数字字母符号组成'
    return false
  }
  // 5.5 合法的 就清空span
  span.innerText = ''
  return true
}



// 6. 密码的再次验证
// 6.1 获取再次验证表单
const confirm = document.querySelector('[name=confirm]')
//6.2 使用change事件  值发生变化的时候
confirm.addEventListener('change', verifyConfirm)
// 6.3 verifyPhone
function verifyConfirm() {
  // console.log(11)
  const span = confirm.nextElementSibling
  // 6.4 当前表单的值不等于 密码框的值就是错误的
  if (confirm.value !== password.value) {
    // console.log(11)
    span.innerText = '两次密码输入不一致'
    return false
  }
  // 6.5 合法的 就清空span
  span.innerText = ''
  return true
}

// 7. 我同意
const queren = document.querySelector('.icon-queren')
queren.addEventListener('click', function () {
  // 切换类  原来有的就删掉，原来没有就添加
  this.classList.toggle('icon-queren2')
})

// 8. 提交模块
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  // 判断是否勾选我同意模块 ，如果有 icon-queren2说明就勾选了，否则没勾选
  if (!queren.classList.contains('icon-queren2')) {
    alert('请勾选同意协议')
    // 阻止提交
    e.preventDefault()
  }
  // 依次判断上面的每个框框 是否通过，只要有一个没有通过的就阻止
  // console.log(verifyName())
  if (!verifyName()) e.preventDefault()
  if (!verifyPhone()) e.preventDefault()
  if (!verifyCode()) e.preventDefault()
  if (!verifyPwd()) e.preventDefault()
  if (!verifyConfirm()) e.preventDefault()
})
