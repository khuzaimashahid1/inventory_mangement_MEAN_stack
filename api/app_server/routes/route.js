var express = require('express');
var router = express.Router();

var Stock = require('../controllers/stock');

var Demand = require('../controllers/demand');




/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(`
    <html>
    <div style="text-align:center;">
    <h2>
    <br>
    <p>  Please use /api/stocks/    or   /api/demands/ </p>

    <a href="http://localhost:3000/api/stocks/" target='blank'> Stock API </a> 
    &ensp;  &ensp;
     <a href="http://localhost:3000/api/demands/" target='blank'> Demand API </a>
   </h2>
   </div>
    </html>
    
    
    `);
});


// View Stocks
router.get('/api/stocks/', function (req, res) {
    Stock.getStocks(function (err, Stocks) {
        if (err) {
            throw err;
        }
        res.json(Stocks);

    });

});

// Find Stock By Id
router.get('/api/stocks/:_id', function (req, res) {
    Stock.getStockById(req.params._id, function (err, Stock) {
        if (err) {
            throw err;
        }
        res.json(Stock);

    });

});

// Add Stocks
router.post('/api/stocks/', function (req, res) {
    var stockform = req.body;
    Stock.addStock(stockform, function (err, stockform) {
        if (err) {
            throw err;
        }
        res.json(stockform);

    });

});

// Update Stocks
router.put('/api/stocks/:_id', function (req, res) {
    var id = req.params._id;
    var stockform = req.body;
    Stock.updateStock(id, stockform, {}, function (err, stockform) {
        if (err) {
            throw err;
        }
        res.json(stockform);

    });

});


// Delete Stocks
router.delete('/api/stocks/:_id', function (req, res) {
    var id = req.params._id;
    Stock.removeStock(id, function (err, stock) {
        if (err) {
            throw err;
        }
        res.json("Stock Deleted Successfully");

    });

});


// View Demands
router.get('/api/demands/', function (req, res) {
    Demand.getDemands(function (err, Demands) {
        if (err) {
            throw err;
        }
        res.json(Demands);

    });

});

// Find Demand By Id
router.get('/api/demands/:_id', function (req, res) {
    Demand.getDemandById(req.params._id, function (err, Demand) {
        if (err) {
            throw err;
        }
        res.json(Demand);

    });

});

// Add Demands
router.post('/api/demands/', function (req, res) {
    var demandform = req.body;
    Demand.addDemand(demandform, function (err, demandform) {
        if (err) {
            throw err;
        }
        res.json(demandform);

    });

});

// Update Demand
router.put('/api/demands/:_id', function (req, res) {
    var id = req.params._id;
    var demandform = req.body;
    Demand.updateDemand(id, demandform, {}, function (err, demandform) {
        if (err) {
            throw err;
        }
        res.json(demandform);

    });

});


// Delete Demand
router.delete('/api/demands/:_id', function (req, res) {
    var id = req.params._id;
    Demand.removeDemand(id, function (err, demand) {
        if (err) {
            throw err;
        }
        res.json(demand);

    });

});


module.exports = router;