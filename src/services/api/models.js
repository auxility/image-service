import Joi from 'joi'

export const fileUploadRequestSchema = Joi.object().keys({
  base64: Joi.string().required().trim().min(4),
  hashLength: Joi.number().required().min(6).max(32)
})

export const imageUploadRequestSchema = Joi.object().keys({
  base64: Joi.string().required().trim().min(4)
})
