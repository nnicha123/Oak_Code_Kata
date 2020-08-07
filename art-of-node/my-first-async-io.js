var fs = require('fs')
const fileData = fs.readFile(process.argv[2], { encoding: 'utf8', flag: 'r' }, function (err, data) {
  const arr = data.split('\n')
  console.log(arr.length - 1)
})