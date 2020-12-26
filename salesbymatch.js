function sockMerchant(n, ar) {
 ar.sort((a,b) => {
         return a - b;
     })
    //  console.log(ar)
 var pairs = 0
 for(var i = 0; i < ar.length ; i++){
    //  if(ar[i] === ar[i]+1){
    //      pairs++;
    //      i++
    //  }
    if(ar[i] === ar[i + 1]){
        pairs++;
        i++;
    }
 }
    console.log(pairs);
    return pairs ;
}
sockMerchant(9 ,[10,20,20,10,10,30,50,10,20])










