const express = require('express');
const app = express();
const path = require('path');
var {Pool,Client} = require("pg");
const router = express.Router();
app.use(express.static(__dirname));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

var connectionString = "postgres://postgres:23051998@localhost:5432/postgres";
var pool = new Pool({
    connectionString:  connectionString,
})


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname +'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/api/db/products/get-brand/:brand',function(req,res){
  brand = req.params.brand
  pool.query(`SELECT "Brands".brand_name, "Categories".category_name, "Products".description, "Products".price, "Products".image, "Products".sold_out from  "Products" 
  inner join "Brands"  on "Products".brand = "Brands".id
  inner join "Categories"  on "Products".category = "Categories".id
  WHERE "Brands".brand_name = '${brand}';`,(err,data)=>{
    if(err) res.status(500).send({success:0, err:"ERROR"});
    else res.status(201).send({success:1, results:data.rows});
  })
});

router.get('/api/db/products/get-category/:category',function(req,res){
  category = req.params.category
  pool.query(`SELECT "Brands".brand_name, "Categories".category_name, "Products".description, "Products".price, "Products".image, "Products".sold_out from  "Products" 
  inner join "Brands"  on "Products".brand = "Brands".id
  inner join "Categories"  on "Products".category = "Categories".id
  WHERE "Categories".category_name ='${category}';`,(err,data)=>{
    if(err) res.status(500).send({success:0, err:"ERROR"});
    else res.status(201).send({success:1, results:data.rows});
  })
});

app.get("/api/db/products/get-brands",(req,res)=>{
  pool.query(`SELECT brand_name from "Brands";`,(err,data)=>{
      if(err) res.status(500).send({success:0, err:"ERROR"});
      else{
        res.send({success:1, results:data.rows});
      } 
  })
})

app.get("/api/db/products/get-categories",(req,res)=>{
  pool.query(`SELECT category_name from "Categories";`,(err,data)=>{
      if(err) res.status(500).send({success:0, err:"ERROR"});
      else{
        res.send({success:1, results:data.rows});
      } 
  })
})

app.get("/api/db/products/get-products",(req,res)=>{
  pool.query(`SELECT * from "Products";`,(err,data)=>{
      if(err) res.status(500).send({success:0, err:"ERROR"});
      else{
        res.send({success:1, results:data.rows});
      } 
  })
})

app.post("/:userid/cart/:productid/:number", function(req, res){
  
})

app.get('/api/db/products/get-product/:id', function(req, res){
  id = req.params.id
  pool.query(`SELECT * from "Products" WHERE "Products".id = '${id}';`,(err,data)=>{
    if(err) res.status(500).send({success:0, err:"ERROR"});
    else res.status(201).send({success:1, results:data.rows});
  })
})

// app.post('/search',function(req,res){
//   // res.sendFile(path.join(__dirname +'/sitemap.html'));
//   var searchContent = {}
//   var content = req.body.content;
//   var keytype = req.body.keytype;
//   pool.query(`SELECT "Brands".brand_name, "Categories".category_name, "Products".description, "Products".price, "Products".image, "Products".sold_out from  "Products" 
//   inner join "Brands"  on "Products".brand = "Brands".id
//   inner join "Categories"  on "Products".category = "Categories".id
//   WHERE "${keytype}".${keytype.toLowerCase()}_name = '${content}';`,
//   (err,data)=>{
//     if(err) res.status(500).send({success:0,err:"error"});
//     else res.status(201).send({success:1,results:data.rows});
//   })
// });

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');