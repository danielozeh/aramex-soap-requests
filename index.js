var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

const path = require('path');
const soap = require('soap');

var rate_url = path.join(__dirname, 'wsdl', 'aramex-rates-calculator-wsdl.wsdl');
var shipment_url = path.join(__dirname, 'wsdl', 'shipping-services-api-wsdl.wsdl');
var rate_request = require('./requests/rateRequest')
var shipment_request = require('./requests/shipmentRequest')

app.get('/',function(req,res){
    res.send('Aramex Soap API Requests');
});

app.get('/describe',function(req,res){
    soap.createClient(rate_url, function(err, client) {
        res.send(client.describe());
    });
});

app.get('/rate',function(req, res){
    soap.createClient(rate_url, function(err, client) {
        client.CalculateRate(rate_request, function(err, result) {
            if(err) {
                console.log(err)
            }
            res.json(result);
        });
    });
});

app.get('/shipment/create',function(req, res){
    soap.createClient(shipment_url, function(err, client) {
        //console.log(client.describe())
        client.CreateShipments(shipment_request, function(err, result) {
            console.log(err)
            if(err) {
                console.log(err)
            }
            res.json(result);
        });
    });
});

app.listen(port, function(){
    console.log('Soap app listening on port '+port);
});