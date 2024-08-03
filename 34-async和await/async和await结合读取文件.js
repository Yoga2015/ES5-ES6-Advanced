// 1、引入 fs 模块
const fs = require('fs');

// 读取 村居
function readCunJu() {

  return new Promise((resolve, reject) => {

    fs.readFile('./resources/村居.md', (err, data) => {

      //  如果读取失败
      if (err) reject(err)

      // 如果读取成功，就控制台打印出来
      resolve(data)

    })

  })

}

function readHua() {

  return new Promise((resolve, reject) => {

    fs.readFile('./resources/画.md', (err, data) => {

      //  如果读取失败
      if (err) reject(err)

      // 如果读取成功，就控制台打印出来
      resolve(data)

    })

  })

}

function readJingYeSi() {

  return new Promise((resolve, reject) => {

    fs.readFile('./resources/静夜思.md', (err, data) => {

      //  如果读取失败
      if (err) reject(err)

      // 如果读取成功，就控制台打印出来
      resolve(data)

    })

  })

}

// 上面 三个函数 的 返回的结果 都是 一个Promise 对象

// 声明一个 async 函数
async function main() {
  // 读取 村居 内容
  let cunju = await readCunJu()
  // 读取 画 内容
  let hua = await readHua()
  // 读取 静夜思 内容
  let jingyeshi = await readJingYeSi()

  console.log(cunju.toString());
  console.log(hua.toString());
  console.log(jingyeshi.toString());
}

main()