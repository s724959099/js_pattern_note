class Builder {
  fn1() {
  }

  fn2() {
  }

  fn3() {
  }
}

class Decorator {
  constructor(Builder) {
    this.builder = new Builder()
    this.builder.fn1()
    this.builder.fn2()
    this.builder.fn3()
  }
}


let decorator = new Decorator(Builder)
let builder = decorator.builder