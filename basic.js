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
