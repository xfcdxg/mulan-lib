import { test, identity, always, ifElse } from 'ramda'

export default (
  t => (
    ifElse(
      test(/^(blob|json|text|formData|arrayBuffer)$/),
      identity,
      always('json')
    )(t)
  )
)
