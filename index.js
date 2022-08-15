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
var aramex_url = 'https://ws.aramex.net/shippingapi.v2/shipping/service_1_0.svc/json'
var aramex_rate_url = 'https://ws.aramex.net/ShippingAPI.V2/RateCalculator/Service_1_0.svc/json'
var aramex_tracking_url = 'https://ws.aramex.net/shippingapi.v2/Tracking/Service_1_0.svc/json'

app.get('/',function(req,res){
    res.send('Aramex Soap API Requests');
});

app.get('/describe',function(req,res){
    soap.createClient(rate_url, function(err, client) {
        res.send(client.describe());
    });
});

app.get('/rate', async function(req, res){
    try {
        let response = await axios.post(`${aramex_rate_url}/CalculateRate`, rate_request)
        //console.log(response)

        let {HasErrors} = response.data

        if(!HasErrors) {
            res.json(response.data)
            return
        }
        res.status(400).json(response.data)
        return
    }
    catch(e) {
        res.status(500).json(e)
        return
    }
    /*soap.createClient(rate_url, function(err, client) {
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
    });*/
});

app.get('/shipment/create', async function (req, res){
    let response = await axios.post(`${aramex_url}/CreateShipments`, shipment_request.createShipment)

    let {HasErrors} = response.data

    if(!HasErrors) {
        res.json(response.data)
        return
    }
    res.status(400).json(response.data)
    return

    /*soap.createClient(shipment_url, function(err, client) {
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
    });*/
});

app.get('/shipment/pickup/create', async function(req, res){
    try {
        let response = await axios.post(`${aramex_url}/createPickup`, shipment_request.createPickup)
        //console.log(response)

        let {HasErrors} = response.data

        if(!HasErrors) {
            res.json(response.data)
            return
        }
        res.status(400).json(response.data)
        return
    }
    catch(e) {
        //console.log(e.message)
        res.status(500).json(e)
        return
    }
    /*soap.createClient(shipment_url, function(err, client) {
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
    });*/
});

app.get('/shipment/pickup/cancel',async function(req, res){
    try {
        let response = await axios.post(`${aramex_url}/CancelPickup`, shipment_request.cancelPickup)
        //console.log(response)

        let {HasErrors} = response.data

        if(!HasErrors) {
            res.json(response.data)
            return
        }
        res.status(400).json(response.data)
        return
    }
    catch(e) {
        //console.log(e.message)
        res.status(500).json(e)
        return
    }
    /*soap.createClient(shipment_url, function(err, client) {
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
    });*/
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

app.get('/shipment/track',async function(req, res){
    try {
        //console.log(tracking_request.trackShipments)
        let response = await axios.post(`${aramex_tracking_url}/TrackShipments`, tracking_request.trackShipments)

        let {HasErrors} = response.data

        if(!HasErrors) {
            res.json(response.data)
            return
        }
        res.status(400).json(response.data)
        return
    }
    catch(e) {
        //console.log(e.message)
        res.status(500).json(e)
        return
    }
    /*soap.createClient(tracking_url, function(err, client) {
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
    });*/
});

app.get('/shipment/label/print', async function(req, res){
    try {
        let response = await axios.post(`${aramex_url}/PrintLabel`, shipment_request.printShipmentLabel)
        //console.log(response)

        let {HasErrors} = response.data

        if(!HasErrors) {
            res.json(response.data)
            return
        }
        res.status(400).json(response.data)
        return
    }
    catch(e) {
        //console.log(e.message)
        res.status(500).json(e)
        return
    }
})

app.listen(port, function(){
    console.log('Soap app listening on port '+port);
});