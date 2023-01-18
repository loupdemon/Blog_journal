const express = require('express');
// const router = express.Router();
// const Post = require('../models/Post');
// const User = require('../models/User');
// const Category = require('../models/Category');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


const app = express();
//app.use(express.json());


console.log("hello journal");
app.listen("5000", () => {
    console.log("Backend is running!");
    });
