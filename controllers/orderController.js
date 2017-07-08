var Promise = require("bluebird");
var orderMapping  =  require('../mappings/orderMapping.js');
var orderServices  =  require('../services/orderServices.js');

module.exports = function (app) {

app.get('/api/orders/getAllOrders', function(req, res) {
   orderMapping
      .getFile()
      .then(function(data){
           res.json({success: true, message:  orders })
        })
        .catch(function (err) {
            res.json({success: false, message:  err })
        }) 
  })

app.get('/api/orders/ordersByCompany/:companyName', function(req,res) {
    orderMapping
      .getFile()
      .then(function(data){
        orders = orderServices.findOrdersByCompanyName(req.params.companyName,data)
           res.json({success: true, message:  orders })
        })
        .catch(function (err) {
            res.json({success: false, message:  err })
        })
  });

  app.get('/api/orders/ordersByAddress/:address', function (req,res) {
    orderMapping
      .getFile()
      .then(function(data){
         orders = orderServices.findOrdersByAddress(req.params.address,data)
           res.json({success: true, message:  orders })
        })
        .catch(function (err) {
            res.json({success: false, message:  err })
        })
      })

   app.get('/api/orders/ordersByAddress/:address', function (req,res) {
    orderMapping
      .getFile()
      .then(function(data){
         orders = orderServices.findOrdersByAddress(req.params.address,data)
           res.json({success: true, message:  orders })
        })
        .catch(function (err) {
            res.json({success: false, message:  err })
        })
      })    
      
}
