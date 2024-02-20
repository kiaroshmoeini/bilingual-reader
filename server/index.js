const express = require("express");
const app = express();
const cors = require("cors");
const knex = require('../db/knex.js');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env',
  });

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("server started on port 5000");
});
