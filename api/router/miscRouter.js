const express = require('express');
const miscRouter = express.Router();
const axios = require('axios');

miscRouter.get("/:input", (req, res) => {
  axios
    .get("https://nguyenvd27-ltct-demo.herokuapp.com/api/products")
    .then(data => {
      let found = data.data.data.filter(element => 
        element.name.toLowerCase().includes(req.params.input.toLowerCase())
        || element.brand.toLowerCase().includes(req.params.input.toLowerCase())
        || element.category.toLowerCase().includes(req.params.input.toLowerCase()))
      res.status(201).send(found)
    })
    .catch(error => res.status(500).send(error))
})

module.exports = miscRouter;