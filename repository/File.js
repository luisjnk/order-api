var fs = require('fs')

var File = class {
    constructor () {
    }

    read () {
      return new Promise(function (resolve, reject) {
        fs.readFile('./sample.txt', 'utf8', function (err,data) {
            if (err) {
              resolve(err);
            }
            console.log(data)
            resolve(data.split("\r\n"))
        });
      })
    }


}


module.exports = {
  File : File
}
