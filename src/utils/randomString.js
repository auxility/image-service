import randomNumber from 'random-number-csprng'
const CODE_POSSIBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'

export async function randomString (len) {
  let result = ''

  for (let i = 0; i < len; i++) {
    const trueRandom = await randomNumber(0, CODE_POSSIBLE_CHARS.length - 1)
    result += CODE_POSSIBLE_CHARS.charAt(trueRandom)
  }
  return result
}
