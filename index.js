require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express")
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

