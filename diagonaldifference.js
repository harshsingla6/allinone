function diagonalDifference(arr) {

   var diagonal1 = 0;
   var diagonal2 = 0;
   var diagonaldiff = 0;
   for(var row = 0; row < arr.length; row++ ){
    diagonal1 = diagonal1 + arr[row][row]
    diagonal2 = diagonal2 + arr[row][arr.length-row-1]
    // console.log(diagonal2)
   }
//    console.log(diagonal1 + " " + diagonal2)
   diagonaldiff = Math.abs(diagonal1 - diagonal2)
   console.log(diagonaldiff)
   return diagonaldiff
 }

 diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]])


