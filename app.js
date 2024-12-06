const express = require("express");
// console.log(express)
const app = express();
const port = 3001;
const web = require("./routes/web");

// file uploader npm
const fileUpload = require('express-fileupload')
app.use(fileUpload({ useTempFiles: true }));

const connectdb = require("./db/connectdb");


// connectiondb
connectdb();

// get cookie-----------------
const cookieParser = require('cookie-parser')
// token get cookie
app.use(cookieParser());


// connect flash and session
const session = require('express-session');
const flash = require('connect-flash');


// message
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

// flash message
app.use(flash());


// url encode
app.use(express.urlencoded({ extended: false }));

// router load+++
app.use("/", web);

// ejs set html
app.set("view engine", "ejs");

// static file
app.use(express.static("public"));

// server create
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
