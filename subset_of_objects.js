
/*Given an array of objects and an object, return the subset of objects from the array
which contain all identical key,value pairs in the object.*/

function where(collection, source) {
  var arr = [];
  var properties = Object.keys(source);
  loop1:
  for (var obj in collection) {
    for (var key in properties) {
      if (!(properties[key] in collection[obj])) {
        continue loop1;
      }
      if (collection[obj][properties[key]] !== source[properties[key]]) {
        continue loop1;
      }
    }
    arr.push(collection[obj]);
  }
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });