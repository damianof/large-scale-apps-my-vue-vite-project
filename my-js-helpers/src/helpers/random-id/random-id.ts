export const randomid = (): string => {
  let result: string = ''
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const array: Uint32Array = new Uint32Array(1)
    window.crypto.getRandomValues(array)
    result = array[0].toString()
  } else {
    // throw error
    // throw Error('Browser does not support window.crypto.getRandomValues')
    // if node, we could use crypto to do the same thing
    result = require('crypto').randomBytes(5).toString('hex')
  }

  // pad the result with zero to make sure is always the same length (11 chars in our case)
  if (result.length < 11) {
    result = result.padStart(11, '0')
  }

  return result
}
