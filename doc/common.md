# 通用方法

### Log

```js
  import { log } from 'mulan-lib'

  log('a', 'b', 'c', ...)  // => console.log('a', 'b', 'c', ...)
```

### JSON

```js
  import { parseJSON, stringifyJSON } from 'mulan-lib'

  // 格式化JSON字符串
  parseJSON('{"a":1}')          // -> { a: 1 }

  // 将JSON格式化成字符串
  stringifyJSON({ a: 1 })       // -> '{"a":1}'
```
### Mask

mask(index, length, string)

```js
  import { mask } from 'mulan-lib'

  mask(3, 4, '13761283834')     // -> 137****3834
  mask(0, -3, '123456789')      // -> 123456***
  mask(5, -2, '123456789')      // -> 12**56789
```

### 去除省、市、区、自治区、特别行政区

```js
  import { parseLocName } from 'mulan-lib'

  parseLocName('上海市')         // -> 上海
  parseLocName('湖北省')         // -> 湖北
  parseLocName('虹口区')         // -> 虹口
  parseLocName('西藏自治区')     // -> 西藏
  parseLocName('香港特别行政区')  // -> 香港
```
