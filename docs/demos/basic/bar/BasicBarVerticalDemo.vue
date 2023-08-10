<script setup lang="ts">
import { BasicChart, allEchartsOptions } from 'dz-bi-chart'

defineOptions({
  name: 'BasicBarVerticalDemo'
})
</script>

<template>
  <div
    style="
      height: 400px;
      padding: 28px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 0 8px #eee;
"
  >
    <BasicChart :options="allEchartsOptions.basicBarVertical" />
  </div>
</template>
