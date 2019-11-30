const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  console.log(req.body)
  const {user_id, session_id} = req.body
  req.session.user = {
    user_id: user_id,
    session_id: session_id
  }
  res.redirect(`http://localhost:3000/user_id/${user_id}/session_id/${session_id}`)
});

authRouter.get('/login', (req, res) => {
  if(req.session.user) res.send({ success: 1, message: "Already logged in!"})
  else {
    res.redirect("http://secure-mountain-93147.herokuapp.com/requirelogin?url=localhost:8080")
  }
})

authRouter.get('/isLogin', (req, res) => {
  if(req.session.user) res.send({ success: 1, session_id: req.session.user.session_id, user_id: req.session.user.user_id})
  else res.send({ success: 0 })
})

authRouter.get('/logout', (req, res) => {
  req.session.destroy((err)=>{
    if(err) res.status(500).send({success, err})
    else res.send({success: 1, message: "Logout Successfully!"});
});
})

module.exports = authRouter;