var fs = require('fs')

var File = class {
    constructor () {
    }

    read () {
      return new Promise(function (resolve, reject) {
        fs.readFile('sample.txt', 'utf8', function (err,data) {
            if (err) {
              resolve(err);
            }
            resolve(data.split("\r\n"))
        });
      })
    }

    delete (data, orderId) {
        return new Promise(function (resolve, reject) {
          data.forEach((item) => {
             var isOrder = str.charAt(0) == orderId
             if(isOrder) {
               
             }
          })
        fs.readFile('sample.txt', 'utf8', function (err,data) {
            if (err) {
              resolve(err);
            }
            resolve(data.split("\r\n"))
        });
      })
    }

}


module.exports = {
  File : File
}
