// function migratoryBirds(arr) {
// arr.sort((a,b)=> a - b )
// // console.log(arr)
// var pair = 0;
//  for(var i = 0; i < arr.length ; i++){
//      if(arr[i] === arr[i+1]){
//       pair++
//      }
//  }
//      console.log(pair)
// }
// migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])






















































// function migratoryBirds(arr) {
//     let birdObj = {};
//     // populate birdObj by counting up the sightings
//     for (let i = 0; i < arr.length; i++) {
//       if (!birdObj[arr[i]]) {
//         birdObj[arr[i]] = 0;
//       }
//       birdObj[arr[i]] = birdObj[arr[i]] + 1;
//     }
  
//     const birdObjKeys = Object.keys(birdObj);
//     const birdObjValues = Object.values(birdObj);
//     const maxSighting = Math.max(...birdObjValues);
  
//     for (let j = 0; j < birdObjValues.length; j++) {
//       if (birdObjValues[j] === maxSighting) {
//         console.log(birdObjKeys[j])
//         return birdObjKeys[j];
//       }
//     }
//     console.log(max)
//     return max;
//   }

//   migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])