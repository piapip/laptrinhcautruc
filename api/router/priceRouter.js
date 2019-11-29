const express = require('express');
const priceRouter = express.Router();
const axios = require('axios');

priceRouter.get("/:minPrice/:maxPrice", (req, res) => {
  axios
    .get("https://nguyenvd27-ltct-demo.herokuapp.com/api/products")
    .then(data => {
      let found = data.data.data.filter(
        element => 
        element.price >= req.params.minPrice 
        && element.price <= req.params.maxPrice)
      res.status(201).send(found)
    })
    .catch(error => res.status(500).send(error))
}) 

priceRouter.get("/:minPrice/:maxPrice/:productName", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/products')
    .then(data => {
      let found = data.data.data.filter(element => 
        element.name.includes(req.params.productName)
        && element.price >= req.params.minPrice 
        && element.price <= req.params.maxPrice)
      res.status(201).send(found)
    })
    .catch(error => res.status(500).send(error))
})

module.exports = priceRouter;