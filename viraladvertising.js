function viralAdvertising(n) {
 var shared = 5;
 var liked = 2;
 var cumulative = 2;
 for(var day = 1 ; day < n ; day++){
      shared = Math.floor(shared / 2) * 3 ;
     //  console.log(shared)
      liked = Math.floor(shared / 2);
       cumulative += liked
 }
    console.log(cumulative)
}

viralAdvertising(3)






















// if(3>3){
//     console.log("yes")
// }
// else console.log("no")