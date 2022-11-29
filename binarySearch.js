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