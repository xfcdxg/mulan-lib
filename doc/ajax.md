
# Ajax

基于 Fetch, Fetch 基于 Promise, 因此需要添加相关的 polyfill

### Get

get(url [, data] [, options])

```js
  import { get, api } from 'mulan-lib'

  get(api('/handler'))                  // get -> http[s]://[server_url]/handler
  get(api('/handler'), { a: 1, b: 2 })  // get -> http[s]://[server_url]/handler?a=1&b=2

  const options = {
    headers:  { ... },
    dataType: 'text'
  }
  get('/handler', { a: 1, b: 2 }, options)
```

### Send

send(url, data[, options) -> default method: POST

```js
  import { send } from 'mulan-lib'

  send('/handler', { a: 1, b: 2 })  
  send('/handler', { a: 1, b: 2 }, { method: 'DELETE' })
  send('/handler', { a: 1, b: 2 }, { method: 'PUT', headers: { ... } })
  send('/handler', { a: 1, b: 2 }, { headers: { ... }, dataType: 'json' })
```
