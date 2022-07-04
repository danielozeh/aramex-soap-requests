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
        'Line1': '19 Alhaji Suleimas street',
        'Line2': 'Isolo',
        'Line3': '',
        'City': 'Isolo',
        'StateOrProvinceCode': 'LAGOS',
        'PostCode': '',
        'CountryCode': 'NG'
    },
    'DestinationAddress': {
        'Line1': 'Oladimeji street',
        'Line2': 'Aguda',
        'Line3': '',
        'City': 'Surulere',
        'StateOrProvinceCode': 'LAGOS',
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
        'ProductGroup': 'EXP',
        'ProductType': 'PPX',
        'PaymentType': 'P',
        'PaymentOptions': 'CASH',
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
            'Value': 0
        },
        //'CashAdditionalAmount': '3',
        'CollectAmount': {
            'CurrencyCode': 'NGN',
            'Value': 500.0
        },
        'Services': 'SIG',
        'Items': []
    }
}