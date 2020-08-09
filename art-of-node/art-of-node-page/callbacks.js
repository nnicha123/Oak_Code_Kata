// Synchronous
// var myNumber = 1
// function addOne() { myNumber++ } // define the function
// addOne() // run the function
// console.log(myNumber) // logs out 2

// Will get error (readfile not done yet before console log)
// var fs = require('fs') // require is a special function provided by node
// var myNumber = undefined // we don't know what the number is yet since it is stored in a file

// function addOne() {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//   })
// }
// addOne()
// console.log(myNumber) // logs out undefined -- this line gets run before readFile is done

var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('./number.txt', function (err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)