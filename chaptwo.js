//CHAPTER 2
/*Given an array and an additional value, ​insert this value ​at the beginning of the array.
 Do this without using any built-in array methods.*/

function pushFront(arr, x){
for(var i = arr.length; i>0; i--){ 
  //as we decrement, arr[i] = arr[i-1], also decrements until it reaches 0.
    arr[i] = arr[i-1];
    //works from right to left until it reaches i>0.
    }
     arr[0] = x
    return arr;
}
console.log(pushFront([2,3,4], 7))
console.log(pushFront([1,2,3,4], 0));

function front(arr, x){
  for(var i = 0; i<arr.length; i++){
  }
  console.log("Concat method: " + [x].concat(arr));

}
console.log(front([1,2,3,4,5], 9));
console.log(front([1,2,3,4,5], 22));

/*Given an array, ​remove and return the value ​at the beginning of the array.
 Do this without using any built-in array methods.*/

 function popArr(arr){
  newArr=[];
  for (var i=1; i<arr.length; i++){
    newArr.push(arr[i]);
  }
  console.log("Original array: " + arr);
  console.log("Array without first value: " + newArr);
  return "first value: " + arr[0];
}
console.log(popArr([155,2,5,3]));

/*Given an array, index, and additional value, ​insert the value into the array a​t the given index. 
Do this without using built-in array methods. 
You can think of ​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​.*/

function insertAt(arr, idx, x){
  for(var i = 0; i<idx; i++){
    arr[idx]=x; 
    //once i is not greater than idx(its equal to) arr of i is then set to the idx, which is equal to x. 
  }
  return arr;
}   
console.log("insert at index: "  + insertAt([2,3,4,5,6], 2, 8));
console.log("insert at index: "  + insertAt([2,3,4,5,6], 3, 20));


/*Given an array and an index into the array, remove and return the array value ​at that index. 
Do this without using any built-in array methods except ​pop()​. 
Think of ​PopFront(arr)​ as equivalent to ​RemoveAt(arr,0).​*/

// function removeAt(arr,idx){
  
//    for(var i = arr.length; i>idx; i--){
//     // arr[i]= arr[i-1];
//   } 
//   // arr.splice(arr[i],1); 
//   return arr[i];
// }

function removeAt(arr, idx){
  newArray=[];
  for(var i = 0; i<arr.length; i++){
      if(i==idx){
          console.log("Value of index " +idx + " is: " + arr[i]);
      }
      else {
          if(i!=idx){
              newArray.push(arr[i]);
          }
      }  
  }
  return newArray
}
console.log(removeAt([6,7,4,9,10,5],4));

function reverseArr(arr){
  var reverse = [];
  for(var i = 0; i<arr.length; i++){
    reverse.push((arr[arr.length-1-i]));
  }
  console.log("original array: " + arr);
  return reverse;
}
console.log("The reverse of array: " + reverseArr([1,2,3,4,5,6,7]));

/*Implement a function ​removeNegatives()​ that accepts an 
array and removes any values that are less than zero.*/

function removeNegatives(arr){
   var noNeg = [];
    for(var i = 0; i<arr.length; i++){
      if(arr[i]>=0){
        noNeg.push(arr[i]);
      }
    }
   return noNeg;
}
console.log("array with no negatives: " + removeNegatives([3,4,-1,-2,0,8,5,2,-65]));

/*You are given an array with heights of consecutive buildings in the city. 
For example, ​[-1,7,3]​ would represent three buildings: first is actually below street level, 
second is seven stories high, and third is three stories high (but hidden behind the seven-story one). 
You are situated at street level. 
Return an array containing heights of the buildings you can see, in order. 
Given ​[1,-1,7,3]​ return ​[1,7]​.*/

function buildings(arr, n){
  var newArr=[];
  for (var i = 0; i<arr.length; i++){
    if( (arr[i]==n)||(arr[i]>=n)&&(arr[i-1]<arr[i])){
     newArr.push(arr[i]);
    }
  }
  
  console.log("Floor Level: " + n);
  return newArr;
}
console.log("buildings visible: " + buildings([1,-1,7,3],1));

