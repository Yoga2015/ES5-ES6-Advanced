// 什么是 Iterator遍历器
// JavaScript 原有的 表示“集合”的数据结构，主要是数组（Array）和对象（Object）, 后来 ES6 又添加了 Map 和 Set ，
// 这样就有了四种数据集合。

// 用户 还可以 组合使用 这四种数据集合，定义自己的数据结构，比如： 数组的成员 是 Map，Map的成员 是 对象。
// 这时 就需要 一种统一的接口机制，来处理所有不同的数据结构。
// 然而  遍历器（Iterator）就是这样 一种机制，就是 用来 处理 所有不同的数据结构。/

// Iterator 的作用
// 一是 为 各种数据结构，提供一个统一的、简便的访问接口；
// 二是 使得 数据结构的成员 能够 按某种 次序排列；
// 三是 ES6 创造了一种新的遍历命令 for...of 遍历，Iterator 接口主要供 for...of 消费。

// 原生具备 Iterator 接口的数据结构 ，都可用for…of遍历
// Array、  Arguments、   Set、   Map、  String、   TypedArray、  NodeList

// 任何数据结构 只要部署了 Iterator接口，就被视为具有 iterator 接口，就可以用 for...of 遍历它的成员。
// 也就是说，for...of遍历 内部调用的是 数据结构的 Symbol.iterator 方法。

// Iterator  遍历器 是一种 接口，也是一个属性
// 打印 一个数组，可以看出 数组 中 有 symbol.Iterator 属性。

// 使用 for…of 可以遍历出 数组中 所有元素（键名）
// 使用 for…in 可以遍历出 数组中 所有元素的索引号（键值）

// 声明一个数组
let F4 = ['小沈阳', '赵四', '刘能', '宋小宝'];

// 使用 for...in 遍历数组  
for (let v in F4) {   // 此时变量 v 保存的是 键名
  console.log(v);   // 0   1   2   3
}
// 使用 for...of 遍历数组 ，遍历出 数组元素的
for (let v of F4) {     // // 此时变量 v 保存的是 键值
  console.log(v);     // 小沈阳 赵四  刘能  宋小宝
}