// This is a javascript server
// exporting a module called http  module to handle http  requests
const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const path = require('path'); // a buitin module 
// For db connection
const db = mysql.createConnection({
    host: 'mysql://mysql:3306/',
    user: 'Zubair',
    pasword: '4789',
    database: 'expressdb'
});
db.connect((err) => {
    /* if (err) {
         throw err;
     }*/
    console.log('MySQL Connected....');
});
const app = express(); 
// port
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Body parser middle where
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// static path containing content for view
app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/s', (req, res)=> {
    res.render('form.ejs');
});
//post request
app.post('/users/add', (req, res)=> {
     let newUser = {
        Name: req.body.name,
        Fname: req.body.fname,
        Email: req.body.email,
        Pass: req.body.password,
        Address: req.body.address,
        Age: req.body.age
     }
    let sql = 'INSERT INTO userdata SET ?';
    let query = db.query(sql, newUser, (err, result) => {
        if (err) throw err;
        console.log('User added');
    });
});
// listen to port 3000
// the function/method below runs whenever someone trires to reach this system on port 3000
app.listen(port,ip);
module.exports = app ;



