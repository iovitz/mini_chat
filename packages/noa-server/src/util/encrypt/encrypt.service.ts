import { Buffer } from 'node:buffer'
import { createHash } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AES } from 'crypto-js'
import { customAlphabet } from 'nanoid'
import { gzip, ungzip } from 'pako'
import { stringify } from 'safe-stable-stringify'

const idGenerator = customAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  7,
)
@Injectable()
export class EncryptService {
  constructor(private configService: ConfigService) {}

  genPrimaryKey(prefix: string) {
    return prefix + idGenerator()
  }

  ungzip(gzipBase64Str) {
    return JSON.parse(
      ungzip(Buffer.from(gzipBase64Str, 'base64'), { to: 'string' }),
    )
  }

  gzip(data) {
    return this.strToGzipBase64(stringify(data))
  }

  strToGzipBase64(str) {
    return Buffer.from(gzip(str, { level: 9 })).toString('base64')
  }

  async compareMD5(password: string, hash: string) {
    return await this.encryptMd5(password) === hash
  }

  async encryptMd5(data: string) {
    return createHash('md5').update(data).digest('hex')
  }

  aesEncrypt(message) {
    return AES.encrypt(
      message,
      this.configService.getOrThrow('AES_ENCRYPT_KEY'),
    ).toString()
  }

  aesDecrypt(encrypted) {
    return AES.decrypt(
      encrypted,
      this.configService.getOrThrow('AES_ENCRYPT_KEY'),
    ).toString(CryptoJS.enc.Utf8)
  }
}
