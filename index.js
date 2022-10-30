const express = require('express');
const port = 80||process.env.port;
const app = express();
const path = require('path');
const navroutes = require('./routes/navroutes.js')

// conneting database;
const connection = require('./DB/db.js')
connection();

// path for static file
const staticPath = path.join(__dirname,'./static')

// path for view file (templates)
const templatePath = path.join(__dirname,'./templates')


// setting of view engine
app.set('views',"./templates")
app.set("view engine", "ejs");


// using  builtin middleware for serving static files
app.use(express.static(__dirname + "/static"))


// creating routes

// setting routes for navbar
app.use('/',navroutes)

app.get('/',(req,res)=>{
    // adding data dynamically to page
    res.render('index.ejs');
})

// for invalid req
app.get('*',(req,res)=>{
    res.render('error.ejs')
})
    
// listening the app 
app.listen(port,()=>{
    console.log('listening...')
})