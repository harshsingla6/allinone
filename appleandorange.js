function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const fallapple = apples.map((apple) => apple + a);
    const fallorange = oranges.map((orange) => orange + b);
  // console.log(fallapple,fallorange);
    var appleCount = 0;
    for (let i = 0; i < fallapple.length; i++) {
        // if(fallapple[i]>t){
        //     console.log(appleCount++)
        // }
      if (fallapple[i] >= s && fallapple[i] <= t) {
        appleCount++;
      }
    }
    var orangeCount = 0;
    for (let j = 0; j < fallorange.length; j++) {
        // if(fallorange[j]<=s){
        //     orangeCount++
        //     console.log(orangeCount)
        // }
      if (fallorange[j] <= t && fallorange[j] >= s) {
        orangeCount++;
      }
    }
    console.log(appleCount)
    console.log(orangeCount);
    return{
      appleCount,
      orangeCount   
     }
}
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])