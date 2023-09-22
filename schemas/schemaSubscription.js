const Joi = require("joi"); 


const subscriptionSchemaUser = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business").required(),
})

module.exports = subscriptionSchemaUser;