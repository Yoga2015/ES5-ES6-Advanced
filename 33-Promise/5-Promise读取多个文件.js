const fs = require('fs');

// 多个异步任务：读取多个文件, 传统的 回调地狱 写法 容易重名 data，不易被发现、调试很不方便   
fs.readFile('./resources/村居.md', (err, data1) => {
  fs.readFile('./resources/画.md', (err, data2) => {
    fs.readFile('./resources/静夜思.md', (err, data3) => {
      let result = data1 + '\r\n' + data2 + '\r\n' + data3;
      console.log(result);
    });
  });
});

// 上面的例子，实际中不一定有，但实际中会有，比如说: 读取 数据库，读取 用户，读取完 用户 之后，
// 要根据用户，再去读取 用户 的 其他信息，比如说: 详细信息, 再比如说 用户的订单...等等
// 就是 必须得 先有用户，才能 有后续的行为 或者 后续的数据，
// 它们之间 是有 递进关系 的，而并不是说 并行的关系 ，所以 我们 要按照 这种层级方式 来做
// 这是 使用 回调地狱的方式 去做，可以看出 代码 不断向前缩进，如果你还有异步任务，它还会往前缩啊。

// 2、下面，使用 Promise 来实现
const p = new Promise((resolve, reject) => {

  fs.readFile('./resources/村居.md', (err, data) => {
    resolve(data);
  });

});

p.then(value => {

  return new Promise((resolve, reject) => {

    fs.readFile('./resources/画.md', (err, data) => {
      resolve([value, data]);  // value 是 村居.md ，data 是 画.md
    });

  })

}).then(value => {

  return new Promise((resolve, reject) => {

    fs.readFile('./resources/静夜思.md', (err, data) => {
      value.push(data);  // 压入
      resolve(value);
    });

  })

}).then(value => {

  // console.log(value); 返回的 是 数组
  console.log(value.join('\r\n'));

})

