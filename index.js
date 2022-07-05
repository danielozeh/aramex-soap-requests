var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var axios = require('axios')

const path = require('path');
const soap = require('soap');

var rate_url = path.join(__dirname, 'wsdl', 'aramex-rates-calculator-wsdl.wsdl');
var shipment_url = path.join(__dirname, 'wsdl', 'shipping-services-api-wsdl.wsdl');
var location_url = path.join(__dirname, 'wsdl', 'Location-API -WSDL.wsdl');
var tracking_url = path.join(__dirname, 'wsdl', 'shipments-tracking-api-wsdl.wsdl');
var rate_request = require('./requests/rateRequest')
var shipment_request = require('./requests/shipmentRequest')
var location_request = require('./requests/locationRequest')
var tracking_request = require('./requests/trackingRequest')

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
                return
            }
            if(result.HasErrors) {
                res.status(400).json(result.Notifications)
                return
            }
            res.json(result);
            return
        });
    });
});

app.get('/shipment/create',function(req, res){
    soap.createClient(shipment_url, function(err, client) {
        client.CreateShipments(shipment_request.createShipment, function(err, result) {
            console.log(err)
            if(err) {
                console.log(err)
                return
            }
            if(result.HasErrors) {
                res.status(400).json(result.Notifications)
                return
            }
            res.json(result);
            return
        });
    });
});

app.get('/shipment/pickup/create',function(req, res){
    soap.createClient(shipment_url, function(err, client) {
        client.CreatePickup(shipment_request.createPickup, function(err, result) {
            console.log(shipment_request.createPickup)
            console.log(err)
            if(err) {
                console.log(err)
                return
            }
            if(result.HasErrors) {
                res.status(400).json(result.Notifications)
                return
            }
            res.json(result);
            return
        });
    });
});

app.get('/shipment/pickup/cancel',function(req, res){
    soap.createClient(shipment_url, function(err, client) {
        client.CancelPickup(shipment_request.cancelPickup, function(err, result) {
            console.log(err)
            if(err) {
                console.log(err)
                return
            }
            if(result.HasErrors) {
                res.status(400).json(result.Notifications)
                return
            }
            res.json(result);
            return
        });
    });
});

app.get('/countries',function(req, res){
    soap.createClient(location_url, function(err, client) {
        client.FetchCountries(location_request.getCountries, function(err, result) {
            if(err) {
                console.log(err)
                return
            }
            if(result.HasErrors) {
                res.status(400).json(result.Notifications)
                return
            }
            res.json(result);
            return
        });
    });
});

app.get('/countries/cities',function(req, res){
    soap.createClient(location_url, function(err, client) {
        client.FetchCities(location_request.getCities, function(err, result) {
            if(err) {
                console.log(err)
                return
            }
            if(result.HasErrors) {
                res.status(400).json(result.Notifications)
                return
            }
            res.json(result);
            return
        });
    });
});

app.get('/address/validate',function(req, res){
    soap.createClient(location_url, function(err, client) {
        client.ValidateAddress(location_request.validateAddress, function(err, result) {
            if(err) {
                console.log(err)
                return
            }
            if(result.HasErrors) {
                res.status(400).json(result.Notifications)
                return
            }
            res.json(result);
            return
        });
    });
});

app.get('/shipment/track',function(req, res){
    soap.createClient(tracking_url, function(err, client) {
        client.TrackShipments(tracking_request.trackShipments, function(err, result) {
            if(err) {
                console.log(err)
                return
            }
            if(result.HasErrors) {
                res.status(400).json(result.Notifications)
                return
            }
            res.json(result);
            return
        });
    });
});

app.listen(port, function(){
    console.log('Soap app listening on port '+port);
});