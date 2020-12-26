function plusMinus(arr) {
  var positiveno = 0;
  var negativeno = 0;
  var zerono = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveno += 1;
    }
    else if (arr[i] < 0) {
      negativeno += 1;
    }
    else {
      zerono += 1;
    }
    var positivefrac = positiveno / arr.length;
    var negativefrac = negativeno / arr.length;
    var zerofrac = zerono / arr.length;
  }
  console.log(positivefrac,
    negativefrac,
    zerofrac)
  return {
    positivefrac,
    negativefrac,
    zerofrac
  }
}
plusMinus([-4, 3, -9, 0, 4, 1])
