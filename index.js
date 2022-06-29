var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

const path = require('path');
const soap = require('soap');

var url = path.join(__dirname, 'wsdl', 'aramex-rates-calculator-wsdl.wsdl');
var rate_request = require('./requests/rateRequest')

app.get('/',function(req,res){
    res.send('Aramex Soap API Requests');
});

app.get('/describe',function(req,res){
    soap.createClient(url, function(err, client) {
        res.send(client.describe());
    });
});

app.get('/rate',function(req, res){
    soap.createClient(url, function(err, client) {
        client.CalculateRate(rate_request, function(err, result) {
            //console.log(err)
            res.json(result);
        });
    });
});

app.listen(port, function(){
    console.log('Soap app listening on port '+port);
});