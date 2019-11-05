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

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname +'/about.html'));
});

app.post('/search',function(req,res){
  // res.sendFile(path.join(__dirname +'/sitemap.html'));
  var searchContent = {}
  var content = req.body.content;
  pool.query(`select * from "Products", "Brands"
  where "Products".brand = "Brands".id and "Brands".name = '${content}';`,
  (err,data)=>{
    if(err) res.status(500).send({success:0,err:"error"});
    else res.status(201).send({success:1,results:data.rows});
  })
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');