

require('../models/demand');
var mongoose = require('mongoose');
var Demand = mongoose.model('Demand');

// Get Demands
module.exports.getDemands = (callback, limit) => {
	Demand.find(callback).limit(limit);
}

// Get Demand By Id
module.exports.getDemandById = (id ,callback) =>  {
	Demand.findById(id, callback);
}

// Add Demand 
module.exports.addDemand = (demandform ,callback) =>  {
	Demand.create(demandform, callback);
}

// Update Demand 
module.exports.updateDemand = (id, demandform, options, callback) => {
    var query = {_id: id};
    var update = {

		name: demandform.name,
        number: demandform.number,
        make: demandform.make,
        model: demandform.model,
        version: demandform.version,
        transmission: demandform.transmission,
        color: demandform.color,
        mileage: demandform.mileage,
        yom: demandform.yom,
        refrence: demandform.refrence,
        note: demandform.note,
		price_range: demandform.price_range

    }

    Demand.findOneAndUpdate(query, update, options, callback);
}

// Delete Demand   
module.exports.removeDemand = (id, callback) => {
    var query = {_id: id};
    Demand.remove(query, callback);
}