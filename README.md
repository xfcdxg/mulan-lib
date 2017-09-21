# mulan-lib

JS Web 工具库

```bash
  $ npm install mulan-lib
```

### 引用

```js
  import * as mulan from 'mulan-lib'
```

### commonJs

```bash
  $ npm run common
  -- uglify
  $ npm run build
```

按需引用

```js
  //按需引用
  import { add, parseQuery, moment, send } from 'mulan-lib'
```

CommonModule

```js
  import { decode, encode, log, mask, parseJSON, stringifyJSON, parseLocName } from 'mulan-lib'

  //decode url
  decode(url)

  //encode url
  encode(url)

  //log
  log('a', 'b', 'c', ...)

  //格式化JSON字符串
  parseJSON('{"a":1}') // => { a: 1 }

  //将JSON格式化成字符串
  stringifyJSON({ a: 1 }) // => '{"a":1}'

  //去除省市区
  parseLocName('上海市') // => 上海

  //隐藏部分字符串 mask(index, length, string)
  mask(3, 4, '13761283834') // => 137****3834
  mask(0, -3, '123456789')  // => 123456***
  mask(5, -2, '123456789')  // => 12**56789

```

Moment:

```js
  import { moment, addInterval, compose, week, timeDuration } from 'mulan-lib'
  //默认当天
  moment('YYYY-MM-DD')()

  //格式化日期
  const d = new Date() // => 2017-02-15
  moment('YYYY/MM/DD')(d) // => 2017/02/15

  //格式化时间戳
  const ts = 1487136727315
  moment('YYYY-MM-DD HH:mm:ss')(ts) // => 2017-02-15 13:32:07

  //格式化成时间戳
  moment('x')(d) // => 1487136727315

  //历时 [天，时，分] 默认为 0
  const st = '2017-02-14 12:00'
  const et = '2017-02-16 13:09'

  timeDuration(moment('x')(st), moment('x')(et)) //返回 [ 2, 1, 9 ]

  //格式化星期，默认：周*
  week()(moment('day')(d)) // => 周三
  //组合做法
  compose(week(), moment('day'))(d)
  //星期* 形式
  const weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  compose(week(weekArr), moment('day'))(d) // => 星期三
  //英文  形式
  const engArr  = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
  compose(week(engArr), moment('day'))(d) // => Wed.


  /*
      在日期上添加 n 天(时、分、秒)
      addInterval(step, type, date)
      step: 添加 n 天(时、分、秒)
      type: 'd' | 'h' | 'm' | 's'
      date: Date | DateStr | TimeStamp
  */
  //例:
  moment('YYYY-MM-DD')(addInterval(1, 'd')(moment('x')(d))) // => 2016-02-16
  //或
  compose(moment('YYYY-MM-DD'), addInterval(1, 'd'), moment('x'))(d) // => 2016-02-16

  //扩展使用场景
  const startDate = '2017/02/15'
  const endDate   = '2017/02/15'
  const toTs      = moment('x')

  const postData = {
    sts: toTs(startDate),
    ets: toTs(endDate),   
    ...
  }

  send('/order', postData).then(...)
```

Url:

```js
  import { stringifyQuery, parseQuery, setServerUrl, api } from 'mulan-lib'

  //设置serverUrl，统一请求出口路径，需分环境配置
  setServerUrl('http://api.otosaas.com')

  //判断api类型，如果是path会默认加上serverUrl，如果是有效URL则返回有效URL
  api('/handler') // http://api.otosaas.com/handler
  api('http://api.other.com/handler2') //http://api.other.com/handler2

  //将 url search 转成对象
  const search = location.search //?a=1&b=2
  parseQuery(search) // => { a: 1, b: 2 }

  //将对象转成 url search
  const params = { a: 1, b: 2 }
  stringifyQuery(params) // => ?a=1&b=2
```

Ajax:

```js
  import { get, send } from 'mulan-lib'

  //get(url, data[, headers])
  get('/handler') // get -> http://xxx.com/handler
  get('/handler', { a: 1, b: 2 })  // get -> http://xxx.com/handler?a=1&b=2
  get('/handler', { a: 1, b: 2 }, { Content-Type: 'xxx' })

  //send(url, data[, method][, headers])
  send('/handler', { a: 1, b: 2 })
  send('/handler', { a: 1, b: 2 }, 'DELETE')
  send('/handler', { a: 1, b: 2 }, 'PUT', { Content-Type: 'xxx' })
  send('/handler', { a: 1, b: 2 }, { Content-Type: 'xxx' })

  //返回处理
  get('/handler')
  .then(reply => {
    const { code, data, message } = reply
    // ...
  })
  .catch(err => console.log(err))

```

Storage:

```js
  import { setStore, getStore, removeStore } from 'mulan-lib'

  //设置localStorage
  setStore('string', 'localStorage')
  setStore('object', { type: 'localStorage' })

  //设置sessionStorage
  setStore('string', 'sessionStorage', 'session')
  setStore('object', { type: 'sessionStorage' }, 'session')

  //获取localStorage
  getStore('string')  // -> localStorage
  getStore('object')  // -> { type: 'localStorage' }

  //获取sessionStorage
  getStore('string', 'session')  // -> sessionStorage
  getStore('object', 'session')  // -> { type: 'sessionStorage' }

  //删除localStorage
  removeStore('string')
  //删除sessionStorage
  removeStore('string', 'session')

```
