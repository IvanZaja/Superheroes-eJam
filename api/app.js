const express = require('express');
const corsMiddleware = require('./middlewares/cors.middleware');

const app = express();

app.use(express.json());

app.use(corsMiddleware)

app.use('/api', require('./configs/routes.config'));

const port = 3000;
app.listen(port, () => console.info(`Heroes flying at port ${port}`));