import { fileUploadRequestSchema } from '../models'
import logger from '../../../config/winston'
import Exception from '../../../utils/Exception.class'
import fileUtil from '../../../utils/fileUtil'

async function get (ctx) {
  const { fileName } = ctx.params
  const data = await fileUtil.downloadFile(fileName)
  ctx.body = { status: 'success', message: 'File was downloaded', payload: data }
  logger.info(`File was downloaded: ${data}`)
}

async function post (ctx) {
  const { error, value } = fileUploadRequestSchema.validate(ctx.request.body)
  if (error) throw new Exception(400, 'Validation error!', error.details)
  console.log('Value', value)
  const fileName = await fileUtil.uploadFile(value.base64, value.hashLength)
  ctx.body = { status: 'success', message: 'File was uploaded', payload: fileName }
  logger.info(`File was uploaded: ${fileName}`)
}

export default {
  get, post
}
