import { parseExpression, renderExpression } from '~shared/util/expression'

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

    expect(parseExpression('{{ response.data }}')).toEqual(null)
  })

  it('renderExpression', () => {
    expect(renderExpression('hello {{ params: response.data }}')).toEqual([
      'hello ',
      {
        type: 'params',
        renderMethod: 'lodash',
        expressionWorld: 'response.data'
      }
    ])

    expect(renderExpression('{{ params: response.data }} hello')).toEqual([
      {
        type: 'params',
        renderMethod: 'lodash',
        expressionWorld: 'response.data'
      },
      ' hello'
    ])


    expect(renderExpression('before {{ params: response.data }} end')).toEqual([
      'before ',
      {
        type: 'params',
        renderMethod: 'lodash',
        expressionWorld: 'response.data'
      },
      ' end'
    ])

  })
})
