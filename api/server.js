const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const apiRouter = require('./router/apiRouter');

let app = express();
app.use(cors())

app.use(session({
    secret: 'himitsu',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 }
}));

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.headers.origin) {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    }
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRouter);

const port = 8080;
app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`Server is listening at ${port}`);
});