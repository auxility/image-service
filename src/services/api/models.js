import Joi from 'joi'

export const imageUploadRequestSchema = Joi.object().keys({
  base64: Joi.string().required().trim().min(4)
})
