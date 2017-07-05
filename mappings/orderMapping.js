
var fs = require('fs')
"use strict";

var getFile = function() {
  orderMapping = new orderMapping();
   orderMapping
    .fileRead()
    .then(function(data){
      console.log(data);
      return data;
    })
}

var orderMapping = class {
    constructor () {
    }

    fileRead () {
      return new Promise(function (resolve, reject) {
        fs.readFile('./sample.txt', 'utf8', function (err,data) {
            if (err) {
              resolve(err);
            }
            resolve(data.split("\r\n"))
        });
      })
    }

    getFile () {
      fileRead()
        .then(function(data){
          return data
        })
    }
}


module.exports = {
  orderMapping: orderMapping,
  getFile : getFile
/* orderMapping:  class orderMapping {

  constructor () {
      this.file = fileRead()
    }

  fileRead () {
      fs.readFile('./sample.txt', 'utf8', function (err,data) {
          if (err) {
            return err;
          }
          console.log('aqui')
          return data.split("\r\n")
      });
  }

  getFile () {

      return this.file;
  }

  getOrders (file) {
      console.log(file)
      var orders = []
      file.forEach((item) => {
          var fields = item.split(",")
           orders.push(orderMapping(fields))
        })
        console.log(orders)
          return orders
  }

    writeFile (orders) {
         fs.writeFile('./sample.txt', songList, function(err) {
          if (err) {
          console.log (err);
          }
      })
   }

   orderMapping (order,address,number) {
    var Order = {
       orderId : order[0],
       companyName : order[1].trim(),
       customerAddress : order[2].trim(),
       orderedItem : order[3].trim()
    }
    return Order
  }

}*/
}
