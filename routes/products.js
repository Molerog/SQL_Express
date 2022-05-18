const express = require('express');
const ProductController = require('../controllers/ProductController.js');
const router = express.Router();


router.get('/createdb', ProductController.create)
router.get('/createtable/products', ProductController.createTableProducts)
router.post('/insertdata', ProductController.insertProduct)
router.put('/productupdate/:id', ProductController.updateProducts)
router.get('/showproducts', ProductController.showProducts)
router.post('/insertproductsandcategories',ProductController.insertProductsAndCategories)
router.get('/showproductsandcategories', ProductController.showProductsAndCategories)
router.get('/productbyid/:id',ProductController.showProductsById)
router.get('/descendentproducts', ProductController.descProduct)
router.get('/productsbyname/:name',ProductController.showProductByName)




module.exports = router;