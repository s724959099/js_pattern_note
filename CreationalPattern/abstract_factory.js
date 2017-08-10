/**
 * Created by Admin on 2017/8/2.
 */

class AbstractFactory {
  fn1() {
    throw "error fn1"
  }

  fn2() {
    throw "error fn2"
  }

  fn3() {
    throw "error fn3"
  }
}

class Factory1 extends AbstractFactory {
  fn1() {
    console.log("init fn1")
  }

  fn2() {
    console.log("init fn2")
  }

  fn3() {
    console.log("init fn3")
  }

}
class Factory2 extends AbstractFactory {
  fn1() {
    console.log("init fn1")
  }

  fn2() {
    console.log("init fn2")
  }

  fn3() {
    console.log("init fn3")
  }
}

let get_factory = (Factory) => {
  let factory = new Factory()
  factory.fn1()
  factory.fn2()
  factory.fn3()
  return factory
}


let factory = get_factory(Factory1)