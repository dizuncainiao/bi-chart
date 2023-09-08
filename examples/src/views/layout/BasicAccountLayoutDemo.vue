<script setup lang="ts">
import { BasicAccountLayout } from 'dz-bi-chart'

defineOptions({
  name: 'BasicAccountLayoutDemo'
})
</script>

<template>
  <BasicAccountLayout
    style="box-shadow: 0 0 8px #eee;"
    title="今日外呼任务数"
    value="800"
    unit="次"
    type="我的"
  />
</template>
