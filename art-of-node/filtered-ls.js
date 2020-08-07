const fs = require('fs');
const path = require('path');

// Function to get current filenames 
// in directory with specific extension 
fs.readdir(process.argv[2], (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (path.extname(file) == '.' + process.argv[3])
        console.log(file);
    })
  }
}) 