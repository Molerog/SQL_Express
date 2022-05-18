const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
app.use('/products', require('./routes/products'))
app.use('/categories', require('./routes/categories'))
app.use('/productsandcategories', require('./routes/productsandcategories'))



































app.listen(port, () =>{
    console.log('Server started on port 3000')
})