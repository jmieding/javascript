function sumAll(arr) {
  var newArr = [];
  var sum = 0;
  var sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  for (var i=sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i++) {
    newArr.push(i);
  }
  for (i=0; i < newArr.length; i++) {
    sum+=newArr[i];
  }
  return sum;
}

sumAll([1, 4]);