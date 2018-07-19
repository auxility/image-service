import fs from 'fs'
import { imageUploadRequestSchema } from '../models'
import { Exception } from '../../../utils/exceptions/Exception.class'
import imagesUtil from '../../../utils/imagesUtil'
import { randomString } from '../../../utils/helpers/randomString'
import { URL_LEN, URL_PREFIX } from '../../../config/env.config'

async function get (ctx) {
  const { imageName } = ctx.params
  ctx.type = 'image/jpeg'
  ctx.body = fs.createReadStream(`${ctx.state.images}${imageName}`)
}

async function post (ctx) {
  const { error, value } = imageUploadRequestSchema.validate(ctx.request.body)
  if (error) throw new Exception(400, 'Validation error!', error.details)
  const { base64 } = value
  const name = `${URL_PREFIX}${await randomString(URL_LEN - URL_PREFIX.length)}`
  try {
    const res = await imagesUtil.save(base64, `${ctx.state.images}${name}`)
    ctx.body = { status: 'success', message: 'File was uploaded', payload: { name, ext: res.ext } }
  } catch (err) {
    throw new Exception(400, err.message)
  }
}

export default {
  get,
  post
}
