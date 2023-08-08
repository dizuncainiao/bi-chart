---
BI Chart Quick Start
---

# 快速开始

## 安装

```shell
# pnpm
$ pnpm add dz-bi-chart

# npm
$ npm install dz-bi-chart

# yarn
$ yarn add dz-bi-chart
```

## 引入

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import 'dz-bi-chart/dist/es/style.css'

createApp(App).mount('#app')
```

## Hello world

```vue
<script setup lang="ts">
import { BasicSmallLayout } from 'dz-bi-chart'

defineOptions({
  name: 'BasicSmallLayoutDemo'
})
</script>

<template>
  <BasicSmallLayout
    style="box-shadow: 0 0 8px #eee;"
    title="今日外呼任务数"
    value="800"
    unit="次"
    type="我的"
  />
</template>
```
