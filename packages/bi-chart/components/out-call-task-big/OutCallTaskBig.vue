<template>
  <div class="big-chart-wrapper">
    <div class="top-bar">
      <div class="l-box"></div>
      <div class="info"></div>
    </div>
  </div>
  <BasicPie />
</template>

<script lang="ts">
// 呼叫任务统计
import { defineComponent } from 'vue'
import BasicPie from '../basic-pie/BasicPie.vue'

export default defineComponent({
  name: 'OutCallTaskBig',
  components: { BasicPie }
})
</script>
