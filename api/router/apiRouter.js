const express = require('express');
const apiRouter = express.Router();

const brandRouter = require('./brandRouter');
const categoryRouter = require('./categoryRouter');
const statisticsRouter = require('./statisticsRouter');
const productsRouter = require('./productsRouter');
const miscRouter = require('./miscRouter')
const authRouter = require('./authRouter');

apiRouter.use("/", (req,res,next)=>{
  next();
});

apiRouter.use("/db/products/misc", miscRouter);
apiRouter.use("/db/products/brands", brandRouter);
apiRouter.use("/db/products/categories", categoryRouter);
apiRouter.use("/db/products/latest", statisticsRouter);
apiRouter.use("/db/products", productsRouter);
apiRouter.use("/user", authRouter);

module.exports = apiRouter;