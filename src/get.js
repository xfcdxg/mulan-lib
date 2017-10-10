import api from './api'
import stringifyQuery from './stringify-query'

export default (
  (url, data = {}, headers = {}) => (
    fetch(
      api(`${ url }${ data && stringifyQuery(data) }`),
      { headers }
    ).then(resp => resp.json())
  )
)
