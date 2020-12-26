function kangaroo(x1, v1, x2, v2) {
   var n = 0;
   for(n = 0; n < 10000 ; n++){
    if (x1 + n * v1 === x2 + n * v2) {
        console.log("Yes")
            return "Yes"
      }
       n++;
   }
       console.log("No")
       return "No"
}
 
kangaroo(0,3,4,2)


// function kangaroo(x1, v1, x2, v2) {
//     let n = 0;
//     while (n < 10000) {
//       if (x1 + n * v1 === x2 + n * v2) {
//           console.log("yes")
//         return "Yes"
//       }
//       n++;
//     }
//     console.log("No")
//     return "NO";
//   }

//   kangaroo(0,2,5,3)

