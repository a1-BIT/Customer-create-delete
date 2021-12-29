const express = require('express');
const customerController = require('../controller/customerontroller')
const router = express.Router();

//add customer
router.post('/addCustomer', customerController.addCustomer);

//delete ductomer
router.delete('/deleteCustomer/:id', customerController.deleteCustomer)


module.exports = router;