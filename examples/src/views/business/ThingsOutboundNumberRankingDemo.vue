<script setup lang="ts">
import {
  YkcRankingListOfEnterpriseUnlockVolume,
  YkcUnlockVolumeTrendInThePastSevenDays,
  YkcLeadUsageStatistics
} from 'dz-bi-chart'
import CrmConversionRateAnalysisDemo from '@/views/business/CrmConversionRateAnalysisDemo.vue'

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
    <YkcRankingListOfEnterpriseUnlockVolume />
  </div>
  <br />
  <br />
  <div
    style="
      height: 400px;
      overflow: hidden;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 0 8px #eee;
"
  >
    <YkcUnlockVolumeTrendInThePastSevenDays />
  </div>
  <br />
  <br />
  <div
    style="
      height: 400px;
      overflow: hidden;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 0 8px #eee;
"
  >
    <YkcLeadUsageStatistics />
  </div>
  <br />
  <br />
  <!--  <CrmConversionRateAnalysisDemo />-->
</template>
