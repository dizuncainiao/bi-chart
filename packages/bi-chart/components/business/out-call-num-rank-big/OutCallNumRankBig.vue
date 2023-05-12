<template>
  <BasicBusinessLayout
    title="外呼次数排行榜"
    chart-type="basicBar"
    url="/bdcloud-call-analytic/call/callPhoneReport/callTimesRankStatistics"
    :params="params"
    :set-option="setOption"
  >
    <template #info>{{ dateText }} | 我的</template>
    <template #form>
      <DepSelect v-model:params="params" />

      <DateSelect v-model:params="params" />
    </template>
  </BasicBusinessLayout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import BasicBusinessLayout from '../../basic-business/BasicBusinessLayout.vue'
import DepSelect from '../../basic-business/dep-select/DepSelect.vue'
import DateSelect from '../../basic-business/date-select/DateSelect.vue'
import { getDateText } from '../../basic-business/hooks/date'

export default defineComponent({
  name: 'OutCallNumRankBig',
  components: {
    DateSelect,
    DepSelect,
    BasicBusinessLayout
  },
  setup() {
    const params = ref({
      cdId: '',
      companyId: '6509',
      endTime: '2023-05-12',
      pageNo: 1,
      pageSize: 10,
      profileId: '67098',
      startTime: '2023-05-11'
    })

    function setOption(data, option) {
      option.yAxis.data = data?.xaxisList || []
      option.series[0].data = data?.callTimesList || []
    }

    const dateText = computed(() => getDateText(params.value))

    return {
      params,
      dateText,
      setOption,
      getDateText
    }
  }
})
</script>
