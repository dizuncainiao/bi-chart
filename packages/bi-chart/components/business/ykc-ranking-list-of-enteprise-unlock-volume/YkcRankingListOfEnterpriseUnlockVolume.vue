<template>
  <BasicBusinessLayout
    title="企业解锁量排行榜"
    chart-type="basicBar"
    url="/associate-web/callReport/callConnectedTimesRankStatistics"
    :params="params"
    :set-option="setOption"
  >
    <template #info>{{ dateText }} | {{ params.depName }}</template>
    <template #form>
      <DepSelect v-model:params="params" />

      <DateSelect v-model:params="params" />
    </template>
  </BasicBusinessLayout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import BasicBusinessLayout from '../../basic-business/BasicBusinessLayout.vue'
import { getDateText } from '../../basic-business/hooks/date'
import DateSelect from '../../basic-business/date-select/DateSelect.vue'
import DepSelect from '../../basic-business/dep-select/DepSelect.vue'

export default defineComponent({
  name: 'YkcRankingListOfEnterpriseUnlockVolume',
  components: { DepSelect, DateSelect, BasicBusinessLayout },
  setup() {
    const params = ref({
      cdId: 0,
      endDate: '',
      pageNo: 0,
      pageSize: 0,
      startDate: '',
      depName: ''
    })

    const dateText = computed(() => getDateText(params.value))

    function setOption(data, option) {
      option.yAxis.data = data?.xaxisList || [
        '张三',
        '张三2',
        '张三3',
        '张三4',
        '张三5',
        '张三6',
        '张三7'
      ]
      option.series[0].data = data?.dataList || [0, 60, 120, 180, 240, 360, 400]
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
