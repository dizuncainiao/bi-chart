<script setup lang="ts">
import { ThingsOutboundNumberRanking } from 'dz-bi-chart'

defineOptions({
  name: 'ThingsOutboundNumberRankingDemo'
})
</script>

<template>
  <div
    style="
      height: 400px;
      overflow: hidden;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 0 8px #eee;
"
  >
    <ThingsOutboundNumberRanking />
  </div>
</template>
