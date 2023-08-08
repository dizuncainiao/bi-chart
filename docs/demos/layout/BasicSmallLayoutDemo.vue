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
