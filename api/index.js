const express = require('express');
const mongoose = require("mongoose");
const app = express();
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const dotenv = require("dotenv");

//MONGOOSE CONFIG
mongoose.set("strictQuery", false);
//DOTENV CONFIG
dotenv.config();

//EXPRESS JSON
app.use(express.json());

//MONGOOSE CONNECT
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        //useFindAndModify: false,
    }).then(() => {
        console.log("DB connection successful!");
    }).catch((err) => {
        console.log(err);
});

//ROUTES MIDDLEWARE
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// console.log("hello journal");
//LISTENING
app.listen("6000", () => {
    console.log("Backend is running!");
});
