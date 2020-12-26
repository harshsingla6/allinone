function getMoneySpent(keyboards, drives, b) {
  var maxpurchase = 0;
  for (var i = 0; i < keyboards.length; i++) {
    for (var j = 0; j < drives.length; j++) {
      let purchase = keyboards[i] + drives[j];
      //  if(purchase >=b){
      //    console.log("purchase")
      //  }
      if (purchase <= b && puchase > maxpurchase) {
        maxpurchase = purchase;
      }
    }
  }
  if (maxpurchase === 0) {
    console.log("-1")
    return -1;
  }
  console.log(maxpurchase)
  return maxpurchase;
}

getMoneySpent([4], [5], 5)