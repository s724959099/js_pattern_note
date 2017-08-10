let _instance = null
class Singleton {
  static get_instance() {
    if (!this.__instance) {
      this.__instance = new this();
    }
    return this.__instance;
  }
}
class A extends Singleton {
  constructor() {
    super()
    console.log("init a ")
  }
}

let singleton = A.get_instance()
let singleton1 = A.get_instance()
console.log(singleton === singleton1)

