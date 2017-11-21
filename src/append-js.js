
export default (
  (src, cb) => {
    if (typeof document === 'undefined') return
    const script = document.createElement('script')
    script.src = src
    script.onload = cb
    document.body.appendChild(script)
  }
)
