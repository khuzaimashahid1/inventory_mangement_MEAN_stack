const mongoose = require('mongoose');

// Stock Schema

const demandSchema = mongoose.Schema({
	name:{
		type: String,
		
	},
	number:{
		type: String,
	
	},
	description:{
		type: String
	},
	make:{
		type: String,
		
	},
	model:{
		type: String
	},
	version:{
		type: String
	},
	transmission:{
		type: String
	},
	color:{
		type: String
    },
    mileage:{
		type: String
	},
	yom:{
		type: String
    },
    refrence:{
		type: String
	},
	note:{
		type: String
    },
	price_range:{
		type: String
	},
	status:{
		type: String,
		default: 'pending'
	},

	create_date:{
		type: Date,
		default: Date.now
    }
    
});
 

const Demand = module.exports = mongoose.model('Demand', demandSchema);
