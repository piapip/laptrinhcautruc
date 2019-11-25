const express = require('express');
const categoryRouter = express.Router();
const axios = require('axios');

categoryRouter.get("/get-category-list", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/categories')
    .then(data => {
      res.status(500).send(data.data.data)
    })
    .catch(error => res.status(400).send(error))
})

categoryRouter.get("/get-category/:categoryName", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/categories')
    .then(data => {
      let found = data.data.data.filter(element => element.name.includes(req.params.categoryName))
      return axios.get('https://nguyenvd27-ltct-demo.herokuapp.com/api/categories/' + found[0].id)
    })
    .then(data => {
      res.status(500).send(data.data.productsOfCategory)
    })
    .catch(error => res.status(400).err(error))
})

module.exports = categoryRouter;