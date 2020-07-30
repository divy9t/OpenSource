const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const app = express();

app.use(bodyParse.json())

const userRoute = require('./posts/user_posts');
app.use("/users", userRoute);

mongoose.connect("mongodb://localhost/HMP",{useNewUrlParser: true, useUnifiedTopology: true},()=>console.log("This is sparta"));

app.listen(3000)