const config = require('../config')
const {aramex} = config

module.exports = {
    'ClientInfo': {
        'UserName': aramex.username,
        'Password': aramex.password,
        'Version': aramex.version,
        'AccountNumber': aramex.account_number,
        'AccountPin': aramex.account_pin,
        'AccountEntity': aramex.account_entity,
        'AccountCountryCode': aramex.account_country_code,
        'Source': 0
    },
    'Transaction': {
        'Reference1': '001',
        'Reference2': '002',
        'Reference3': '003',
        'Reference4': '004',
        'Reference5': '005'
    },
    'OriginAddress': {
        'Line1': 'Oladimeji street',
        'Line2': 'Aguda',
        'Line3': '',
        'City': 'Abuja',
        'StateOrProvinceCode': '',
        'PostCode': '',
        'CountryCode': 'NG'
    },
    'DestinationAddress': {
        'Line1': '10 Olaiya street',
        'Line2': 'Oregun',
        'Line3': '',
        'City': 'Ibadan',
        'StateOrProvinceCode': '',
        'PostCode': '',
        'CountryCode': 'NG'
    },
    'ShipmentDetails': {
        'Dimensions': {
            'Length': 3.0,
            'Width': 3.0,
            'Height': 3.0,
            'Unit': 'CM'
        },
        'ActualWeight': {
            'Unit': 'KG',
            'Value': 2.0
        },
        'ChargeableWeight': {
            'Unit': 'KG',
            'Value': 2.0
        },
        'DescriptionOfGoods': '',
        'GoodsOriginCountry': '',
        'NumberOfPieces': 5,
        'ProductGroup': 'DOM', //DOM for Domestic, EXP Express Delivery
        'ProductType': 'DOM', //DOM for domestic
        'PaymentType': '3', // Third Party
        'PaymentOptions': 'ACCT',
        'CustomsValueAmount': {
            'CurrencyCode': 'NGN',
            'Value': 500.0
        },
        'CashDeliveryAmount': {
            'CurrencyCode': 'NGN',
            'Value': 500.0
        },
        'InsuranceAmount': {
            'CurrencyCode': 'NGN',
            'Value': 500.0
        },
        //'CashAdditionalAmount': '3',
        'CollectAmount': {
            'CurrencyCode': 'NGN',
            'Value': 500.0
        },
        'Services': 'SIG',
        'Items': [
            {
                'PackageType': 'Box',
                'Quantity': 1,
                'Weight': {
                    'Value': 0.5,
                    'Unit': 'KG'
                },
                'Comments': 'Description of Item',
                'Reference': '00123'
            }
        ]
    }
}