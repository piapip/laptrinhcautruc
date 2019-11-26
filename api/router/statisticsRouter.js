const express = require('express');
const statisticsRouter = express.Router();
const axios = require('axios');

statisticsRouter.get("/get-latest", (req, res) => {
  axios
    .get("https://nguyenvd27-ltct-demo.herokuapp.com/api/products/")
    .then(data => {
      let sortedData = Object.keys(data.data.data).sort((a,b) => {
        return data.data.data[a].created_at - data.data.data[b].created_at
      })
      let result = []
      for (key in sortedData)
        result.push(data.data.data[sortedData[key]])
      res.status(500).send(result)
    })
    .catch(error => res.status(400).err(error))
})

statisticsRouter.get("/get-latest/:productName", (req, res) => {
  axios
    .get("https://nguyenvd27-ltct-demo.herokuapp.com/api/products/")
    .then(data => {

      let filteredData = data.data.data.filter(element => element.name.toLowerCase().includes(req.params.productName.toLowerCase()))
      let sortedData = Object.keys(filteredData).sort((a,b) => {
        return filteredData[a].created_at - filteredData[b].created_at
      })
      let result = []
      for (key in sortedData)
        result.push(filteredData[sortedData[key]])
      res.status(500).send(result)
    })
    .catch(error => res.status(400).err(error))
})

module.exports = statisticsRouter;