var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
/* eslint-disable no-console, no-unused-vars */

process.env.NODE_ENV = 'production'

var port = 3000;
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(compression());
app.use(express.static('dist'));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

// SetUp Email Sender
app.post('/contact', function(req,res) {


  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  var mailOptions = {
     to : "ramiro.ecovirtual@gmail.com",
     from: {
       name: name,
       address: email},
     sender: email,
     replyTo: email,
     subject : subject,
     text : message
  }

  var smtpTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
      user: "",
      pass: ""
    }
  });

  smtpTransporter.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.send("error");
    }else{
      res.send("Enviado");
    }
  });

});
