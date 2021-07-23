const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://blogsite:blogsite@cluster0.kjdrn.mongodb.net/blog?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("Database is Running");
})