<script setup lang="ts">
import {
  OutCallTaskBig,
  OutCallNumRankBig,
  BasicSmallLayout,
  ThingsOutboundNumberRanking,
  ThingsOutboundConnectionRateRanking,
  ThingsOutboundConnectionNumberRanking
} from 'bi-chart'
</script>

<template>
  <!--  <div style="width: 600px; height: 400px;">-->
  <!--    <OutCallTaskBig />-->
  <!--  </div>-->

  <!--  <div style="width: 600px; height: 400px;">-->
  <!--    <OutCallNumRankBig />-->
  <!--  </div>-->

  <!--  <BasicSmallLayout title="今日外呼任务数" value="800" unit="次" type="我的" />-->

  <div style="width: 600px; height: 400px;">
    <ThingsOutboundNumberRanking />
  </div>
  <div style="width: 600px; height: 400px;">
    <ThingsOutboundConnectionRateRanking />
  </div>
  <div style="width: 600px; height: 400px;">
    <ThingsOutboundConnectionNumberRanking />
  </div>
</template>
