
export interface JsActuator {
  paramsValidate?: (params: any) => boolean
  run: (params: any) => any
}
