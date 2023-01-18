const express = require('express');
const mongoose = require("mongoose");
const app = express();
const authRoute = require('./routes/auth');
const dotenv = require("dotenv");
// mongoose.connect(process.env.MONGO_URL);
mongoose.set("strictQuery", false);
//DOTENV environnement de travai
dotenv.config();

app.use(express.json());
//usage de mongoose pour gestion de sql
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

app.use("/api/auth", authRoute);


// console.log("hello journal");
app.listen("6000", () => {
    console.log("Backend is running!");
});
