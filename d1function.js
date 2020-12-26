function factorial(number){
    var answer ;  
    var n = number;
    if(n==0 || n==1){
       return answer = 1; 
    }
    else{
        for(var i = n; i >= 1; i--){
            answer = answer * i;
          }
          return answer;
    }
}
console.log(`The factorial of ${n} is ${answer}`)

factorial(4)