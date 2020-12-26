function bonAppetit(bill, k, b) {
  var fairbillsplit = 0;
  var extracontribute = 0;
  for(var i = 0; i < bill.length; i++){
      if(i !== k){
          fairbillsplit += bill[i]/2
      }
  }
  if(fairbillsplit === b){
      console.log(" Bon Appetit ")
  }
  else{
      extracontribute = b - fairbillsplit;
      console.log(extracontribute);
  }
}

bonAppetit([3,10,2,9],1,7)
