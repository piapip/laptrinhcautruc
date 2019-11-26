const express = require('express');
const priceRouter = express.Router();
const axios = require('axios');

priceRouter.get("/price/:minPrice/:maxPrice", (req, res) => {
  axios
    .get("https://nguyenvd27-ltct-demo.herokuapp.com/api/products")
    .then(data => {
      let found = data.data.data.find(
        element => 
        element.price >= req.params.minPrice 
        && element.price <= req.params.maxPrice)
      res.status(500).send(found)
    })
    .catch(error => res.status(400).err(error))
}) 

priceRouter.get("/price/:minPrice/:maxPrice/:productName", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/products')
    .then(data => {
      let found = data.data.data.filter(element => 
        element.name.includes(req.params.productName)
        && element.price >= req.params.minPrice 
        && element.price <= req.params.maxPrice)
      res.status(500).send(found)
    })
    .catch(error => res.status(400).err(error))
})

module.exports = priceRouter;