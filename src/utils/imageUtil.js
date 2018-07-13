import fs from 'fs'
import appRoot from 'app-root-path'
import { Exception } from './Exception.class'

function parse (base64) {
  const match = base64.match(/^data:image\/([\w+]+);base64,([\s\S]+)/)
  // IF TYPE NOT EQUAL EXTENSION
  const baseType = {
    'jpeg': 'jpg',
    'svg+xml': 'svg'
  }

  if (!match) {
    throw new Exception(400, 'image base64 data error')
  }

  const ext = baseType[match[1]] ? baseType[match[1]] : match[1]
  return {
    ext,
    data: match[2]
  }
}

async function save (base64, name) {
  const res = parse(base64)
  const imgName = `${appRoot}/static/${name}`
  const buffer = Buffer.from(res.data, 'base64')
  await sharp(buffer).png().toFile(imgName)
  return res
}

function get (name) {
  return fs.createReadStream(`${appRoot}/static/${name}`)
}

export default {
  parse,
  save,
  get
}
