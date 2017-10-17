# Storage

统一 Local(Session)Storage 的处理方式

### Set

setStore(key, value[, type])

```js
  import { setStore } from 'mulan-lib'

  // set local
  setStore('key', 'value')
  setStore('okey', { value: 'abc' })

  // set session
  setStore('key', 'value', 'session')
  setStore('okey', { value: 'abc' }, 'session')
```

### Get

getStore(key[, type])

```js
  import { getStore } from 'mulan-lib'
  // get local
  getStore('key')   // -> value
  getStore('okey')  // -> { value: 'abc' }

  // get session
  getStore('key', 'session')   // -> value
  getStore('okey', 'session')  // -> { value: 'abc' }
```

### Remove

removeStore(key[, type])

```js
  import { removeStore } from 'mulan-lib'
  
  // remove
  removeStore('key')
  removeStore('key', 'session')
```
