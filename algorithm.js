function summation(n){
   let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}
const sum = summation(5);
console.log(sum)