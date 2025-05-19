/**
 * Thrown when key length is invalid
 */
export class InvalidKeyLengthError extends Error {
  static name = 'InvalidKeyLengthError'

  constructor (message = 'Invalid key length') {
    super(message)
    this.name = 'InvalidKeyLengthError'
  }
}
