const express = require('express');
const productsRouter = express.Router();
const axios = require('axios');
const config = require('../config')
const testPrice = require('./testPrice')

productsRouter.use('/price', testPrice)

productsRouter.get("/id/:productID", (req, res) => {
  axios
    .get(`${config.NHOM3}/api/products/${req.params.productID}`)
    .then(data => {
      res.status(201).send(data.data.data)
    })
    .catch(error => res.status(500).send(error))
})

productsRouter.get("/name/:productName", (req, res) => {
  axios
    .get(`${config.NHOM3}/api/products`)
    .then(data => {
      let found = data.data.data.filter(element => element.name.toLowerCase().includes(req.params.productName.toLowerCase()))
      let result = []
      for (item of found) {
        result.push(item)
      }
      res.status(201).send(result)
    })
    .catch(error => res.status(500).send(error))
})

module.exports = productsRouter;