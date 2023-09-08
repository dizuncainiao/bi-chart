<script setup lang="ts">
import { BasicChart, allEChartsOptions } from 'dz-bi-chart'
</script>

<template>
  <h2 style="margin: 10px 0;">常规玫瑰图</h2>
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
    <BasicChart :options="allEChartsOptions.basicRosePie" />
  </div>
  <h2 style="margin: 10px 0;">两瓣玫瑰图</h2>
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
    <BasicChart :options="allEChartsOptions.basicTwoRosePie" />
  </div>
</template>
