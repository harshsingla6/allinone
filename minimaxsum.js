function miniMaxSum(arr) {
    var large = 0;
    var small = arr[0];
    var smallsum = 0;
    var largesum = 0;
    for ( var i = 0; i < arr.length; i++){
        if(small > arr[i]){
            small = arr[i]
        }         
        if (large < arr[i] ) {
           large = arr[i];
        } 
    }
    // console.log(large)
    // console.log(small)
        for( var j = 0; j < arr.length; j++){
        if(arr[j]<large){
            smallsum = smallsum + arr[j]
        }
        if(arr[j] > small /*&& arr[j]!==small*/){
            //   console.log(small)
            largesum = largesum + arr[j]
        }
    }
    console.log(smallsum + " " + largesum)
   }
   
   miniMaxSum([1,2,3,4,5])