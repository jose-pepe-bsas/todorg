const fs = require("fs");

function i (where,what,about){
  console.log(where)
  console.log(what)
  console.log(about)
let writeStream = fs.createWriteStream(where+what);
writeStream.write(about);
writeStream.close()
}

function o(path) {
  const readed = []
  fs.readdirSync(path).forEach(file => {
      readed.push(file)
  });
  return readed;
}

exports.o = o
exports.i = i
