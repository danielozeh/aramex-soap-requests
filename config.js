require('dotenv').config()

module.exports = {
    aramex: {
        username: process.env.ARAMEX_USERNAME,
        password: process.env.ARAMEX_PASSWORD,
        account_number: process.env.ARAMEX_ACCOUNT_NUMBER,
        account_pin: process.env.ARAMEX_ACCOUNT_PIN,
        account_entity: process.env.ARAMEX_ACCOUNT_ENTITY,
        account_country_code: process.env.ARAMEX_ACCOUNT_COUNTRY_CODE,
        version: 'v1.0'
    }
}