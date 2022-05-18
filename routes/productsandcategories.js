const express = require('express');
const ProductAndCategoryController = require('../controllers/ProductAndCategoryController.js');
const router = express.Router();



router.get('/createtable/productsandcategories', ProductAndCategoryController.createTableMid)


module.exports = router;