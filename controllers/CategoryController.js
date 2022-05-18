const db = require("../config/database");


const CategoryController = {
    createTableCategories(req,res)  {
        let sql = 'CREATE TABLE categories (id int AUTO_INCREMENT, category VARCHAR(255), PRIMARY KEY(id))';
        db.query(sql,(err,result)=>{
            if(err)throw err;
            console.log(result)
            res.send('Table has been created...')
        })
    },
    insertCategories(req, res){
        let post = {category: req.body.category};
        let sql = 'INSERT INTO categories SET ?'
        db.query(sql,post,(err,result) =>{
            if(err) throw err;
            console.log(result);
            res.send('Category added...')
        })
    },
    updateCategories(req,res){
        let newCategory = `Action shootem up`;
        let sql =`UPDATE categories SET category = '${newCategory}' WHERE id = ${req.params.id}`;
        db.query(sql, (err,result) =>{
            if(err) throw err;
            console.log(result);
            res.send('Product updated...');
        })
    },
    showCategories(req,res){
        let sql = `SELECT * FROM categories`;
        db.query(sql, (err,result) => {
            if(err) throw err;
            console.log(result);
            res.send(result)
        })
    },
    showCategoriesById(req,res){
        let sql = `SELECT categories.category FROM categories WHERE id = ${req.params.id}`
        db.query(sql, (err,result) => {
            if(err) throw err;
            console.log(result)
            res.send('Category showed...')
        })
    },
    deleteById(req,res){
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result)
            res.send('Product has been deleted...')
        })
    }
}


module.exports = CategoryController;