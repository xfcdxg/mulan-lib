import { replace } from 'ramda'
// string -> string
export default (
  name => replace(/省|市|区|县|特别行政|自治/g, '', name)
)
