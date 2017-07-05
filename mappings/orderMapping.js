var File = require('../repository/File')
"use strict";

var getFile = function() {
  file = new File.File();
   file
    .read()
      .then(function(data){
          return getOrders(data);
      })
}

function  getOrders (file) {
    console.log(file)
    var orders = []
    file.forEach((item) => {
        var fields = item.split(",")
         orders.push(mapping(fields))
      })
      console.log(orders)
    return orders
  }

  function mapping (order) {
   var Order = {
      orderId : order[0],
      companyName : order[1].trim(),
      customerAddress : order[2].trim(),
      orderedItem : order[3].trim()
   }
   return Order
 }

module.exports = {
  getFile : getFile
}
