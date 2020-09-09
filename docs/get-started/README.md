---
title: 快速上手
---

# 快速上手

### 按需引入

我们可以只引入需要的组件，比如 Button 和 Popover，那么需要在 main.js 中写入以下内容：

```js
import {Button, Popover} from 'panda-ui-amber'
import 'panda-ui-amber/dist/index.css'

Vue.component(Button.name, Button);
Vue.component(Select.name, Popover);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Popover)
 */
```

Toast 是以插件的形式引入，也是写在 main.js 上，如下：
```js
import {pluginToast} from 'panda-ui-amber'
Vue.use(pluginToast)
```

以上代码便完成了所需组件的引入。需要注意的是，样式文件需要单独引入。
