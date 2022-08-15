const config = require('../config')
const {aramex} = config

module.exports = {
    "ClientInfo": {
        'UserName': aramex.username,
        'Password': aramex.password,
        'Version': aramex.version,
        'AccountNumber': aramex.account_number,
        'AccountPin': aramex.account_pin,
        'AccountEntity': aramex.account_entity,
        'AccountCountryCode': aramex.account_country_code,
        'Source': 0,
        "PreferredLanguageCode": null
    },
    "OriginAddress": {
        "Line1": "Oladimeji street",
        "Line2": "Aguda",
        "Line3": "",
        "City": "Lagos",
        "StateOrProvinceCode": "",
        "PostCode": "",
        "CountryCode": "NG",
        "Longitude": 0,
        "Latitude": 0,
        "BuildingNumber": null,
        "BuildingName": null,
        "Floor": null,
        "Apartment": null,
        "POBox": null,
        "Description": null
    },
    "DestinationAddress": {
        "Line1": "01 Olanipekun street",
        "Line2": "Lekki",
        "Line3": "",
        "City": "Lagos",
        "StateOrProvinceCode": "",
        "PostCode": "",
        "CountryCode": "NG",
        "Longitude": 0,
        "Latitude": 0,
        "BuildingNumber": null,
        "BuildingName": null,
        "Floor": null,
        "Apartment": null,
        "POBox": null,
        "Description": null
    },
    "PreferredCurrencyCode": "NGN",
    "ShipmentDetails": {
        "Dimensions": {
            "Length": 3.0,
            "Width": 3.0,
            "Height": 3.0,
            "Unit": "CM"
        },
        "ActualWeight": {
            "Unit": "KG",
            "Value": 2.0
        },
        "ChargeableWeight": {
            "Unit": "KG",
            "Value": 2.0
        },
        "DescriptionOfGoods": "Brief Description of my Item",
        "GoodsOriginCountry": "NG",
        "NumberOfPieces": 1,
        "ProductGroup": "DOM",
        "ProductType": "OND",
        "PaymentType": "P",
        "PaymentOptions": "",
        "CustomsValueAmount": {
            "CurrencyCode": "NGN",
            "Value": 0.0
        },
        "CashDeliveryAmount": {
            "CurrencyCode": "NGN",
            "Value": 0.0
        },
        "InsuranceAmount": {
            "CurrencyCode": "NGN",
            "Value": 0.0
        },
        "CashAdditionalAmount": null,
        "CashAdditionalAmountDescription": null,
        "CollectAmount": null,
        "Services": "",
        "Items": null,
        "DeliveryInstructions": null
    },
    "Transaction": {
        "Reference1": "",
        "Reference2": "",
        "Reference3": "",
        "Reference4": "",
        "Reference5": ""
    }
}