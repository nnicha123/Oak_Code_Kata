const fs = require('fs')
const path = require('path')
let arr = []
module.exports = function (dirName, fileExtension, callback) {
  fs.readdir(dirName, (err, files) => {
    if (err)
      return callback(err);
    else {
      files.forEach(file => {
        if (path.extname(file) == '.' + fileExtension) {
          arr.push(file)
        }
      })
      return callback(null, arr);
    }
  })
}

