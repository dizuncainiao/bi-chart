<script setup lang="ts">
import { BasicChart, allEChartsOptions } from 'dz-bi-chart'

defineOptions({
  name: 'BasicLineAreaStackDemo'
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
    <BasicChart :options="allEChartsOptions.basicLineAreaStack" />
  </div>
</template>
