const express = require('express');
const productsRouter = express.Router();
const axios = require('axios');

productsRouter.get("/id/:productID", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/products/'+req.params.productID)
    .then(data => {
      res.status(201).send(data.data.data)
    })
    .catch(error => res.status(500).send(error))
})

productsRouter.get("/name/:productName", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/products')
    .then(data => {
      let found = data.data.data.filter(element => element.name.toLowerCase().includes(req.params.productName.toLowerCase()))
      res.status(201).send(found)
    })
    .catch(error => res.status(500).send(error))
})

module.exports = productsRouter;