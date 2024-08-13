// 如果你能用 es5的语法 模拟出这个 es6 / ts 的 class和new对象，那么你就对 原型链、class理解足够深刻了

function GrandPa(name, age) {
  this.name = name;
  this.age = age;
}

GrandPa.prototype.showName = function () {
  console.log(this.name);
}

GrandPa.prototype.showAge = function () {
  console.log(this.age);
}

function Parent(name, age, motor) {
  GrandPa.call(this, name, age);    // 继承GrandPa的实例属性
  this.motor = motor;
}

// 设置 Parent 的 原型  继承自  GrandPa.prototype
Parent.prototype = Object.create(GrandPa.prototype);

// 使用 Object.create()方法 来 创建 一个新对象，该 新对象的原型（__proto__）被指定为 传递给 Object.create() 的 第一个参数。
// 最后 并赋值给 Parent.prototype，所以 Parent的实例 将能够 继承 GrandPa原型上定义的属性和方法。

Parent.prototype.constructor = Parent;

Parent.prototype.runMotor = function () {
  console.log('motor:' + this.motor + '滴滴...');
}

function Child(name, age, motor, pc) {
  Parent.call(this, name, age, motor);  // // 继承Parent的实例属性 
  this.pc = pc;
}

// 设置 Child 的 原型  继承自  Parent.prototype 
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.playGame = function () {
  console.log(`pc: ${this.pc}`);
}

let g1 = new GrandPa('李大杯', 90);
g1.showName();
g1.showAge();

let p1 = new Parent('李中杯', 61, '一二五摩托');
p1.showName();
p1.showAge();
p1.runMotor();

let c1 = new Child('李小杯', 26, '一二五摩托', 'redmi电脑');
console.log(c1);
c1.showName();
c1.showAge();
c1.runMotor();
c1.playGame();



