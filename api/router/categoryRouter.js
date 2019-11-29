const express = require('express');
const categoryRouter = express.Router();
const axios = require('axios');

categoryRouter.get("/", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/categories')
    .then(data => {
      res.status(200).send(data.data.data)
    })
    .catch(error => res.status(500).send(error))
})

categoryRouter.get("/:categoryName", (req, res) => {
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/categories')
    .then(data => {
      let found = data.data.data.filter(element => element.name.toLowerCase().includes(req.params.categoryName.toLowerCase()))
      let promises = []
      for (item of found) {
        promises.push(axios.get('https://nguyenvd27-ltct-demo.herokuapp.com/api/categories/' + item.id));
      }
      return axios.all(promises)
    })
    .then(axios.spread((...args) => {
      result = []
      for(request of args) {
        result.push(request.data.products)
      }
      res.status(200).send(result)
    }))
    .catch(error => res.status(500).send(error))
})

module.exports = categoryRouter;