const express = require('express');
const CategoryController = require('../controllers/CategoryController.js');
const router = express.Router();


router.get('/createtable/categories', CategoryController.createTableCategories)
router.post('/insertcategory', CategoryController.insertCategories)
router.put('/categoryupdate/:id', CategoryController.updateCategories)
router.get('/showcategories', CategoryController.showCategories)
router.get('/categorybyid/:id', CategoryController.showCategoriesById)
router.delete('/delete/:id', CategoryController.deleteById)



module.exports = router;