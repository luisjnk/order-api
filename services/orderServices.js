var findOrdersByCompanyName = function(companyName,orders) {
    ordersObject = []
    orders.forEach(function(element) {
        if(element.companyName == companyName)
            ordersObject.push(element);
    }, this);
     console.log('ordersObject', ordersObject)
    return ordersObject
}

var findOrdersByAddress = function(address,orders) {
    ordersObject = []
    orders.forEach(function(element) {
        console.log("address",address),
        console.log("element.customerAddress", element.customerAddress)
        var isAdress = element.customerAddress.includes(address);
        console.log(isAdress)
        if(isAdress == true)
            ordersObject.push(element);
    }, this);
     console.log('ordersObject', ordersObject)
    return ordersObject
}

module.exports = {
    findOrdersByCompanyName : findOrdersByCompanyName,
    findOrdersByAddress : findOrdersByAddress
}


