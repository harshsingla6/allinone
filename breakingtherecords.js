function breakingRecords(scores) {
  var min = 0;
  var max = scores[0];
  var minCount = 0;
  var maxCount = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] < min) {
      min = scores[i];
      minCount++;
    }
    if (scores[i] > max) {
      max = scores[i];
      maxCount++;
    }
  }
  console.log(maxCount, minCount);
  return { maxCount, minCount };
}
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])