//BUBBLE SORT not optimized 0(n^2)
function buSo(arr){
  // the need for i is for the iteration to start again 
  // since j subtracts from the array, and i starts from 0.
  for(var i = 0; i<arr.length; i++){
    //two layers first layer of i is what we use to move down the array length.
    // i iteration is only for i no value association. 
    for(var j = 0; j<arr.length-i-1; j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log("Bubble sort not optimized o(n^2): " + buSo([1,4,5,2,3,7,6]));

//BUBBLE SORT optimized
function bubbleSort(arr){
  var i=0;
  var j=0;
  var len=arr.length;
  // var isSwapped = false; //declaring a a variable in boolean. 
  //isSwapped = false means when a condition is met the isSwapped becomes true.
  for(i=0; i<len; i++){
    isSwapped=false;
    for(j=0; j<len; j++){
      if(arr[j]>arr[j+1]){
        isSwapped=true;
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
    if(!isSwapped){ //once all is swapped the program will break.
      break;
    }
  }
  return arr;
}
console.log("Bubble sort optimized: " + bubbleSort([2,5,3,1,4,6,5,2,7,8]));

//BINARY SEARCH

/*Given a sorted array and a value, return whether that value is present in the array. 
Do not sequentially iterate the entire array. 
Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted.*/


function biSr(arr, x){
  var start = 0; 
  var end = arr.length;
  var mid;
  while(start<=end) {
    var mid = Math.floor((start + end/2));
    
    if(arr[mid]===x){
      return (x + " is mid-length " + " at index " + mid);
    }
    if(arr[mid]<x){
      left = mid+1;
      return (x + " is on the right side, on index " + arr[mid]);
    }
    if(arr[mid]>x){
      right = mid-1;
       return (x + " is on the left side, on index " + arr[mid]);
    }
    
    
  }
  return -1
}
console.log("This binary search is: " + biSr([1,2,3,4,5,6,7], 5));
console.log("This binary search is: " + biSr([1,2,3,4,5,6,7], 4));
console.log("This binary search is: " + biSr([1,2,3,4,5,6,7], 2));


function binarySearch(arr, x){
  var left = 0;
   var right = arr.length-1;
    var mid;
    
    while(left <= right){
    var mid =Math.floor((left+right/2));
      if(arr[mid]==x){
        return (x + " is at mid-length, and at index: " + mid);
      }
      if(arr[mid]<x){
        left = mid + 1;
      }

      if(arr[mid]>x){
        right = mid-1;
      }

      else{
        return ("does not exist in array " + -1); 

      }
    }

  }
  console.log(binarySearch([1,3,4,6,7,9,10,11], 3));
  console.log(binarySearch([1,3,4,5,6,7,9,10,11], 10));
  console.log(binarySearch([1,3,4,5,6,7,9,10,11], 2));
       
  function quickSort(array) {
    // If array is 1 or 9, return array as sorted.
    if(array.length < 2) {
        return array;
    }
    // If array is larger than 1, quickSort:
    var higher = []; // Create a higher value array
    var lower = []; // Create a lower value array
    var pivotPoint = array[0]; // 1

    for(var x = 1; x < array.length; x++) {
        if(array[x] < pivotPoint) {
            lower.push(array[x]);
        } else {
            higher.push(array[x]);
        }
    }
    return ( quickSort(lower) ).concat( (pivotPoint), (quickSort(higher) ) );
}
console.log("quickSort([]", quickSort([]));
console.log("quickSort([0]", quickSort([0]));
console.log("quickSort([9,1]", quickSort([9,1]));
console.log("quickSort([1,9]", quickSort([1,9]));
console.log("quickSort([5,4,3,2,1]", quickSort([5,4,3,2,1]));
console.log("quickSort([7,2,4,9,5,3,6,8,1,0]", quickSort([7,2,4,9,5,3,6,8,1,0]));

/*Implement ​rotateArr(arr, shiftBy)​ that accepts array and offset. 
Shift arr’s values ​to the right​ by that amount. 
‘Wrap-around’ any values that shift off array’s end to the other side, 
so that no data is lost. Operate in-place: given ([1,2,3],1)​, change the array to [​ 3,1,2]​.*/
function shiftBy(arr, x){
  // x %= arr.length;//SPEEDS UP ITERATIONS
  var temp = 0;
  var previous = 0; 
  // arr.sort(function(a,b){return a-b});
  for(var i = 0; i<x; i++){
    previous = arr[arr.length-1];
    for(var j = 0; j<arr.length; j++){
      temp = arr[j];
      arr[j] = previous;
      previous = temp;
    }
  }
  return arr;
}
console.log("Array rotation to the right: " + shiftBy([1,2,3,4,5], 1));

function shiftRight(arr, x){
  for(var i = 0; i<x; i++){
     arr.unshift(arr.pop()); 
    //pop gets last item or last few items depending on x.
    //and unshift moves those values to the front of the array. 
  }
  return arr;
}
console.log("Shift Right: " + shiftRight([1,2,3,4],3));

function shiftLeft(arr, x){
  //code works outside of this file. Look for in test file.
  for(var i = 0; i<x; i++){
      arr.push(arr[i]);
      //  arr.shift(arr.push(arr[i]));
  }
   arr.splice(0,x);
  return arr;
}
console.log("Shift Left: " + shiftLeft([1,2,3,4,5],3));

function shiftLeft(arr, x){
  // x %= arr.length;//SPEEDS UP ITERATIONS
  var temp = 0;
  var previous = 0; 
  // arr.sort(function(a,b){return a-b});
  for(var i = arr.length; i>x; i--){
    previous = arr[i-1];
    for(var j = arr.length; j>0; j--){
      arr[j-x] = temp;
      previous =  arr[j-x];
      previous = temp;
    }
  }
  return arr;
}
console.log("Array rotation to the leeft: " + shiftBy([1,2,3,4,5], 1));

function rotLeft(a, d) {
  var arr = [];
  for (var i = 0; i < a.length; i++) { //prints the array in new array (arr=[])
      arr.push(a[i]);
  };
  for (var j = 1; j <= d; j++) {
      arr.shift(arr.push(arr[0]));
  }
  return arr;
}
console.log("Here is a simple rotate to the left: " + rotLeft([1,2,3,4,5,6],4));

function rotateLeft(arr, x) {
  var newArr = [];
  var left = 0;
  for(var i=0;i<arr.length;i++){
      if(i >= x){ 
          newArr[i-x] = arr[i]; 
          //means that the values in arr[i] move to the left by x amount
      }
      else{
          newArr[arr.length-x+left] = arr[i];
            left = i+1;
      }
  }
  return newArr;
}
console.log("Rotation counter-clock wise: " + rotateLeft([1,2,3,4,5], 2));


//Return the second-to-last element of an array.
function secondToLast(arr){
  arr.sort(function(a,b){return a-b});
  for(var i=0; i<arr.length-2; i++ ){
    //iterates through the array and ends with the second to last value, and arr[i] is that value.
  }
  // console.log("Array sorted: " + arr);
  return arr[i];
}
console.log("Second to last element: " + secondToLast([2,1,3,5,4,6,9,8,10,12,11,13]));

/*Replicate JavaScript’s ​concat()​. Create a standalone function that accepts two arrays. 
Return a ​new​ array containing the first array’s elements, followed by the second array’s elements. 
Do not alter the original arrays. 
Ex.: arrConcat( ['a','b'], [1,2] )​ should return ​['a','b',1,2]​.*/

function merge(arr1, arr2){
    var arr3=[];
    var a1=0;
    var a2=0;
    while(a1<arr1.length || a2<arr2.length){
      if(a1>=arr1.length || arr1[a1]>arr2[a2]){
        arr3.push(arr2[a2]);
        a2++;
       }
       else {
         arr3.push(arr1[a1]);
         a1++;
       }
    }
    arr3.sort(function(a,b){return a-b});
     return arr3;
     }
    console.log("Sorted and merged array: " + merge([1,4,5,2,3], [7,6,9,8,11,10]));

    /*Remember iFactorial from last chapter? 
    Take that implementation and use a time-space tradeoff to accelerate the average running time.
    Recall that iFactorial(num) returns the product of positive integers from 1 to the given num. 
    For example: ​fact(1)​ = 1, ​fact(2)​ = 2, ​fact(3) = 6. For these purposes, ​fact(0)​ = 1.*/
     
    function factorial(n){
      var num = n;
      for(var i = 1; i<n; i++){
        num = n*factorial(n-1);
      }
      return num;
    }
    console.log(factorial(5));

    /*Recreate the ​shuffle()​built into JavaScript, to efficiently shuffle a given array’s values.
     Do you need to return anything from your function?*/
    //Fisher_Yates shuffle algorithm 
     function shuffle(arr){
        // var n = arr.length;
        for(var i = arr.length-1; i>0; i--){ //i index decrements and its value is what swaps with the value of the randomly generated number.  
          var j = Math.floor(Math.random() * (i+1)); //generating. Any number between 0.0-1.0 * (i+1) 
          [arr[i], arr[j]] = [arr[j], arr[i]]; // swapping
        }
        return arr;
     }
     console.log(shuffle([1,2,3,4,5,6,7,8,9,10,11]));
     
     /*Use a time-space tradeoff to accelerate the average running time of an iSigma(num) function 
     that returns the sum of all positive integers from 1 to num. 
     Recall: sig(1) = 1, sig(2) = 3, sig(3) = 6, sig(4) = 10.*/

     function iSigma(n){
       var num = n;
       for(var i = 1; i<n; i++){
         num = n+iSigma(n-1);
       }
       return num;
     }
     console.log("Sigma is: " + iSigma(4));

    /* Use a time-space tradeoff to accelerate the average running time of an iFibonacci(num) 
     function that returns the ‘num’th number in the Fibonacci sequence. 
     Recall: fib(0) = 0, fib(1) = 1, fib(2) = 1, fib(3) = 2.*/

     function threeFibonacci(n){
      if(n<=2){
        return 0;
      }
      else if(n==3){
        return 1; 
      }
      else {
        return threeFibonacci(n-1)+ threeFibonacci(n-2)+threeFibonacci(n-3);
      }
     }
     console.log("Three Fibonacci: " + threeFibonacci(8));

    
/*integer variables are name i, j, k.
real number variables are named x,y,z.
functions f, g.*/ 

