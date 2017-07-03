/* eslint-disable no-console, no-unused-vars */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import nodemailer from 'nodemailer';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.post('/contact',function(req,res){
  // var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject
  var message = req.body.message;

  var mailOptions={
     to : "opentodoinfo@gmail.com",
     from: email,
     subject : subject,
     text : message
  }

  const smtpTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
      user: "opentodoinfo@gmail.com",
      pass: "kutumifly141"
    }
  });
  console.log(mailOptions);

  smtpTransporter.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    }else{
    console.log("Message sent: " + response.message);
    res.end("sent");
    }
  });

});


// Setup Static asset folder
// app.use('/images', express.static(path.join(__dirname, '../src/images')));
app.use('/', express.static(path.join(__dirname, '../src')));

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
