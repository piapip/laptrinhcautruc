const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  const {user_id, session_id} = req.query
  req.session.user = {
    user_id: user_id,
    session_id: session_id
  }
  res.redirect(`http://localhost:3000/user_id/${user_id}/session_id/${session_id}`)
});

authRouter.get('/login', (req, res) => {
  if(req.session.user) res.send({ success: 1, message: "Already logged in!"})
  else {
    res.redirect("http://secure-mountain-93147.herokuapp.com/requirelogin?url=http://localhost:8080")
  }
})

authRouter.get('/isLogin', (req, res) => {
  if(req.session.user != null) {
    console.log("Yo")
    res.send({ success: 1, sessionId: req.session.user.session_id, userId: req.session.user.user_id})
  }
  else {
    res.send({ success: 0 })
  }
})

authRouter.get('/logout', (req, res) => {
  req.session.destroy((err)=>{
    if(err) res.status(500).send({success, err})
    else res.send({success: 1, message: "Logout Successfully!"});
});
})

module.exports = authRouter;