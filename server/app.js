const express = require('express');
const router = require('./routes');
const errHandler = require('./middlewares/errHandler.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errHandler);

app.listen(PORT, () => {
  console.log(`Listen to PORT: ${PORT}`);
})