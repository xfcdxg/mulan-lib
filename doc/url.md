# Url

### URL decode / encode

```js
  import { decode, encode } from 'mulan-lib'

  // decode url
  decode(url)

  // encode url
  encode(url)
```

### 格式化Query

```js
  import { stringifyQuery, parseQuery } from 'mulan-lib'

  const search = location.search // -> ?a=1&b=2
  parseQuery(search)             // -> { a: 1, b: 2 }

  const params = { a: 1, b: 2 }
  stringifyQuery(params)         // -> ?a=1&b=2
```

### 统一请求(配合ajax模块)

```js
  import { setServerUrl, api } from 'mulan-lib'
  
  // 进入时设置，全局，无需多次调用，刷新页面需重新调用
  const serverUrl = 'http[s]://[server_url]'
  setServerUrl(serverUrl)               // -> web only

  // 根据传入的参数判断是否需要添加 serverUrl
  api('/[handler]')                     // -> http[s]://[server_url]/[handler]
  api('http://api.other.com/handler2')  // -> http://api.other.com/handler2
```
