import express from 'express';
import http from 'http';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
const { Pool } = require('pg');
const {
  PORT = 3000,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

const pool = new Pool({
  user: POSTGRES_USER,
  host: 'db',
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log('connected');
   })
   .catch((err) => {
     console.log(err);
   });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
  res.status(404).json({});
});

const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
