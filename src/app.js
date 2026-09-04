const express = require('express');

const fortuneRoutes = require('./routes/fortune.routes');
const notFoundMiddleware = require('./middleware/not-found.middleware');
const requestIdMiddleware = require('./middleware/request-id.middleware');
const app = express();

app.disable('x-powered-by');

app.use(express.json());
//console.log(fortuneRoutes)
app.use(requestIdMiddleware);
app.use('/api/v1/fortune', fortuneRoutes);
app.use(notFoundMiddleware);
module.exports = app;
