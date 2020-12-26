function squares(a, b) {
var count = 0;
for(var i = 1;  ; i++){
    // if(Math.sqrt(i) >= a && Math.sqrt(i) <= b){
        sqr = i*i;
        if(sqr > a && sqr < b ){
        count++;
        console.log(count)
        return count ;

    }
        console.log("0")
        return 0 ;
}
}

squares(3,9)
squares(17,24)
