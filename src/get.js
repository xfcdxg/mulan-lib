import api from './api'
import stringifyQuery from './stringify-query'
import respType from './_/response-type'
import fetch from './_/fetch'

export default (
  (url, data = {}, { headers = {}, dataType = 'json' } = {}) => (
    fetch()(
      api(`${ url }${ data && stringifyQuery(data) }`), { headers }
    ).then(resp => resp[respType(dataType)]())
  )
)
