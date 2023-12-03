let mongoose = require('mongoose');
const connectionUrl = 'mongodb://127.0.0.1:27017/built-webscrap';
// const connectionUrl = "mongodb://34.88.158.142:27017/built-webscrap?authSource=admin";
const userName = process.env.DB_USER
const userPass = process.env.DB_PASS
require("dotenv/config");

try {
    mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
    // mongoose.connect("mongodb://34.88.158.142:27017/built-webscrap?authSource=admin", { user: userName, pass: userPass, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

    console.log("mongoose connected");

} catch (error) {
    console.log('error occured in db connection')
}