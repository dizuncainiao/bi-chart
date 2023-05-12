<template>
  <BasicBusinessLayout
    title="呼叫任务统计"
    chart-type="basicPie"
    url="/bdcloud-call-analytic/call/callPhoneReport/mineCallTaskStatistics"
  >
    <template #info>2023-05-11 | 我的</template>
  </BasicBusinessLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicBusinessLayout from '../basic-business-layout/BasicBusinessLayout.vue'

export default defineComponent({
  name: 'OutCallTaskBig',
  components: { BasicBusinessLayout }
})
</script>
