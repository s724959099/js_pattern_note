function decorator(func) {
  return function() {
    return func.apply(this, arguments)
  }
}

function sum(a, b) {
  return a + b
}

let getSum = decorator(sum)

console.log( getSum(1,2) ) //3
console.log( getSum(2,3) ) //5