import { type JsActuator } from '@shared/types/Actuator'
import axios from 'axios'
import { isString } from 'lodash-unified'

const ApiActuator: JsActuator = {
  paramsValidate: (params: any) => {
    if (!isString(params.url)) return false
    return true
  },
  run: async (params: any) => {
    return await axios.request({
      url: params.url,
      method: isString(params.method) ? params.method : 'get'
    })
  }
}

export default ApiActuator
