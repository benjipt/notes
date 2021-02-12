const express = require('express');
const app = express();

// Creates instance of express.Router called expressionsRouter
const expressionsRouter = express.Router();

// Mount expressionsRouter at /expressions - base app level
app.use('/expressions', expressionsRouter);

// Creates route for expressionsRouter - send all expressions for GET request
expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});
