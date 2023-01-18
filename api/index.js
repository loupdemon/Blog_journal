const express = require('express');
// const router = express.Router();
// const Post = require('../models/Post');
// const User = require('../models/User');
// const Category = require('../models/Category');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

const app = express();
//DOTENV environnement de travai
const dotenv = require("dotenv");

dotenv.config();

//usage de mongoose pour gestion de sql
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    //useFindAndModify: false,
}).then(() => {
    console.log("DB connection successful!");
}).catch((err) => {
    console.log(err);
});


// app.use("/lama",(req,res)=>{

//     console.log("hey  this main url");
//     //res.send("Hello World");
// });


console.log("hello journal");
app.listen("5000", () => {
    console.log("Backend is running!");
});
