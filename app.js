var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require("path");
var vg = express();
var Razorpay=require('razorpay');
var instance = new Razorpay({
  key_id: 'rzp_test_QLt1eJbrOwk5lF',
  key_secret: '0obtYZxBkwSBZM1wJJCI9Dbn'
})

var html = require('./html.js');
vg.use(bodyParser.json());
vg.use(bodyParser.urlencoded({
  extended: false
}));
vg.get('/gettransactions',function(req,res){
  instance.payments.all({
    from: '2018-08-01',
    to: '2018-10-18'
  }, (error, response) => {
    if (error) {
      res.send(error)
    } else {
      res.send(response)
    }
  })
})
vg.post('/savetransactions',function(req,res){
    res.send(req.body)
})
vg.use('/*', html);
vg.listen(80);
console.log("Server started");
module.exports = vg;
