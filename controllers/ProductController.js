const db = require("../config/database");

const ProductController ={
    create(req,res){
            let sql = 'CREATE DATABASE bootcampDB';
            db.query(sql,(err,result) =>{
                if(err)throw err;
                console.log(result);
                res.send('Database created...')
            })
        },
    createTableProducts(req,res){
            let sql = 'CREATE TABLE products (id int AUTO_INCREMENT, name VARCHAR(255), price FLOAT, PRIMARY KEY(id))';
            db.query(sql,(err,result) => {
                if(err)throw err;
                console.log(result);
                res.send('Table has been created...')
            })
        },
    insertProduct(req, res){
            let post = {name: req.body.name, price: req.body.price};
            let sql = 'INSERT INTO products SET ?'
            db.query(sql,post,(err,result) =>{
                if(err) throw err;
                console.log(result);
                res.send('Product added...')
            })
        },
    updateProducts(req,res){
            let newProduct = "Enter The Gungeon";
            let sql =`UPDATE products SET name = '${newProduct}' WHERE id = ${req.params.id}`;
            db.query(sql, (err,result) =>{
                if(err) throw err;
                console.log(result);
                res.send('Product updated...');
            })
        },
    showProducts(req,res){
            let sql = `SELECT * FROM products`;
            db.query(sql, (err,result) => {
                if(err) throw err;
                console.log(result);
                res.send(result)
            })
        },
    insertProductsAndCategories(req, res){
            let post = {products_id: req.body.products_id, categories_id: req.body.categories_id};
            let sql = 'INSERT INTO productsandcategories SET ?'
            db.query(sql,post,(err,result) =>{
                if(err) throw err;
                console.log(result);
                res.send('Added...')
            })
        },
    showProductsAndCategories(req, res){
            let sql = `SELECT products.name, categories.category 
            FROM productsandcategories
            INNER JOIN products ON productsandcategories.products_id = products.id
            INNER JOIN categories ON productsandcategories.categories_id = categories.id;`
            db.query(sql, (err,result) => {
                if(err) throw err;
                console.log(result)
                res.send('Connection granted...');
            })
        },
    showProductsById(req,res){
            let sql = `SELECT products.name FROM products WHERE id = ${req.params.id}`
            db.query(sql, (err,result) =>{
                if(err) throw err;
                console.log(result)
                res.send('Selection completeded...')
            })
        },
    descProduct(req,res){
            let sql= `SELECT * FROM products ORDER BY id DESC;`
            db.query(sql, (err,result) => {
                if(err) throw err;
                console.log(result)
                res.send('Products showed...')
            })
        },
    showProductByName(req,res){
            let sql = `SELECT products.name FROM products WHERE name = '${req.params.name}'`
            db.query(sql, (err,result) => {
                if(err) throw err;
                console.log(result)
                res.send(result)
            })
        }
}


module.exports = ProductController;