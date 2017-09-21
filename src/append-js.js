
export default (
  (src, cb) => {
    const script = document.createElement('script')
    script.src    = src
    script.onload = cb
    document.body.appendChild(script)
  }
)
