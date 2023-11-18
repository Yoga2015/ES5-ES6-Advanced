// 1、 获取第一个小li
const li1 = document.querySelector('.xtx_navs li:first-child')
const li2 = li1.nextElementSibling

// 2. 最好做个渲染函数 因为退出登录需要重新渲染
function render() {
  // 2.1 读取本地存储的用户名
  const uname = localStorage.getItem('xtx-uname')
  // console.log(uname)
  if (uname) {
    li1.innerHTML = `<a href="javascript:;"><i class="iconfont icon-user">${uname
      }</i></a>
        `
    li2.innerHTML = '<a href="javascript:;">退出登录</a>'
  } else {
    li1.innerHTML = '<a href="./login.html">请先登录</a>'
    li2.innerHTML = '<a href="./register.html">免费注册</a>'
  }
}
render()  // 调用函数

// 3. 点击退出登录模块
li2.addEventListener('click', function () {
  // 删除本地存储的数据
  localStorage.removeItem('xtx-uname')
  // 重新渲染
  render()
})