const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));


// const arr1 = [5, 12, 8, 130, 44];
// // var value1 = arr1.findIndex(function f(element) { 
// //     return element > 13; 
// // });  
// // const isLargeNumber = (element) => element > 13;
// var value1 = arr1.findIndex(function (element) { 
//     return element > 8;
// })
// console.log(arr1.findIndex(value1));

var array = [-10, -0.20, 0.30, -40, -50]; 
  
// function (return element > 0). 
var found = array.findIndex(function (element) { 
    return element > 0; 
}); 

// Printing desired values. 
console.log(found); 