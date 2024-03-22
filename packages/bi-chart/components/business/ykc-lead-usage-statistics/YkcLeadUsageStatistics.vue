<template>
  <BasicBusinessLayout
    title="线索使用统计"
    chart-type="basicLine"
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
  name: 'YkcLeadUsageStatistics',
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
      option.xAxis.data = data?.xaxisList || [
        '2024-03-01',
        '2024-03-02',
        '2024-03-03',
        '2024-03-04',
        '2024-03-05',
        '2024-03-06',
        '2024-03-07'
      ]
      option.series = [
        {
          name: '领取线索量',
          type: 'line',
          data: [150, 230, 224, 218, 135, 147, 260]
        },
        {
          name: '分配线索量',
          type: 'line',
          data: [250, 130, 124, 318, 235, 247, 160]
        },
        {
          name: '加入公海的线索量',
          type: 'line',
          data: [450, 530, 324, 118, 335, 347, 60]
        }
      ]
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
