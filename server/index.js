require("dotenv").config();

process.env["NTBA_FIX_350"] = 1;

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use(cors());

app.listen(port, () => console.log(`App is listening on port ${port}.`));