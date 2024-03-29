const express = require('express');
const categoryRouter = express.Router();
const axios = require('axios');
const config = require('../config')

const testPrice = require('./testPrice')

categoryRouter.use('/price', testPrice)

categoryRouter.get("/", (req, res) => {
  axios
    .get(`${config.NHOM3}/api/categories`)
    .then(data => {
      res.status(200).send(data.data.data)
    })
    .catch(error => res.status(500).send(error))
})

categoryRouter.get("/:categoryName", (req, res) => {
  axios
    .get(`${config.NHOM3}/api/categories`)
    .then(data => {
      let found = data.data.data.filter(element => element.name.toLowerCase().includes(req.params.categoryName.toLowerCase()))
      let promises = []
      for (category of found) {
        promises.push(axios.get(`${config.NHOM3}/api/categories/${category.id}`));
      }
      return axios.all(promises)
    })
    .then(axios.spread((...args) => {
      result = []
      for(request of args) {
        for(item of request.data.products) {
          result.push(item)
        }
      }
      res.status(200).send(result)
    }))
    .catch(error => res.status(500).send(error))
})

module.exports = categoryRouter;