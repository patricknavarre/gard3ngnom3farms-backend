var express = require('express');
var router = express.Router();
var { createOrder, getAllOrders } = require('./controller/ordersControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.post('/create-order', createOrder)

router.get('/get-all-orders', getAllOrders);

module.exports = router;