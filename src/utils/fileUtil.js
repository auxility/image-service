import uuidv5 from 'uuid/v5'
import base64 from 'base64-img'
import findFile from 'find'
import path from 'path'

function uploadFile (base64String, hashLength) {
  return base64.imgSync(base64String, 'static', uuidv5(base64String, uuidv5.URL).slice(0, hashLength))
}

function downloadFile (fileName) {
  return base64.base64Sync(findFile.fileSync('static').find((name) => path.parse(name).name === fileName))
}

export default {
  uploadFile,
  downloadFile
}
