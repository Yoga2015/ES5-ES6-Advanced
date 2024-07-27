// 如果你能用es5的语法 模拟出这个 es6 / ts的 class和new对象，那么你就对  原型链、class理解足够深刻了

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

function Parent(name, age) {
  GrandPa.call(this, name);
  GrandPa.call(this, age);
  // this.motor = motor;
}

// Parent.prototype.runMotor = function () {
//   console.log('motor:' + this.motor + '滴滴...');
// }


Parent.prototype = Object.create(GrandPa.prototype);

Parent.prototype.constructor = Parent;

// var g1 = new GrandPa('罗如权', 88);

// g1.showName();
// g1.showAge();

var p1 = new Parent("罗良基", 61);

p1.showName();
p1.showAge();


