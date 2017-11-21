# mulan-lib

前端开发工具库，基于 [Ramda][ramda]，支持 SSR

[![OSX Build][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![codecov][codecov-image]](codecov-url)

### 安装
```bash
  $ npm install mulan-lib
```

### Build

```bash
  $ npm run common
  -- uglify
  $ npm run build
```

### 引用

```js
  import * as mulan from 'mulan-lib'
```

### 按需引用 (推荐)

如果使用 webpack+babel 来构建项目，那推荐使用 [babel-plugin-import][import]

```js
  import { send, moment, parseQuery } from 'mulan-lib'
```

### Documentation

* [Common][common]
* [Date(Time)][moment]
* [Url][url]
* [Ajax][ajax]
* [Storage (web only)][storage]

### Tips

* v1.0.17 后升级了ajax的传参方式
* v1.0.20 支持 SSR

[url]:./doc/url.md
[ajax]:./doc/ajax.md
[storage]:./doc/storage.md
[moment]:./doc/moment.md
[common]:./doc/common.md
[import]:https://github.com/ant-design/babel-plugin-import
[ramda]:https://github.com/ramda/ramda
[travis-image]: https://api.travis-ci.org/xfcdxg/mulan-lib.svg
[travis-url]:https://travis-ci.org/xfcdxg/mulan-lib/
[npm-image]:https://img.shields.io/badge/npm-v1.0.21-green.svg
[npm-url]:https://www.npmjs.com/package/mulan-lib
[codecov-image]:https://codecov.io/gh/xfcdxg/mulan-lib/branch/master/graph/badge.svg
[codecov-url]:https://codecov.io/gh/xfcdxg/mulan-lib
