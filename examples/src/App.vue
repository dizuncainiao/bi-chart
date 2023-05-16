<script setup lang="ts">
import {
  BasicSmallLayout,
  ThingsOutboundNumberRanking,
  ThingsOutboundConnectionRateRanking,
  ThingsOutboundConnectionNumberRanking
} from 'dz-bi-chart'
</script>

<template>
  <BasicSmallLayout
    style="box-shadow: 0 0 8px #eee;"
    title="今日外呼任务数"
    value="800"
    unit="次"
    type="我的"
  />

  <div style="width: 600px; height: 400px; box-shadow: 0 0 8px #eee;">
    <ThingsOutboundNumberRanking />
  </div>

  <div style="width: 600px; height: 400px; box-shadow: 0 0 8px #eee;">
    <ThingsOutboundConnectionRateRanking />
  </div>

  <div style="width: 600px; height: 400px; box-shadow: 0 0 8px #eee;">
    <ThingsOutboundConnectionNumberRanking />
  </div>
</template>
