/**
 * The Expression in workflow allow use lodash or [jq](https://jqlang.github.io/jq/) and default use lodash.
 * expression like {{ [type]([render-method]): [expression] }}
 * the expression with jq can only pass at backend
 *
 * the expression example:
 * - {{ params: response.data }}
 * - {{ params(lodash): response.data }}
 * - {{ params(jq): .response.data }}
 *
 */

/**
 * the expression type
 */
export interface IExpression {
  type: string
  renderMethod: string
  expressionWorld: string
}

const ExpressionReg = /{{\s*([a-zA-Z0-9]+)\s*(\(([a-zA-Z0-9]+)\))?\s*:\s*([\S]*)\s*}}/

export function parseExpression(expression: string): IExpression | null {
  const match = expression.match(ExpressionReg)
  if (match != null) {
    const type = match[1]
    const renderMethod = (match[3] ?? 'lodash').toLowerCase()
    const expressionWorld = match[4]
    return {
      type,
      renderMethod,
      expressionWorld
    }
  }
  return null
}

export function renderExpression(input: string): Array<string | IExpression> {
  if(input === '') return []
  const match = input.match(ExpressionReg)
  if (match != null) {
    return [
      ...renderExpression(input.substring(0, match.index as number)),
      parseExpression(match[0]) as IExpression,
      ...renderExpression(input.substring(match.index as number + match[0].length))
    ]
  }
  return [input]
}