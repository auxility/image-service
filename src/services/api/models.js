import Joi from 'joi'

export const exampleSchema = Joi.object().keys({
  exampleNumber: Joi.string().required().trim().min(2).max(40)
})
