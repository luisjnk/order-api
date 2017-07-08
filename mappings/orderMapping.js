var File = require('../repository/File')
"use strict";

var getFile = function(orderId) {
   return new Promise(function (resolve, reject) {
  file = new File.File();
   file
    .read()
      .then(function(data){
          if (orderId != undefined)
               resolve(getOrders(data));
          else {
               resolve(deleteOrder(data, orderId));
          }     
      })
    }) 
}

function  getOrders (file) {
    var orders = []
    file.forEach((item) => {
        var fields = item.split(",")
         orders.push(mapping(fields))
      })
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
