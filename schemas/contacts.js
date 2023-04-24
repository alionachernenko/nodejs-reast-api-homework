const Joi = require('joi');

const addSchema = Joi.object({
    name: Joi.string().messages({'any.required': `"name" is a required field`}),
    email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({'any.required': `"email" is a required field`}),
    phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .messages({'any.required': `"phone" is a required field`}),
})

const updateSchema =  Joi.object({
    name: Joi.string(),
    email: Joi.string()
    .email({ tlds: { allow: false } }),
    phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
})


module.exports = {
    addSchema,
    updateSchema
}