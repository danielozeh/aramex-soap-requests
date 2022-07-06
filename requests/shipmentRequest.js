const config = require('../config')
const {aramex} = config

var minutesToAdd=1440;
var currentDate = new Date();

const createShipment = {
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
        'Reference2': '',
        'Reference3': '',
        'Reference4': '',
        'Reference5': ''
    },
    'Shipments': {
        'Shipment': {
            'Reference1': '00001',
            'Reference2': '00002',
            'Reference3': '00003',
            'Shipper': {
                'Reference1': 'RFS0001',
                'Reference2': '',
                'AccountNumber': '1123',
                'PartyAddress': {
                    'Line1': '19 Alhaji Suleimas street',
                    'Line2': 'Isolo',
                    'Line3': '',
                    'City': 'Lagos',
                    'StateOrProvinceCode': 'LAGOS',
                    'PostCode': '',
                    'CountryCode': 'NG'
                },
                'Contact': {
                    'Department': '',
                    'PersonName': 'Daniel Ozeh',
                    'Title': 'Mr.',
                    'CompanyName': '',
                    'PhoneNumber1': '8134277988',
                    'PhoneNumber1Ext': '+234',
                    'PhoneNumber2': '',
                    'PhoneNumber2Ext': '',
                    'FaxNumber': '',
                    'CellPhone': '',
                    'EmailAddress': 'hello@danielozeh.com.ng',
                    'Type': ''
                }
            },
            'Consignee': {
                'Reference1': 'RFS0001',
                'Reference2': '',
                'AccountNumber': '',
                'PartyAddress': {
                    'Line1': 'Oladimeji street',
                    'Line2': 'Aguda',
                    'Line3': '',
                    'City': 'Lagos',
                    'StateOrProvinceCode': '',
                    'PostCode': '',
                    'CountryCode': 'NG'
                },
                'Contact': {
                    'Department': '',
                    'PersonName': 'Daniel Ozeh',
                    'Title': 'Mr.',
                    'CompanyName': '',
                    'PhoneNumber1': '8134277988',
                    'PhoneNumber1Ext': '+234',
                    'PhoneNumber2': '',
                    'PhoneNumber2Ext': '',
                    'FaxNumber': '',
                    'CellPhone': '',
                    'EmailAddress': 'hello@danielozeh.com.ng',
                    'Type': ''
                }
            },
            'ThirdParty': {
                'Reference1': 'RFT0001',
                'Reference2': '',
                'AccountNumber': '',
                'PartyAddress': {
                    'Line1': 'Oladimeji street',
                    'Line2': 'Aguda',
                    'Line3': '',
                    'City': 'Surulere',
                    'StateOrProvinceCode': 'LAGOS',
                    'PostCode': '',
                    'CountryCode': 'NG'
                },
                'Contact': {
                    'Department': '',
                    'PersonName': 'Daniel Ozeh',
                    'Title': 'Mr.',
                    'CompanyName': '',
                    'PhoneNumber1': '8134277988',
                    'PhoneNumber1Ext': '+234',
                    'PhoneNumber2': '',
                    'PhoneNumber2Ext': '',
                    'FaxNumber': '',
                    'CellPhone': '',
                    'EmailAddress': 'hello@danielozeh.com.ng',
                    'Type': ''
                }
            },
            'ShippingDateTime': new Date().toISOString(),
            'DueDate': new Date().toISOString(),
            'Comments': '',
            'PickupLocation': 'Apartment',
            'AccountingInstrcutions': 'Nothing special',
            'OperationsInstructions': 'Nothing special',
            'Details': {
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
                'DescriptionOfGoods': 'A simple package for delivery',
                'GoodsOriginCountry': 'NG',
                'NumberOfPieces': 1,
                'ProductGroup': 'DOM', //DOM for  Domestic, EXP for International
                'ProductType': 'OND',
                'PaymentType': '3',
                'PaymentOptions': 'ACCT',
                'CustomsValueAmount': {
                    'CurrencyCode': 'NGN',
                    'Value': 1.00
                },
                'CashOnDeliveryAmount': {
                    'CurrencyCode': 'NGN',
                    'Value': 1.00
                },
                'InsuranceAmount': {
                    'CurrencyCode': 'NGN',
                    'Value': 1.00
                },
                'CashAdditionalAmount': {
                    'CurrencyCode': 'NGN',
                    'Value': 1.00
                },
                'CashAdditionalAmountDescription': 'None for now',
                'CollectAmount': {
                    'CurrencyCode': 'NGN',
                    'Value': 1.00
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
            },
            'ForeignHAWB': 'ABC 000111',
            'TransportType': 0,
            'PickupGUID': '',
        },
    },
    'LabelInfo': {
        'ReportID': 9201,
        'ReportType': 'URL'
    }
}

const createPickup = {
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
        'Reference2': '',
        'Reference3': '',
        'Reference4': '',
        'Reference5': ''
    },
    'Pickup': {
        'PickupAddress': {
            'Line1': 'Oladimeji street',
            'Line2': 'Aguda',
            'Line3': '',
            'City': 'Surulere',
            'StateOrProvinceCode': '',
            'PostCode': '101283',
            'CountryCode': 'NG'
        },
        'PickupContact': {
            'Department': '',
            'PersonName': 'Daniel Ozeh',
            'Title': 'Mr.',
            'CompanyName': 'Daniel Ozeh Plc',
            'PhoneNumber1': '8134277988',
            'PhoneNumber1Ext': '+234',
            'PhoneNumber2': '',
            'PhoneNumber2Ext': '',
            'FaxNumber': '',
            'CellPhone': '08134277988',
            'EmailAddress': 'hello@danielozeh.com.ng',
            'Type': ''
        },
        'PickupLocation': '',
        'PickupDate': new Date(currentDate.getTime() + minutesToAdd*60000).toISOString(),
        'ReadyTime': new Date().toISOString(),
        'LastPickupTime': new Date().toISOString(),
        'ClosingTime': new Date().toISOString(),
        'Comments': '',
        'Reference1': '001',
        'Reference2': '',
        'Reference3': '',
        'Reference4': '',
        'Reference5': '',
        'Vehicle': 'Bus',
        'Shipments': [
            {
                'PackageType': '',
                'Quantity': 1,
                'Weight': {
                    'Unit': 'KG',
                    'Value': 2.00
                },
                'Comments': '',
                'Reference1': '001'
            },
        ],
        'PickupItems': [
            {
                'ProductGroup': 'EXP', //required
                'ProductType': 'PPX',
                'NumberOfShipments': 1, //required
                'PackageType': 'Box',
                'Payment': 'P', //required
                'ShipmentWeight': {
                    'Unit': 'KG',
                    'Value': 2.00
                },
                'ShipmentVolume': {
                    'Unit': '',
                    'Value': ''
                },
                'NumberOfPieces': 1,
                'CashAmount': {
                    'CurrencyCode': 'NGN',
                    'Value': 0.00
                },
                'ExtraCharges': {
                    'CurrencyCode': 'NGN',
                    'Value': 0.00
                },
                'ShipmentDimensions': {
                    'Length': 3.0,
                    'Width': 3.0,
                    'Height': 3.0,
                    'Unit': 'CM'
                },
                'Comments': ''
            }
        ],
        'Status': ''
    }
}

const cancelPickup = {
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
        'Reference2': '',
        'Reference3': '',
        'Reference4': '',
        'Reference5': ''
    },
    'PickupGUID': '',
    'Comments': 'Cancel Pickup'
}

module.exports = {
    createShipment,
    createPickup,
    cancelPickup
}