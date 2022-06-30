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
                    'City': 'Isolo',
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
                'ProductGroup': 'EXP',
                'ProductType': 'PPX',
                'PaymentType': 'T',
                'PaymentOptions': 'CASH',
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