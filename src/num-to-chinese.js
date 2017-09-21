//将数字转化成汉字，支持范围：1-999
const numToChinese = s => {
  s = String(s)
  const arr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  if (s.length === 1) return arr[s]
  if (s.length === 2) {
    let g = arr[s.charAt(1)]
    if (s.charAt(1) === '0') g = ''
    if (s.charAt(0) === '1') return `十${ g }`
    if (s.charAt(0) >= '1') return `${ arr[s.charAt(0)] }十${ g }`
  }
  if (s.length === 3) {
    let sh = arr[s.charAt(1)]
    let g = arr[s.charAt(2)]
    if (s.charAt(1) === '0') sh = ''
    if (s.charAt(2) === '0') g = ''
    if (sh === '' && g === '') return `${ arr[s.charAt(0)] }百`
    if (sh === '') return `${ arr[s.charAt(0)] }百零${ g }`
    if (g === '') return `${ arr[s.charAt(0)] }百${ arr[s.charAt(1)] }十`
    return `${ arr[s.charAt(0)] }百${ arr[s.charAt(1)] }十${ g }`
  }
}

export default numToChinese
