var animals = [
  1, 3, 2, 4, 5
];
const data = require('./data.json')

// descending order

animals.sort(function (a, b) {
  return a - b
})
data.sort(function (a, b) {
  return a["Ranking"] - b["Ranking"]
})

console.log(animals);
console.log(data)
// ["elephant", "dog", "cat", "bee", "ant"]