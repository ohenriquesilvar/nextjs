require('dotenv/config');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const routes = require('./src/routes');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}!`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
