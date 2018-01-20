var express = require('express');
var router = express.Router();
var Orders = require('../controllers/orders.controllers');

router.post('/createProduct', Orders.createProduct);
router.post('/create', Orders.createOrder);
router.put('/processOrder',Orders.processOrder);
router.get('/',Orders.display_kitchen);
router.get('/products',Orders.getAllProducts);
router.get('/prediction',Orders.getPrediction);

module.exports = router;