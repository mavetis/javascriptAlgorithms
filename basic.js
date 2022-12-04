// Fundamentals
//1
function printSum(){
    var sum = 0; 
    for(var i = 0; i<256; i++){
        sum += i;
        // console.log("Integer: " + i + " Sum: " + sum);
    }
    return "Sum: " + sum;
}
console.log(printSum());

//2
function findMax(arr){
    var max=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return "Max: " + max;
    // console.log("Please display max: " + max);
}
console.log(findMax([3,5,6,7,8,9]));

//3
function oddVal(){
    console.log("Odd values: ");
    for(var i = 0; i<256; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}
console.log(oddVal());



//4
function greaterThan(arr, y){
    var count=0; 
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>y){
            count++
            
        }
    }
    console.log("The numbers greater than " + y + " is: " + count);
}
console.log(greaterThan([2,3,4,9,5,6], 1));
    
//5
function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0]; 
    var sum = 0; 
    for(var i = 0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
        else if(arr[i]< min){
            min = arr[i];
        }
        sum = sum + arr[i];
        var avg = sum/arr.length
        
    }
     console.log("min: " + min, "max: " + max, "avg: " + avg);

}

console.log( minMaxAvg([3,4,5,6,7,8,9]));

//6
function swap(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = "Dojo";
        }
    }
    return "No negative: " + arr;
}
console.log(swap([3,4,5,6,-1]));

//7 same as 3
// Create an array with all the odd integers between 1 and 255 (inclusive)
function oddValArr(){
    var arr = [];
    for(var i = 0; i<256; i++){
        if(i%2!==0){
            arr.push(i);
        }
    }
    return "Odd values: " + arr;
}
console.log(oddValArr());

//8
function iterate(arr){
    for(var i = 0; i<arr.length; i++){
    }
    return "iteration: " + arr;
}
console.log(iterate([2,3,4,5,6,7,8,9,12,11,12,56,34]));

//9
function analyze(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum= sum + arr[i];

    }
    return "Average is: " + sum/arr.length;
    // console.log("the average is: " + sum/arr.length);
}
console.log(analyze([2,3,2,4,5,7,6,8,9]));

//10
function square(arr){
    for(var i = 0; i<arr.length; i++){
        arr[i]= arr[i]*arr[i];
    }
 return "Array squared: " + arr; 
}
console.log(square([2,3,4,5,6]));

function sqrArr(arr){
    var newArr=[];
    for(var i = 0; i<arr.length; i++){
        newArr.push(arr[i]*arr[i]);
    }
    return "Another squared Array: " + newArr;
}
console.log(sqrArr([2,4,6]));


//11
function noNeg(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]<0){
            arr[i] = "no";
        }
    }
    return arr;
}
console.log(noNeg([2,3,4,5,6,-1,2,-19]));

//12
function shift(arr){
    for(var i = 0; i <arr.length; i++){
        arr[i-1]= arr[i]; //removing one value from the front of array, and moving the rest of the array down.
    }
    arr[arr.length - 1] = null; //removing one value from the back of the array and replace with " ".
    return arr; 
}
console.log("new: " + shift([2,5,6,7,3,5,3,23]));

function removeReturn(arr){
    newArr=[];
    for(var i = 0; i<arr.length; i++){
       newArr = arr.slice(1,arr.length);
    }
    console.log("first value of the array is : " + arr[0] + " complete array: " + arr);

    return "Array without the first value: " + newArr;
}
console.log(removeReturn([1,34,5,6,87,4]));

function shiftArrLeft(arr) {
    var a = arr[0];
    var newArr = [];
    for (var i = 1; i <= arr.length-1; i++) {
        newArr[i - 1] = arr[i];
    }
    // newArr[newArr.length] = a;
    return "shift array left: " + newArr;
    // console.log("shift array left: " + newArr);
  }
  console.log(shiftArrLeft([1,2,3,4,5,6]));

  function shiftArrRight(arr) {
    var a = arr[arr.length - 1];
    var newArr = [];
    for (var i = 0; i < arr.length - 1; i++) {
        newArr[i + 1] = arr[i];
    }
    newArr[0] = a;
    return "shift array to right: " + newArr;
    // console.log(newArr);
}
console.log(shiftArrRight([1,23,3,5,6,7]));

