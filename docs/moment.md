
# Date(Time)

### Moment

moment([ Format ])([ Date | DateStr | Timestamp ])

```js
  import { moment } from 'mulan-lib'

  // Format
  moment('YYYY-MM-DD HH:mm:ss')()    // -> 2017-10-16 13:57:30
  moment('YYYY/MM/DD')()             // -> 2017/10/16
  moment('x')()                      // -> 1508133450000
  moment('X')()                      // -> 1508133450
  moment('day')()                    // -> 1
  moment('date')()                   // -> 16

  // Date
  const d = new Date()
  moment('x')(d)                     // -> 1508133450000

  // DateStr
  const str = '2017-10-16 13:57:30'
  moment('x')(str)                   // -> 1508133450000

  // Timestamp
  moment('YYYY-MM-DD')(Date.now())   // -> 2017-10-16
```

### 追加(-)n天(时|分|秒)

addInterval(step, type, date) -> Timestamp

```js
  import { addInterval, moment } from 'mulan-lib'
  import { compose } from 'ramda'

  const d = new Date()     // -> 2017-10-16 xx:xx:xx
  // 加一天
  addInterval(1, 'd', d)   // -> 1508219850000
  // 减一天
  addInterval(-1, 'd', d)  // -> 1508047050000
  // 加一小时
  addInterval(1, 'h', d)
  // 加一分钟
  addInterval(1, 'm', d)
  // 加一秒钟
  addInterval(1, 's', d)

  // 实例:
  moment('YYYY-MM-DD')(addInterval(1, 'd')(d))          // => 2017-10-17
  // 或
  compose(moment('YYYY-MM-DD'), addInterval(1, 'd'))(d) // => 2017-10-17
```


### 历时

timeDuration(sts, ets) -> [days, hours, minutes, seconds]

```js
  import { timeDuration, moment } from 'mulan-lib'

  const st = '2017-10-14 12:00:00'
  const et = '2017-10-16 13:09:30'

  timeDuration(moment('x')(st), moment('x')(et)) // -> [ 2, 1, 9, 30 ]
```

### Week

```js
  import { week } from 'mulan-lib'
  import { compose } from 'ramda'

  // default: 周*
  const d = new Date()
  week()(moment('day')(d))                    // -> 周一
  // or
  compose(week(), moment('day'))(d)

  // customize
  const weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  compose(week(weekArr), moment('day'))(d)    // -> 星期一

  const engArr  = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
  compose(week(engArr), moment('day'))(d)     // -> Mon.
```
