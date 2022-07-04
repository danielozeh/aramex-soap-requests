const config = require('../config')
const {aramex} = config

const getCountries = {
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
}

const getCities = {
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
    'CountryCode': 'NG',
    'State': null,
    'NameStartsWith': ''
}

const validateAddress = {
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
    'Address': {
        'Line1': 'Oladimeji street',
        'Line2': 'Aguda',
        'Line3': '',
        'City': 'Surulere',
        'StateOrProvinceCode': '',
        'PostCode': '101283',
        'CountryCode': 'NG'
    }
}

module.exports = {
    getCountries,
    getCities,
    validateAddress
}