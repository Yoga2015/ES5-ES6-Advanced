
// 1. tab栏切换  事件委托
const tab_nav = document.querySelector('.tab-nav')
const pane = document.querySelectorAll('.tab-pane')
// 1.1 事件监听
tab_nav.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    // 取消上一个active
    tab_nav.querySelector('.active').classList.remove('active')
    // 当前元素添加active
    e.target.classList.add('active')

    // 先干掉所有人  for循环
    for (let i = 0; i < pane.length; i++) {
      pane[i].style.display = 'none'
    }
    // 让对应序号的 大pane 显示
    pane[e.target.dataset.id].style.display = 'block'
  }
})

// 点击提交模块
const form = document.querySelector('form')
const agree = document.querySelector('[name=agree]')
const username = document.querySelector('[name=username]')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  // 判断是否勾选同意协议
  if (!agree.checked) {
    return alert('请勾选同意协议')
  }

  // 记录用户名到本地存储
  localStorage.setItem('xtx-uname', username.value)
  // 跳转到首页
  location.href = './index.html'
})
