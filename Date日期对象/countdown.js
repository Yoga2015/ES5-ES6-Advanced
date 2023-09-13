
// YYYY-MM-DD HH:mm 形式显示在页面  2023-08-28 22:40
let dates = document.querySelector('.dates');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function getMyDate() {

  let nowTime = +new Date();   //获取 当前系统时间 的 总的毫秒数

  let futureTime = +new Date('2023-9-16 12:00:00');   //获取 用户输入的将来时间 的 总的毫秒数

  let timeSum = (futureTime - nowTime) / 1000;  //timesum 是剩余时间总的 毫秒数


  let d = parseInt(timeSum / 60 / 60 / 24);   // 计算天数
  d = d < 10 ? '0' + d : d;
  dates.innerHTML = d + ' 天';

  let h = parseInt(timeSum / 60 / 60 % 24);   // 计算小时
  h = h < 10 ? '0' + h : h;
  hours.innerHTML = h;

  let m = parseInt(timeSum / 60 % 60);   // 计算分钟
  m = m < 10 ? '0' + m : m;
  minutes.innerHTML = m;

  let s = parseInt(timeSum % 60)  // 计算秒数
  s = s < 10 ? '0' + s : s;
  seconds.innerHTML = s;

}

getMyDate(); // 2、 但刷新页面后，时间 出现空白，所以在进入页面时就进行立即调用一次  

// 1、为了能够让时间自动变化，使用 setInterval(回调函数，间隔时间毫秒级 就触发 回调函数)

setInterval(function () {

  getMyDate();

}, 1000)
