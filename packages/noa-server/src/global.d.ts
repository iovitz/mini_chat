import { Request, Response } from 'express'
import { PromiseManager } from './shared/utils/promise-manager'
import { TracerService } from './utils/tracer/tracer.service'

declare global {
  interface MiddlewareInjected {
    // 中间注入的对象，不一定真的存在，注意调用时间
    stime: bigint
    clientId: string
    promiseManager: PromiseManager
    tracer: TracerService
    getCostNs: () => string
    getCookie: (key: CookieKeys) => string | undefined
    setCookie: (key: CookieKeys, value: string) => void
  }
  interface Req extends Request, MiddlewareInjected {
    user?: any
    userId?: string
    tenantId?: string
    pageId?: string
    pagePermission: string[]
  }
  interface Res extends Response, MiddlewareInjected {}

  // 往原始类型上增加类型
  namespace Express {
    export interface Request {}
    export interface Response {}
  }
}
