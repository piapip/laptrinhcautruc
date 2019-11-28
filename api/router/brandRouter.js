const express = require('express');
const brandRouter = express.Router();
const axios = require('axios');

// const testPrice = require('./testPrice');

// brandRouter.use('/price', testPrice);

brandRouter.get("/", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/brands')
    .then(data => {
      res.status(200).send(data.data.data)
    })
    .catch(error => res.status(400).send(error))
})

brandRouter.get("/:brandName", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/brands')
    .then(data => {
      let found = data.data.data.filter(element => element.name.toLowerCase().includes(req.params.brandName.toLowerCase()))
      let promises = []
      for (item of found) {
        promises.push(axios.get('https://nguyenvd27-ltct-demo.herokuapp.com/api/brands/' + item.id));
      }
      return axios.all(promises)
    })
    .then(axios.spread((...args) => {
      result = []
      for(request of args) {
        let block = {
          brand: '',
          products: []
        }
        block.brand = request.data.data[0].name
        block.products = request.data.productsOfBrand
        result.push(block)
      }
      res.status(200).send(result)
    }))
    .catch(error => res.status(400).send(error))
})

module.exports = brandRouter;