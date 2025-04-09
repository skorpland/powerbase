import type { HttpRequest, Statement, PowerbaseJsQuery } from '@skorpland/sql-to-rest'

export type BaseResult = {
  statement: Statement
}

export type HttpResult = BaseResult &
  HttpRequest & {
    type: 'http'
    language: 'http' | 'curl'
  }

export type PowerbaseJsResult = BaseResult &
  PowerbaseJsQuery & {
    type: 'powerbase-js'
    language: 'js'
  }

export type ResultBundle = HttpResult | PowerbaseJsResult
