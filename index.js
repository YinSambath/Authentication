const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const routes = require("./routes/admin");
const mongoose = require("mongoose");

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(routes);

mongoose.connect('mongodb+srv://user:12345@cluster0.zb2g5.mongodb.net/test', {useNewUrlParser: true , useUnifiedTopology: true})
const db = mongoose.connection
db.on('error',error => console.error(error))
db.once('open',()=> console.log('Connected to Mongoose'))

app.listen(4000);

