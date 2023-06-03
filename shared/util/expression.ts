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

export function parseExpression(expression: string): IExpression | null {
  const expressionReg = /{{\s*([a-zA-Z0-9]+)\s*(\(([a-zA-Z0-9]+)\))?\s*:\s*([\S]*)\s*}}/
  const match = expression.match(expressionReg)
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
