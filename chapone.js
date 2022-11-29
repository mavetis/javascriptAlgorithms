
//CHAPTER 1 basics

function sigma(num){
    var sum = 0;
    for(var i = 0; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}
console.log("sigma is: " + sigma(10));

function reverse(num){
    var sum = 0;
    for(var i = 0; i<=num; i++){
        sum = sum + num - 1;
    }
    return sum;
}
console.log("reverse sigma is: " + reverse(6));

function factorial(num){
    var product = 1;
    for(var i = 1; i<=num; i++){
        product = product * i;
    }
    return product;
}
console.log("Factorial is: " + factorial(8));

function reverseFactorial(x){
    var product = 1;
    for(var i = x; i>1; i--){
        product = product*i;
    }
    return product;
}
console.log("reverse factorial is: " + reverseFactorial(8));

function threeFive(){
    var sum = 0;
    for(var i = 100; i<=400001; i++){
        if((i%3 == 0) || (i%5 == 0) && (i%15 != 0)){
            sum = sum +i;
        }
    }
    return sum
}
console.log("Three of Fives: " + threeFive());

function betterThreeFive(x,y){
    var sum = 0;
    for(var i = x; i<=y; i++){
        if((i%3 == 0) || (i%5 == 0) && (i%15 != 0)){
            sum = sum +i;
        }
    }
    return sum;
}
console.log("Better three of fives: " + betterThreeFive(300, 600));

function generateCoinChange(cents) {
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
   
    if (Math.floor(cents / 25) > 0) {
      quarter = Math.floor(cents / 25);
      cents -= (quarter*25);
      
    }
    if (Math.floor(cents / 10) > 0) {
      dime = Math.floor(cents / 10);
      cents -= (dime*10);
      
    }
    if (Math.floor(cents / 5) > 0) {
      nickel = Math.floor(cents / 5);
      cents -= (nickel*5);
      
    }
    penny = cents;
   console.log("Quarters: "+ quarter+ "  Dime: "+ dime + "  Nickel: "+ nickel + "  Penny: " + penny);
    
  }
generateCoinChange(99);
generateCoinChange(216);
generateCoinChange(88);


                
  function sumToOneRe(num){
    if(num == 0){
        return 0;
    }
    return (num%9 == 0) ? 9 : (num%9); //is num 9? if so return 9, otherwise (:) divide the num by 9 and the remainder is the value to be returned. 
}
console.log("Sum to One: " + sumToOneRe(142));

function sumToOne(num){
    var sum = 0;
    while(num > 0 || sum > 9){
        if(num ==0){
            num = sum;
            sum = 0;

        }
        sum = sum + num % 10;
        num = Math.floor(num/ 10);
    }
    return sum;
}
console.log("Sum to one: " + sumToOne(43));

function fibonacci(num) {
    if (num <= 2) {
        return 1;
    }
   return fibonacci(num - 1) + fibonacci(num - 2);
  }
 console.log("fibonacci: " + fibonacci(3));

function fib(n){
   var arr = [0,1];
   for(let i = 2; i<=n; i++){
       arr.push(arr[i-2] + arr[i-1]);
   }
   return arr[n]; 
}
console.log( "fibonacci: " + fib(1));



