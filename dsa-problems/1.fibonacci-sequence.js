/*
Problem: Give a number 'n' elements of the Fibonacci sequence 

In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

The first two numbers in the sequence are 0 and 1

fibonacci(2) = [0,1]
fibonacci[4] = [0,1,1,2]
 */


function fibonacci(n){
    let fib = [0,1]
  for(let i = 2; i <=n; i++){
    fib[i] = fib[i -1] + fib[i -2]
  }
  return fib
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(4)); // [o,1,1,2]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]