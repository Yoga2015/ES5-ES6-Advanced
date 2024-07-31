// 1、引入 fs 模块
const fs = require('fs');

// 2、调用 fs模块 中 的 readFile() 方法 来 读取文件
// fs.readFile('./望庐山瀑布.md', (err, data) => {

//   // 如果读取失败，则抛出错误
//   if (err) throw err;

//   // 如果读取成功，则输出内容
//   console.log(data.toString());

// })

// 3、使用 Promise 来 封装 上面这个 文件操作 （异步操作）
const p = new Promise(function (resolve, reject) {

  fs.readFile('./望庐山瀑布.md', (err, data) => {

    // 如果读取失败，则抛出错误
    if (err) reject(err)

    // 如果读取成功，则输出内容
    resolve(data)

  })

})

p.then(function (value) {

  console.log(value.toString());

}, function (reason) {

  console.log('读取失败!');

})