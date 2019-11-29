const express = require('express');
const brandRouter = express.Router();
const axios = require('axios');

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
        result.push(request.data.products)
      }
      res.status(200).send(result)
    }))
    .catch(error => res.status(400).send(error))
})

module.exports = brandRouter;