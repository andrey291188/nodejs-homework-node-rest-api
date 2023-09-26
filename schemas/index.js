const contactsSchema = require("./contacts");
const addSchemaFavorite = require("./favorite");
const schemaUser = require("./schemaUser");
const subscriptionSchemaUser = require("./schemaSubscription")
const emailVerifySchema = require("./emailVerifySchema")


module.exports = {
    contactsSchema,
    addSchemaFavorite,
    schemaUser,
    subscriptionSchemaUser,
    emailVerifySchema,
}