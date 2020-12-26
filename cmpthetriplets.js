function compareTriplets(a, b) {
    let scoreBoardA = 0;
    let scoreBoardB = 0;
      for (var i = 0; i < a.length; i++) {
        for(var i = 0; i < b.length; i++){
        if (a[i] > b[i]) {
          scoreBoardA++;
        } 
        else if (a[i] < b[i]) {
          scoreBoardB++;
        }
        else if(a[i]=b[i]){
            //console.log("neither give any point")
        }
      }
    }
       console.log(scoreBoardA,' ',scoreBoardB)
      return {scoreBoardA , scoreBoardB};
    }
 compareTriplets([17,28,30],[99,16,8])
    