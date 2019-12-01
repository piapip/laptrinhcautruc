const express = require('express');
const brandRouter = express.Router();
const axios = require('axios');

const testPrice = require('./testPrice');
const config = require('../config')

brandRouter.use("/price", testPrice)

brandRouter.get("/", (req, res) => {
  axios
    .get(`${config.NHOM3}/api/brands`)
    .then(data => {
      res.status(200).send(data.data.data)
    })
    .catch(error => res.status(400).send(error))
})

brandRouter.get("/:brandName", (req, res) => {
  axios
    .get(`${config.NHOM3}/api/brands`)
    .then(data => {
      let found = data.data.data.filter(element => element.name.toLowerCase().includes(req.params.brandName.toLowerCase()))
      let promises = []
      for (brand of found) {
        promises.push(axios.get(`${config.NHOM3}/api/brands/${brand.id}`));
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
    .catch(error => res.status(400).send(error))
})

module.exports = brandRouter;