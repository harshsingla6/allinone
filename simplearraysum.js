function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    // var ar = [1,2,3,4,10,11]
    var total = 0
    for(var i=0; i<ar.length; i++){
        var total = total+ar[i]
    }
    //  ar.forEach(function f(element){
    //           total +=  element;
    //          })
            console.log(total)        
     return total;

}
simpleArraySum([1,2,3,4,10,11])