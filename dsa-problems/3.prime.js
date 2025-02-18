// problem: Give a natural number 'n', determine if the number is prime or not.Give
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

// isPrime(5) = true(1*5)
// isPrime(4) = false

function isPrime(n){
    if(n < 2){
        return false
    }
    for(let i =2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true
}

function isPrime(n){
    if(n < 2){
        return false
    }
    for(let i =2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true
}

console.log(isPrime(1)) // output: false
console.log(isPrime(5)) // output: true
console.log(isPrime(4)) // output: false

// optimized primarily test - Integers larger than the square root do not need to be checked because, whenever n = a * b, one of the two factors a and b is less than or equal to the square root of n;