// Factorial of a number

/*
Problem: Give an integer 'n', find the factorial of that integer

In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

Factorial of zero is 1

factorial(4) = 4 * 3 * 2 * 1

*/

function factorial(n){
    const result = 1;
    for(let i = 2; i <= n; i++){
        result = result * i
    }
    return result;
}

console.log(factorial(0)) // output: 1
console.log(factorial(1)) // output: 1
console.log(factorial(5)) // output: 120