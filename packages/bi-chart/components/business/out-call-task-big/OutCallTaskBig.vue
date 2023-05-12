<template>
  <BasicBusinessLayout
    title="呼叫任务统计"
    chart-type="basicPie"
    url="/bdcloud-call-analytic/call/callPhoneReport/mineCallTaskStatistics"
    :params="params"
    :set-option="setOption"
  >
    <template #info>{{ dateText }} | 我的</template>
  </BasicBusinessLayout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import BasicBusinessLayout from '../../basic-business/BasicBusinessLayout.vue'
import { getDateText } from '../../basic-business/hooks/date'

export default defineComponent({
  name: 'OutCallTaskBig',
  components: { BasicBusinessLayout },
  setup() {
    const params = ref({
      profileId: '67098',
      type: '0',
      pageNo: 0,
      pageSize: 0
    })

    const dateText = computed(() => getDateText(params.value))

    function setOption(data, option) {
      option.series[0].data = data || []
    }

    return {
      params,
      dateText,
      getDateText,
      setOption
    }
  }
})
</script>
