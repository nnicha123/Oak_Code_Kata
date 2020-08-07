var fs = require('fs')

const data = fs.readFileSync(process.argv[2], { encoding: 'utf8', flag: 'r' });
const arr = data.split('\n')
console.log(arr.length - 1)