import { imageUploadRequestSchema } from '../models'
import Exception from '../../../utils/Exception.class'
import imageUtil from '../../../utils/imageUtil'
import uuidv5 from 'uuid/v5'
import { DOMAIN } from '../../../config/env.config'

async function get (ctx) {
  const { fileName } = ctx.params
  ctx.type = 'image/png'
  ctx.body = imageUtil.get(fileName)
}

async function post (ctx) {
  const { error, value } = imageUploadRequestSchema.validate(ctx.request.body)
  if (error) throw new Exception(400, 'Validation error!', error.details)
  const { base64 } = value
  const name = uuidv5(DOMAIN, uuidv5.URL)
  const res = await imageUtil.save(base64, name)
  ctx.body = { status: 'success', message: 'File was uploaded', payload: { name, ext: res.ext } }
}

export default {
  get,
  post
}
