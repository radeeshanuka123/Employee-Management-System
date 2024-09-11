const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
const fileUpload =require('express-fileupload');
app.use(fileUpload());

const collection = require("./employeeModel");

const employeeRoute=require('./employeeRoute');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/employee',employeeRoute);

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log("Server is running"));
