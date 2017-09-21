
const initial = ['周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日']
// number -> arr -> string
export default (
    (w = initial) => d => w[d]
)
