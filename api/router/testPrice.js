const express = require('express');
const testPrice = express.Router();
const axios = require('axios')

testPrice.get('/:minPrice/:maxPrice/:input', (req, res) => {
  let path = req.connection.parser.incoming._parsedOriginalUrl.path.split("/")
  var dataSource = path[path.length - 5]
  axios
    .get('https://nguyenvd27-ltct-demo.herokuapp.com/api/' + dataSource)
    .then(data => {
      let found = data.data.data.filter(element => element.name.toLowerCase().includes(req.params.input.toLowerCase()))
      let promises = []
      for (item of found) {
        promises.push(axios.get('https://nguyenvd27-ltct-demo.herokuapp.com/api/' + dataSource + '/' + item.id));
      }
      return axios.all(promises)
    })
    .then(axios.spread((...args) => {
      result = []
      for(request of args) {
        let found
        if(request.data.products) {
          found = request.data.products.filter(
            element => element.price >= req.params.minPrice && element.price <= req.params.maxPrice
          )
        } else {
          found = request.data.data.filter(
            element => element.price >= req.params.minPrice && element.price <= req.params.maxPrice
          )
        }
        if (found.length > 0) {
          for (item of found) {
            result.push(item)
          }
        }
      }
      res.status(201).send(result)
    }))
    .catch(error => res.status(400).send(error))
})

module.exports = testPrice;