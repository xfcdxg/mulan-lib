import api from './api'

export default (
  url => fetch(api(url)).then(resp => resp.text())
)
