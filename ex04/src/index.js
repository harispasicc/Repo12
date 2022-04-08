function sumFibonacci(num){
    let fibonacci = [];
    let oddFibonacci = [];
    let sum = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
  
    if(num < 0){
      return num = 0;
    }
    if (num === 0){
      return num;
    }
    if (num === 1){
      return num;
    }
    if (num >2){
   let i = 2;
   while (i <= num){
     fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
     i++;
   }
  } 
  for (let i = 0; i < fibonacci.length; i++){
    if (fibonacci[i] % 2 !== 0 ){
      oddFibonacci.push(fibonacci[i]);
    }
    
  }
    for (let i = 0; i < oddFibonacci.length; i ++){
    if (oddFibonacci[i] <= num)
    {
      sum.push(oddFibonacci[i]);
    }
  }
    return sum.reduce((a,b) => a + b);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;