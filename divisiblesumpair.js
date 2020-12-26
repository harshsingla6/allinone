function divisibleSumPairs(n, k, ar) {
  var count = 0;
  for (var i = 0; i < ar.length; i++) {
    for (j = 0; j < ar.length; j++) {
     if (i < j && (ar[i] + ar[j]) % k === 0) {
   count = count + 1;
  }
    }
  }
  console.log(count)
  return count
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])





