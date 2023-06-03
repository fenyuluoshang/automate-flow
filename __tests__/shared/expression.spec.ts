import { parseExpression } from '../../shared/util/expression'

describe('expression test', () => {
  it('parseExpression', () => {
    expect(parseExpression('{{ params: response.data }}')).toEqual({
      type: 'params',
      renderMethod: 'lodash',
      expressionWorld: 'response.data'
    })

    expect(parseExpression('{{ params(jq): response.data }}')).toEqual({
      type: 'params',
      renderMethod: 'jq',
      expressionWorld: 'response.data'
    })

    expect(parseExpression('{{ params(JQ): .response.data }}')).toEqual({
      type: 'params',
      renderMethod: 'jq',
      expressionWorld: '.response.data'
    })
  })
})
