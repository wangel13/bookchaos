import crypto from 'crypto'
import * as md5 from 'md5'

interface createUser {
  name?: string
  email: string
  password: string
}

export async function createUser({ name, email, password }: createUser) {
  const formattedEmail = await `${email}`.trim().toLowerCase()
  const passwordSalt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, passwordSalt, 1000, 64, 'sha512').toString('hex')
  const emailHash = await md5(formattedEmail)

  return {
    name,
    email: formattedEmail,
    password: hash,
    passwordSalt,
    emailHash,
  }
}

export async function validatePassword(user, inputPassword) {
  const inputHash = crypto.pbkdf2Sync(inputPassword, user.passwordSalt, 1000, 64, 'sha512').toString('hex')
  return user.password === inputHash
}
