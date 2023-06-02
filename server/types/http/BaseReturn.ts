export interface BaseReturn<T> {
  code: number
  message: string
  data?: T
}

export class SuccessReturn<T> {
  code = 0
  message = 'success'
  data: T
  constructor(data: T) {
    this.data = data
  }
}

export class ErrorReturn {
  code = -1
  message: string

  constructor(message: string)
  constructor(code: number, message: string)
  constructor(codeOrMessage: number | string, message?: string) {
    if (typeof codeOrMessage === 'number') {
      this.code = codeOrMessage
      this.message = message ?? 'error'
    } else {
      this.message = codeOrMessage
    }
  }
}
