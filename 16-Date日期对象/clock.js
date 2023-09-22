
// YYYY-MM-DD HH:mm 形式显示在页面  2023-08-28 22:40

let years = document.querySelector('.years');
let months = document.querySelector('.months');
let dates = document.querySelector('.dates');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function getMyDate() {

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let today = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  years.innerHTML = year + ' -';

  months.innerHTML = month + ' -';

  today = today < 10 ? '0' + today : today;
  dates.innerHTML = today;

  h = h < 10 ? '0' + h : h;
  hours.innerHTML = h + ' :';

  m = m < 10 ? '0' + m : m;
  minutes.innerHTML = m + ' :';

  s = s < 10 ? '0' + s : s;
  seconds.innerHTML = s;

}

getMyDate(); //2、 但刷新页面后，时间 出现空白，所以在进入页面时就进行立即调用一次  

// 1、为了能够让时间自动变化，使用 setInterval(回调函数，间隔时间毫秒级 就触发 回调函数)

setInterval(function () {

  getMyDate();

}, 1000)
