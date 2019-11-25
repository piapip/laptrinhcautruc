const express = require('express');
const authRouter = express.Router();
const axios = require('axios');

authRouter.get('/isLogin', (req, res) => {
  console.log("Session: " + JSON.stringify(req.session));
});

module.exports = authRouter;