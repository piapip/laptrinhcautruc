const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

var {Pool,Client} = require("pg");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dotenv = require('dotenv');
dotenv.config();

var pool = new Pool({
    connectionString:  process.env.DATABASE_URL,
    ssl: true,
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Your node js server is running');
});

app.get('/api/db/products/get-brand/:brand', getProductByBrand);

function getProductByBrand(req, res) {
    brand = req.params.brand
    pool.query(`SELECT Products.id, Brands.brand, Categories.category, Products.description, Products.price, Products.image, Products.sold_out from  Products 
    inner join Brands  on Products.brand = Brands.id
    inner join Categories  on Products.category = Categories.id
    WHERE LOWER(Brands.brand) = LOWER('${brand}');`,(err,data)=>{
      if(err) res.status(500).send({success:0, err:"ERROR"});
      else res.status(201).send({success:1, results:data.rows});
    })
    console.log(brand)
}

app.get('/api/db/products/get-category/:category', function (req, res) {
    category = req.params.category
    pool.query(`SELECT Products.id,Brands.brand, Categories.category, Products.description, Products.price, Products.image, Products.sold_out from  Products 
    inner join Brands  on Products.brand = Brands.id
    inner join Categories  on Products.category = Categories.id
    WHERE LOWER(Categories.category) = LOWER('${category}');`, (err, data) => {
        if (err) res.status(500).send({ success: 0, err: "ERROR" });
        else res.status(201).send({ success: 1, results: data.rows });
    })
});

app.get('/api/db/products/get-prices/min=:min_price&max=:max_price', function(req, res){
    min_price = req.params.min_price
    max_price = req.params.max_price
    
    pool.query(`select * from Products where Products.price <= ${max_price} and Products.price >= ${min_price};`, (err, data) => {
        if (err) res.status(500).send({success: 0, err: "ERROR"});
        else res.status(201).send({success: 1, results: data.rows})
    })

});

app.get('/api/db/products/get-latest', function(req, res){
    pool.query(`select * from Products order by create_at desc;`, (err, data) => {
        if (err) res.status(500).send({success: 0, err: "ERROR"});
        else res.status(201).send({success: 1, results: data.rows})
    })
});

app.get('/api/db/products/get-category-list', function (req, res) {
    pool.query(`SELECT name from Categories;`, (err, data) => {
        if (err) res.status(500).send({ success: 0, err: "ERROR" });
        else res.status(201).send({ success: 1, results: data.rows });
    })
});

app.get('/api/db/products/get-brand-list', function (req, res) {
    pool.query(`SELECT brand from Brands;`, (err, data) => {
        if (err) res.status(500).send({ success: 0, err: "ERROR" });
        else res.status(201).send({ success: 1, results: data.rows });
    })
});

app.get('/api/db/products/get-id/:id', function (req, res) {
    pool.query(`select Products.id, Brands.brand, Categories.category, Products.description, Products.price, Products.image, Products.sold_out from Products 
    inner join Brands on Products.brand = Brands.id
    inner join Categories on Products.category = Categories.id
    where Products.id = ${req.params.id};`, (err, data) => {
        if (err) res.status(500).send({ success: 0, err: "ERROR" });
        else res.status(201).send({ success: 1, results: data.rows });  
    })
});

