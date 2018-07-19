import sharp from 'sharp'

function parse (base64) {
  const match = base64.match(/^data:image\/([\w+]+);base64,([\s\S]+)/)
  // IF TYPE NOT EQUAL EXTENSION
  const baseType = {
    'jpeg': 'jpg',
    'svg+xml': 'svg'
  }

  if (!match) {
    throw new Error('image base64 data error')
  }

  const ext = baseType[match[1]] ? baseType[match[1]] : match[1]
  return {
    ext,
    data: match[2]
  }
}

async function save (base64, name) {
  const res = parse(base64)
  const buffer = Buffer.from(res.data, 'base64')
  await sharp(buffer)
    .resize(1920, 1920)
    .max()
    .withoutEnlargement()
    .jpeg()
    .toFile(name)
  await sharp(buffer)
    .resize(240, 240)
    .max()
    .withoutEnlargement()
    .jpeg()
    .toFile(`${name}-min`)
  return res
}

export default {
  save
}
