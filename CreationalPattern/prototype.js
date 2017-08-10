class A{
  constructor(a,b,c){
    this.a = a
    this.b = b
    this.c = c
  }
  clone(){
    return new A(this.a,this.b,this.c)
  }
}

let a = new A(1,2,3)
let b = a.clone()
a.a=5
console.log(b.a)
