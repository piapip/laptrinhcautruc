const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const apiRouter = require('./router/apiRouter');
const authRouter = require('./router/authRouter');

let app = express();
app.use(cors())

app.use(session({
    secret: 'himitsu',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRouter);
app.use('/setsession', authRouter);

const port = 8080;
app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`Server is listening at ${port}`);
});