function makeItBig(arr){
    for(var i=0; i<arr.length; i++){
      if(arr[i]>0){
        arr[i] = "big"
      }
    }
    return arr;
  
  }
  console.log(makeItBig([1,2,3,-5,-3]));

  function printReturn(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i =0; i<arr.length; i++){
        if(arr[i]<low){
            low=arr[i];
        }
        if(arr[i]>high){
            high = arr[i];
        }
    }
    console.log("Lowest value: " + low);
    return high;
  }
  console.log(printReturn([1,2,3,4,33,6,7,8,9]));

  function printReturn2(arr){
    console.log("printed value for second to last value: " + arr[arr.length-2]);  
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2!==0){
            return "returned value: " + arr[i];
        }
    }

  }
  console.log(printReturn2([2,4,6,5,55,75,23,22]));

  function doubleArr(arr){
    newArr = [];
    for(var i =0; i<arr.length; i++){
        newArr.push(arr[i]+arr[i]);
    }
    return newArr;
  }
  console.log(doubleArr([1,2,3,4]));

  function countPositive(arr){
    var count=0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
  }
  console.log(countPositive([-1,-2,3,4,5,6,7,8,9,12,10,11,15,-2,4,5,-1]));


  function evenOdd(arr){
    for(var i=0;i<arr.length;i++){
      if(arr[i] % 2 !==0){
        if(arr[i+1] % 2 !==0){
          if(arr[i+2] % 2 !==0){
            console.log("That's odd!");
          }
        }
      }
      if(arr[i] % 2 == 0){
        if(arr[i+1] % 2 == 0){
          if(arr[i+2] % 2 == 0){
            console.log("Even more so!");
          }
        }
      }
    }
  }
  console.log(evenOdd([1,5,3,2,8,6]));

  function incrementOdd(arr){
    for(var i = 0; i<arr.length; i++){
        if(i%2!==0){
            arr[i]=arr[i]+1;
            console.log(arr[i]);
        }
    }
    return arr;
  }
  console.log("Increment every other value(odd) by 1: " + incrementOdd([1,2,3,4,5,6]));
  
  /*Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array. 
   For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward? */
  
   function previousLengths(arr){
    for (var i=arr.length-1;i>0;i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
  }
  
  console.log(previousLengths(['hello','dojo','awesome']));

  function addSeven(arr){
    newArr=[];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]+7);
    }
    console.log("Original array: " + arr);
    return newArr;
  }
  console.log("Add seven: " + addSeven([1,2,3,4,5,6]));

  function reverseArr(arr){
    for(var i=0; i<arr.length/2; i++){
        var temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
  }
  console.log(reverseArr([1,2,3,4,5,6]));

  function reverseArr(arr){
    var reverse = [];
    for(var i = 0; i<arr.length; i++){
      reverse.push((arr[arr.length-1-i]));
    }
    console.log("original array: " + arr);
    return reverse;
  }
  console.log("The reverse of array: " + reverseArr([1,2,3,4,5,6,7]));

  function allNegative(arr){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<0){
            newArr.push(arr[i]=arr[i]);

        }
        else if(arr[i]>0){
            newArr.push(arr[i]=arr[i]*(-1));
        }
    }
    return newArr;
  }
console.log(allNegative([4,-2,3,-5,6,7]));

function alwaysHungry(arr){
    var sum = 0;
    for(var i =0; i <arr.length; i++){
        if(arr[i]=='food'){
            console.log("yummy");
        }
        else{
            sum++
        }
    }
    if(sum==arr.length){
        console.log("I''m hungry");
    }
    // return arr;
}
console.log(alwaysHungry(['none', 'yellow', 5, 2, 'happy']));
console.log(alwaysHungry(['none', 'yellow', 5, 2, 'food']));


function swapTowardCenter(arr) {
    var firstVal = arr[0];
    var lastVal = arr[arr.length - 1];
    arr[0] = lastVal;
    arr[arr.length - 1] = firstVal;
    var thirdVal = arr[2];
    var thirdCenter = arr[arr.length - 3];
    arr[2] = thirdCenter;
    arr[arr.length - 3] = thirdVal;
    return arr;
}
console.log(swapTowardCenter([1,2,3,4,5,6]));

function scaleArray(arr, num){
    for(var i =0; i<arr.length; i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}
console.log(scaleArray([2,3,4],3));