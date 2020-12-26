function pickingNumbers(a) {
// a.sort((a,b)=>a-b)
// console.log(a)
   var arr = [];
for( var i = 0; i < a.length ; i++){
    if(Math.abs(a[i] - a[i + 1] == 0 || 1)){
        console.log(a[i])
        // arr.push(a[i]);
        i++;
    }
}
}

pickingNumbers([1,2,2,3,1,2])
