function utopianTree(n) {
    let height = 0;
for (var i = 0; i < n.length; i++) {
 if ( n[i] % 2 === 0) {
    // height = height * 2;
     height = height + 1
  console.log(height);
 }
 else {
    // height = height + 1;
    height = height * 2;
    console.log(height);
} 
    }
    return height;
}


// function utopianTree(n) {
//     let height = 1;
  
//     for (let i = 0; i < n.length ; i++) {
//       i % 2 === 0 ? (height *= 2) : ++height;
//     }
//     console.log(height)
//     return height;
//   }

utopianTree([0,1,2,3,4,5])