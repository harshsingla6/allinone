function staircase(n) {
//     var i,j;
//     for(i=1;i<=n;i++){
//      for(j=1;j<=i;j++){
//          console.log("#")
//      }
//      console.log('\n')
//     }
// }

for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
}
}
 
staircase(4)