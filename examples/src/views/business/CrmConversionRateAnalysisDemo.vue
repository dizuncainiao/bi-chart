<script setup lang="ts">
import { CrmConversionRateAnalysis } from 'dz-bi-chart'

defineOptions({
  name: 'CrmConversionRateAnalysisDemo'
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
    <CrmConversionRateAnalysis />
  </div>
</template>
