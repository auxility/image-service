import { fileUploadRequestSchema } from '../models'
import logger from '../../../config/winston'
import Exception from '../../../utils/Exception.class'
import { generateFileName, uploadFile } from '../../../utils/fileUtil'

async function get (ctx) {
}

async function post (ctx) {
  const { error, value } = fileUploadRequestSchema.validate(ctx.request.body)
  if (error) throw new Exception(400, 'Validation error!', error.details)
  const { data } = value
  // TODO Decode base64 to the file and get the name of the file
  const fileName = generateFileName(data.base64, data.hashLength)
  uploadFile(fileName)
  ctx.body = { status: 'success', message: 'File was uploaded', payload: fileName }
  logger.info(`File was uploaded ${fileName}`)
}

export default {
  get, post
}
