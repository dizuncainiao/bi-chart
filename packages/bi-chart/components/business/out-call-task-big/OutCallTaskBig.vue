<template>
  <BasicBusinessLayout
    title="呼叫任务统计"
    chart-type="basicPie"
    url="/bdcloud-call-analytic/call/callPhoneReport/mineCallTaskStatistics"
    :params="params"
  >
    <template #info>2023-05-11 | 我的</template>
  </BasicBusinessLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicBusinessLayout from '../../basic-business-component/BasicBusinessLayout.vue'

export default defineComponent({
  name: 'OutCallTaskBig',
  components: { BasicBusinessLayout },
  setup() {
    return {
      params: {
        profileId: '67098',
        type: '0',
        pageNo: 0,
        pageSize: 0
      }
    }
  }
})
</script>
