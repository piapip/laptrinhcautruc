const express = require('express');
const authRouter = express.Router();
const axios = require('axios');
const config = require('../config')

authRouter.get('/setsession', (req, res) => {
  const {user_id, session_id} = req.query
  req.session.user = {
    user_id: user_id,
    session_id: session_id
  }
  res.redirect(`${config.FRONTEND_NHOM9}`)
});

authRouter.get('/destroysession', (req, res) => {
  req.session.destroy((err)=>{
    if(err) res.status(400).send(err)
    else res.redirect(`${config.FRONTEND_NHOM9}`);
  });
})

authRouter.get('/isLogin', (req, res) => {
  if(req.session.user != null) {
    axios
      .get(`${config.NHOM2}/api/getsession/${req.session.user.session_id}`)
      .then(data => {
        if(data.data === 'yes'){
          res.send({ success: 1, session: req.session.user })
        } else {
          req.session.destroy((err)=>{
            if(err) res.status(400).send(err)
            else res.send({ success: 0 });
          });
        }
        
      })
      .catch(error => res.send(error))
  }
  else {
    res.send({ success: 0 })
  }
})

module.exports = authRouter;