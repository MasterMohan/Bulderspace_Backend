let mongoose = require('mongoose');
const connectionUrl = 'mongodb://127.0.0.1:27017/newtest';

mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

console.log("mongoose connected");


// const mongoose = require('mongoose');
const Post = require('../controler/newtest')

var post = new Post({
    title: "Hello World",
    postedBy: "alex",
    comments: [{
        text: "Nice post!",
        postedBy: "alex",

    }],
    imagename: ""

})

post.save()