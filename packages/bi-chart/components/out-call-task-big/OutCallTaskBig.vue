<template>
  <BasicBusinessLayout
    chart-type="BasicPie"
    url="/bdcloud-call-analytic/call/callPhoneReport/mineCallTaskStatistics"
  />
</template>

<script lang="ts">
// 呼叫任务统计
import { defineComponent } from 'vue'
import BasicBusinessLayout from '../basic-business-layout/BasicBusinessLayout.vue'

export default defineComponent({
  name: 'OutCallTaskBig',
  components: { BasicBusinessLayout }
})
</script>
