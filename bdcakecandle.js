function birthdayCakeCandles(candles) {
    // Write your code here
      var tallestcandle = 0;
   var candle = 0
   for(var i = 0; i < candles.length; i++){
       if(tallestcandle <= candles[i]){
         tallestcandle = candles[i]
            candle++
        }  
    }
    // console.log(tallestcandle)
    console.log(candle)
    // return tallestcandle
}
birthdayCakeCandles([3,2,1,3])