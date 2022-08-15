const config = require('../config')
const {aramex} = config

var minutesToAdd=1440;
var currentDate = new Date();

const createShipment = {
    ClientInfo: {
        'UserName': aramex.username,
        'Password': aramex.password,
        'Version': aramex.version,
        'AccountNumber': aramex.account_number,
        'AccountPin': aramex.account_pin,
        'AccountEntity': aramex.account_entity,
        'AccountCountryCode': aramex.account_country_code,
        Source: 0,
        PreferredLanguageCode: null
    },
    Transaction: {
      Reference1: 'O3GKaKA9PrmJqpGA',
      Reference2: '',
      Reference3: '',
      Reference4: '',
      Reference5: ''
    },
    Shipments: [
      {
        Reference1: '5v9VQIseF2o1kfl9',
        Reference2: 'TzDGjdJNHOtOBMsX',
        Reference3: 'YeB6A4E0RQUviegN',
        Shipper: {
            Reference1: 'hpvf4hEyBIFPzULS',
            Reference2: '',
            AccountNumber: '60537570',
            PartyAddress: {
              Line1: '045 Oladimeji street',
              Line2: '',
              Line3: '',
              City: 'Apapa',
              StateOrProvinceCode: '',
              PostCode: '100123',
              CountryCode: 'NG'
            },
            Contact: {
              Department: '',
              PersonName: 'Daniel Ozeh',
              Title: '',
              CompanyName: 'Daniel Ozeh',
              PhoneNumber1: '+2348134277988',
              PhoneNumber1Ext: '',
              PhoneNumber2: '',
              PhoneNumber2Ext: '',
              FaxNumber: '',
              CellPhone: '+2348134277988',
              EmailAddress: 'danielozeh@gmail.com',
              Type: ''
            }
        },
        Consignee: {
            Reference1: 'z37vVV7vsdViOLSb',
            Reference2: '',
            AccountNumber: '',
            PartyAddress: {
              Line1: '2 Seaforth Avenue',
              Line2: 'Harehills',
              Line3: '',
              City: 'Leeds',
              StateOrProvinceCode: 'Leeds',
              PostCode: 'LS9 6BE',
              CountryCode: 'GB'
            },
            Contact: {
              Department: '',
              PersonName: 'Nnamdi Okoh',
              Title: '',
              CompanyName: 'Nnamdi Okoh',
              PhoneNumber1: '+447122689641',
              PhoneNumber1Ext: '',
              PhoneNumber2: '',
              PhoneNumber2Ext: '',
              FaxNumber: '',
              CellPhone: '+447122689641',
              EmailAddress: 'pickup@example.com',
              Type: ''
            }
        },
        ThirdParty: {
            Reference1: '',
            Reference2: '',
            AccountNumber: '',
            PartyAddress: {
              Line1: '',
              Line2: '',
              Line3: '',
              City: '',
              StateOrProvinceCode: '',
              PostCode: '',
              CountryCode: ''
            },
            Contact: {
              Department: '',
              PersonName: '',
              Title: '',
              CompanyName: '',
              PhoneNumber1: '',
              PhoneNumber1Ext: '',
              PhoneNumber2: '',
              PhoneNumber2Ext: '',
              FaxNumber: '',
              CellPhone: '',
              EmailAddress: '',
              Type: ''
            }
        },
        ShippingDateTime: '/Date(1660118416000)/',
        DueDate: '/Date(1660118416000)/',
        Comments: '',
        PickupLocation: 'Apartment',
        AccountingInstrcutions: '',
        OperationsInstructions: '',
        Details: {
            Dimensions: { Length: 11, Width: 1, Height: 10, Unit: 'CM' },
            ActualWeight: { Unit: 'KG', Value: 5.5 },
            ChargeableWeight: { Unit: 'KG', Value: 5.5 },
            DescriptionOfGoods: '',
            GoodsOriginCountry: 'NG',
            NumberOfPieces: 1,
            ProductGroup: 'EXP',
            ProductType: 'PPX',
            PaymentType: 'P',
            PaymentOptions: 'ACCT',
            CustomsValueAmount: {
                CurrencyCode: "NGN",
                Value: 1.00
            },
            CashOnDeliveryAmount: {
                CurrencyCode: "NGN",
                Value: 0.00
            },
            InsuranceAmount: {
                CurrencyCode: "NGN",
                Value: 0.00
            },
            CashAdditionalAmount: {
                CurrencyCode: "NGN",
                Value: 0.00
            },
            CashAdditionalAmountDescription: '',
            CollectAmount: {
                CurrencyCode: "NGN",
                Value: 0.00
            },
            Services: '',
            Items: []
        },
        PickupGUID: 'b26a842a-c0e7-4f5b-8ea7-b3fdc2737ae6',
        ForeignHAWB: '',
        TransportType: 0,
        Number: null,
        ScheduledDelivery: null
      }
    ],
    LabelInfo: { ReportID: 9201, ReportType: 'URL' }
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
    'Pickup': {
        'PickupAddress': {
            'Line1': 'Oladimeji street',
            'Line2': 'Aguda',
            'Line3': '',
            'City': 'Surulere',
            'StateOrProvinceCode': '',
            'PostCode': '101283',
            'CountryCode': 'NG',
            'Longitude': 0,
            'Latitude': 0,
            'BuildingNumber': null,
            'BuildingName': null,
            'Floor': null,
            'Apartment': null,
            'POBox': null,
            'Description': null
        },
        'PickupContact': {
            'Department': '',
            'PersonName': 'Daniel Ozeh',
            'Title': 'Mr.',
            'CompanyName': '',
            'PhoneNumber1': '8134277988',
            'PhoneNumber1Ext': '',
            'PhoneNumber2': '',
            'PhoneNumber2Ext': '',
            'FaxNumber': '',
            'CellPhone': '08134277988',
            'EmailAddress': 'hello@danielozeh.com.ng',
            'Type': ''
        },
        'PickupLocation': 'Apartment',
        'PickupDate': `/Date(${new Date(new Date()).setDate(new Date().getDate() + 1)})/`,
        'ReadyTime': `/Date(${new Date(new Date()).setDate(new Date().getDate() + 1)})/`,
        'LastPickupTime': `/Date(${new Date(new Date()).setDate(new Date().getDate() + 1)})/`,
        'ClosingTime': `/Date(${new Date(new Date()).setDate(new Date().getDate() + 1)})/`,
        'Comments': '',
        'Reference1': '001',
        'Reference2': '',
        'Vehicle': '',
        'Shipments': [],
        'PickupItems': [
            {
                'ProductGroup': 'DOM', //Domestic
                'ProductType': 'OND', //Domestic
                'NumberOfShipments': 1, //required
                'PackageType': 'Box',
                'Payment': 'P', //required
                'ShipmentWeight': {
                    'Unit': 'KG',
                    'Value': 2.00
                },
                'ShipmentVolume': null,
                'NumberOfPieces': 1,
                'CashAmount': null,
                'ExtraCharges': null,
                'ShipmentDimensions': {
                    'Length': 3.0,
                    'Width': 3.0,
                    'Height': 3.0,
                    'Unit': 'CM'
                },
                'Comments': ''
            }
        ],
        'Status': 'Ready',
        'ExistingShipments': null,
        'Branch': '',
        'RouteCode': ''
    },
    'Transaction': {
        'Reference1': '001',
        'Reference2': '',
        'Reference3': '',
        'Reference4': '',
        'Reference5': ''
    },
    'LabelInfo': { 
        'ReportID': 9201, 
        'ReportType': 'URL' 
    },
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
    'PickupGUID': 'b26a842a-c0e7-4f5b-8ea7-b3fdc2737ae6',
    'Comments': 'Cancel Pickup'
}


const printShipmentLabel = {
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
    'ShipmentNumber': '30690613402',
    'LabelInfo': {
        'ReportID': 9201,
        'ReportType': 'URL'
    }
}

module.exports = {
    createShipment,
    createPickup,
    cancelPickup,
    printShipmentLabel
}