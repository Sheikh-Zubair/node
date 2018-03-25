// This is a javascript server
// exporting a module called http  module to handle http  requests
const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path'); // a buitin module 
const app = express(); 
// Body parser middle where
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// static path containing content for view
app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
    res.render('index');
});
// listen to port 3000
// the function/method below runs whenever someone trires to reach this system on port 3000
app.listen(3000, () => {
    console.log('Express server started on port 3000');
});


