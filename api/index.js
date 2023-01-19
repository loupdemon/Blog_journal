const express = require('express');
const mongoose = require("mongoose");
const app = express();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

const dotenv = require("dotenv");

const multer = require("multer");

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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
        // cb(null, "hello.jpeg");
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
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
