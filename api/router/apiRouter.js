const express = require('express');
const apiRouter = express.Router();
const brandRouter = require('./brandRouter');
const categoryRouter = require('./categoryRouter');
const priceRouter = require('./priceRouter');
const statisticsRouter = require('./statisticsRouter');
const productsRouter = require('./productsRouter');
const authRouter = require('./authRouter');

apiRouter.use("/", (req,res,next)=>{
  next();
});

apiRouter.use("/db/products/brands", brandRouter);
apiRouter.use("/db/products/categories", categoryRouter);
apiRouter.use("/db/products/latest", statisticsRouter);
apiRouter.use("/db/products", productsRouter);
apiRouter.use("/user", authRouter);

apiRouter.use("/db/products", priceRouter);

module.exports = apiRouter;