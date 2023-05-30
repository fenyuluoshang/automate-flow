import { type JsActuator } from '@shared/types/Actuator'
import axios, { type AxiosRequestConfig } from 'axios'
import { isString } from 'lodash-unified'

const ApiActuator: JsActuator = {
  paramsValidate: (params: any) => {
    if (!isString(params.url)) return false
    return true
  },
  run: async (params: AxiosRequestConfig<any>) => {
    return await axios.request({
      ...params,
      method: isString(params.method) ? params.method : 'get',
    })
  }
}

export default ApiActuator
