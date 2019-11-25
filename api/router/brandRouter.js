const express = require('express');
const brandRouter = express.Router();
const axios = require('axios');

brandRouter.get("/get-brand-list", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/brands')
    .then(data => {
      res.status(500).send(data.data.data)
    })
    .catch(error => res.status(400).err(error))
})

brandRouter.get("/get-brand/:brandName", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/brands')
    .then(data => {
      let found = data.data.data.filter(element => element.name.includes(req.params.brandName))
      return axios.get('https://nguyenvd27-ltct-demo.herokuapp.com/api/brands/' + found[0].id)
    })
    .then(data => {
      res.status(500).send(data.data.productsOfBrand)
    })
    .catch(error => res.status(400).err(error))
})

module.exports = brandRouter;