import mockWindow from 'mock-window'

const win = mockWindow({ MULAN: {} })

// string -> string
export default (
  url => win.MULAN.SERVER_URL = url
)
