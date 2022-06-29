module.exports = {
    'ClientInfo': {
        'UserName': 'Danny',
        'Password': 'Password',
        'Version': 'v1.0',
        'AccountNumber': '00111',
        'AccountPin': '0011',
        'AccountEntity': '01',
        'AccountCountryCode': 'NG'
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
        'PaymentType': 'T',
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