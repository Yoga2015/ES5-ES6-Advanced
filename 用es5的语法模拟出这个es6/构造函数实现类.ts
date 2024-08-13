// 如果你能用es5的语法 模拟出这个 es6 / ts的 class和new对象，那么你就对  原型链、class理解足够深刻了

class GrandPa {
  constructor(public name: string, public age: number) { }

  showName() {
    return this.name;
  }

  showAge() {
    return this.age;
  }
}

class Parent extends GrandPa {
  constructor(name: string, age: number, private motor: number) {
    super(name, age);
  }

  runMotor() {
    console.log(`motor:${this.motor}, 滴滴...`);
  }
}

class Child extends Parent {
  constructor(name: string, age: number, motor: number, private pc: number) {
    super(name, age, motor);
  }

  playGame() {
    console.log(`pc: ${this.pc}`);
  }
}


let grandPa = new GrandPa('李大杯', 90);

let parent1 = new Parent('李中杯', 61, 1);

let child = new Child('李小杯', 22, 1, 1);







