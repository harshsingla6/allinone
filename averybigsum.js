function aVeryBigSum(ar) {
    total = 0;
    // var n =ar[n];
       for(var i=0; i<ar.length; i++){
           var total = total+ar[i]
       }
          console.log(total)
           return total
    }
    aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])