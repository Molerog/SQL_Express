const db = require("../config/database");


const ProductAndCategoryController = {
    createTableMid(req,res){
        let sql = `CREATE TABLE productsandcategories (
            (id int AUTO_INCREMENT, 
            products_id INT NOT NULL,
            categories_id INT NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (products_id) REFERENCES products(id), 
            FOREIGN KEY (categories_id) REFERENCES categories(id)))`;
        db.query(sql,(err,result) => {
            if(err)throw err;
            console.log(result);
            res.send('Table has been created...')
        })
    }
}


module.exports = ProductAndCategoryController;