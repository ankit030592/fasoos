var Sequelize = require('sequelize');
var db = require('../db/db');
var Products = db.import('../models/products');
var Orders = db.import('../models/orders');
var KitchenDisplay = db.import('../models/kitchen_display');
var moment = require('moment');
KitchenDisplay.belongsTo(Products, {
    foreignKey: 'product_id'
});

Products.hasMany(Orders, {
    foreignKey: 'product_id'
});


exports.createProduct = function(req, res) {
    console.log('Order Controller : Entering createProduct');
    if (!req.body.product_name) {
        return res.status(400).send({
            error: 'Please Enter product name'
        });
    }

    if (!req.body.quantity) {
        return res.status(400).send({
            error: 'Please Enter quantity'
        });
    }

    var product_name = (req.body.product_name).toUpperCase();
    var quantity = Number(req.body.quantity);
    var product = {
        product_name: product_name
    };
    Products.create(product).then(function(product_data) {
        // body... 
        createOrderUtil(product_data.id, quantity, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    error: "Failed to Place order"
                });
            }
            return res.status(200).send(result);
        });
    }).catch(function(err) {
        console.log(err);
        return res.status(500).send({
            error: "Failed to Place order"
        });
    });
};

exports.createOrder = function(req, res, next) {
    console.log('Order Controller : Entering createOrder');

    if (!req.body.product_id) {
        return res.status(400).send({
            error: 'Please select a product'
        });
    }

    if (!req.body.quantity) {
        return res.status(400).send({
            error: 'Please Enter quantity'
        });
    }
    var product_id = req.body.product_id;
    var quantity = Number(req.body.quantity);
    console.log(req.body);
    createOrderUtil(product_id, quantity, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).send({
                error: "Failed to Place order"
            });
        }
        return res.status(200).send(result);
    });
};

exports.processOrder = function(req, res, next) {
    console.log('Order Controller : Entering createOrder');

    if (!req.body.product_id) {
        return res.status(400).send({
            error: 'Please select a product'
        });
    }
    var product_id = req.body.product_id;
    KitchenDisplay.findOne({
        where: {
            product_id: product_id
        }
    }).then(function(data) {
        console.log(data.quantity);
        console.log(data.created_till_now);
        var new_quantity = data.dataValues.quantity - 1;
        var created_till_now = data.created_till_now + 1;
        if (new_quantity < 0) {
            return res.status(401).send({
                error: "All order complted"
            });
        }
        // console.log('quantity after ', quantity);
        console.log('created_till_now after ', created_till_now);
        KitchenDisplay.update({
            quantity: new_quantity,
            created_till_now: created_till_now,
            updated: new Date()
        }, {
            where: {
                product_id: product_id
            }
        }).then(function(data) {
            console.log(data);
            return res.status(200).send('Order Completed');
        }).catch(function(err) {
            console.log(err);
            return res.status(500).send({
                error: 'Failed to Complete Order'
            });
        });
    }).catch(function(err) {
        console.log('err ', err);
        return res.status(500).send({
            error: 'Failed to Complete Order'
        });
    });

};

exports.display_kitchen = function(req, res, next) {
    console.log('Order Controller : Entering display_kitchen');
    KitchenDisplay.findAll({
        include: {
            model: Products,
            attributes: ['id', 'product_name']
        }
    }).then(function(data) {
        return res.status(200).send(data);
    }).catch(function(err) {
        return res.status(500).send(err);
    });
};

exports.getAllProducts = function(req, res, next) {
    console.log('Order Controller : Entering getAllProducts');

    Products.findAll().then(function(data) {
        return res.status(200).send(data);
    }).catch(function(err) {
        return res.status(500).send(err);
    });
};

function createOrderUtil(product_id, quantity, next) {
    Orders.create({
        product_id: product_id,
        quantity: quantity
    }).then(function(data) {
        updateKitchenBoardQuantity(product_id, quantity, function(err, display_data) {
            if (err) {
                console.log(err);
                next(err, null);
            } else {
                next(null, display_data);
            }
        });
    }).catch(function(err) {
        console.log(err);
        next(err, null);
    });
}

function updateKitchenBoardQuantity(product_id, quantity, next) {
    KitchenDisplay.findOne({
        where: {
            product_id: product_id
        }
    }).then(function(data) {
        if (!data) {
            createKitchenDisplay(product_id, quantity, function(err, kitchen_data) {
                if (err) return next(err);
                else return next(null, kitchen_data);
            });
        } else {
            var new_quantity = quantity + data.quantity;
            updateKitchenDisplay(data, new_quantity, function(err, kitchen_data) {
                if (err) return next(err);
                else return next(null, kitchen_data);
            });
        }
    }).catch(function(err) {
        next(err, null);
    });
}

function createKitchenDisplay(product_id, quantity, next) {
    KitchenDisplay.create({
        product_id: product_id,
        quantity: quantity
    }).then(function(data) {
        next(null, data);
    }).catch(function(err) {
        next(err, null);
    });
}

function updateKitchenDisplay(kitchen_data, quantity, next) {
    console.log(kitchen_data);
    KitchenDisplay.update({
        quantity: quantity,
        updated: new Date()
    }, {
        where: {
            id: kitchen_data.id
        }
    }).then(function(data) {
        next(null, data);
    }).catch(function(err) {
        next(err, null);
    });
}

exports.getPrediction = function(req, res, next) {
    console.log('Order Controller : Entering getPrediction');
    var obj = {};
    var arr = [];
    var current_date_time = moment().unix();
    Products.findAll({
        include: {
            model: Orders
        }
    }).then(function(all_products) {
        var prediction_array = all_products.map(function(x) {
            var obj = {};
            obj.name = x.product_name;
            obj.product_id = x.id;
            if (x.orders.length > 0) {
                obj.predicted = x.orders.reduce(function(a, b) {
                    console.log(a)
                    var order_date_time = moment(b.created).unix();
                    // console.log(order_date_time);
                    if (current_date_time - order_date_time < 1800) {
                        if (a === undefined) {
                            a = 0;
                        }
                        console.log(b.quantity);
                        console.log(a);
                        return a + b.quantity;
                    }
                }, 0)
            }
            return obj;
        });
        prediction_array.map(function(x) {
            if (x.predicted === undefined) {
                x.predicted = 0;
            } else {
                x.predicted = x.predicted * 2;
            }
            KitchenDisplay.update({
                predicted: x.predicted,
                updated: new Date()
            }, {
                where: {
                    product_id: x.product_id
                }
            });
        })
        return res.status(200).send(prediction_array);
    }).catch(function(error) {
        console.log(error);
        return res.status(500).send({
            error: 'Failed to predict'
        });
    })

};