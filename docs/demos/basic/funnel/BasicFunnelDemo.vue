<script setup lang="ts">
import { BasicChart, allEChartsOptions } from 'dz-bi-chart'
</script>

<template>
  <div>
    <div
      style="
        width: 600px;
        height: 400px;
        padding: 28px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 0 8px #eee;
"
    >
      <BasicChart :options="allEChartsOptions.basicFunnel" />
    </div>
    <div
      style="
        width: 600px;
        height: 400px;
        padding: 28px;
        margin-top: 10px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 0 8px #eee;
"
    >
      <BasicChart :options="allEChartsOptions.basicArrowFunnel" />
    </div>
  </div>
</template>
