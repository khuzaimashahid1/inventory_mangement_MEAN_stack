
require('../models/stock');
var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');


// Get Stock
module.exports.getStocks = (callback, limit) => {
	Stock.find(callback).limit(limit);
}

// Get Stock By ID
module.exports.getStockById = (id ,callback) =>  {
	Stock.findById(id, callback);
}

// Add Stock
module.exports.addStock = (stockform, callback) => {
	Stock.create(stockform, callback);
}

// Update Stock
module.exports.updateStock = (id, stockform, options, callback) => {
    var query = {_id: id};
    var update = {

        name: stockform.name,
        number: stockform.number,
        make: stockform.make,
        model: stockform.model,
        version: stockform.version,
        transmission: stockform.transmission,
        color: stockform.color,
        mileage: stockform.mileage,
        yom: stockform.yom,
        refrence: stockform.refrence,
        note: stockform.note,
        availability: stockform.availability,
        price: stockform.price,
        image: stockform.image

    }

    Stock.findOneAndUpdate(query, update, options, callback);
}

// Delete Stock   
module.exports.removeStock = (id, callback) => {
    var query = {_id: id};
    Stock.remove(query, callback);
}