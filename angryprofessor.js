function angryProfessor(k, a) {
 var ontime = 0;
 var arrivedlate = 0;
   a.forEach((arrivaltime)=>{
    if(arrivaltime <= 0){
        ontime++;
     }
     else if(arrivaltime >= 0){
         arrivedlate++
     }  
  })
//   if(ontime >= k){
//      console.log("Yes");
//      return "Yes" ;
//   }
if(ontime < k){
         console.log("Yes");
         return "Yes" ;
      }
  else{
      console.log("No");
      return "No"
  }
}
angryProfessor(3, [-1,-3,4,2])
angryProfessor(2, [0,-1,2,1])