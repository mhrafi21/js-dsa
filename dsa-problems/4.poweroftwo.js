// Power of two
// Give a positive integer 'n', determine if the number is a power of 2 or not an integer is a power of two if there exists an integer 'x' such that 'n' === 2 power x

// isPowerOfTwo(1) = true (2 power 0)
// isPowerOfTwo(2) = true (2 power 1)
// isPowerOfTwo(5) = false

// Power of two - Pseudocode

// n = 8

// 8/2=4, 4/2=2, 2/2=1

// if reminder is not 0 in any step, 'n' is not a power of two;

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while(n > 1){
//     if(n % 2 !== 0){
//         return false
//     }
//     n = n / 2
//   }
//   return true
// }


function isPowerOfTwo(n){
    if( n < 1){
        return false
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(66))