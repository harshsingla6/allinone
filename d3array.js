var arr = [2,4,5,7,99,8,97,44,67,1]
var largest = 0
var secondlargest = 0
  

for ( i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
    else if(arr[i]>secondlargest && arr[i]!=largest)
    secondlargest = arr[i];
}


 console.log(secondlargest);