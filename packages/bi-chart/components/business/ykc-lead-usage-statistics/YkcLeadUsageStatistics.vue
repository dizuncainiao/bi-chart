<template>
  <BasicBusinessLayout
    title="线索使用统计"
    chart-type="basicLine"
    url="/badu-expand-customer-rest/overview/queryYkcLeadUsageStatistics"
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
      option.xAxis.data = (data || []).map((item: any) => item.createdTime)
      option.series = [
        {
          name: '领取线索量',
          type: 'line',
          data: (data || []).map((item: any) => item.receiveCount)
        },
        {
          name: '分配线索量',
          type: 'line',
          data: (data || []).map((item: any) => item.allocationCount)
        },
        {
          name: '加入公海的线索量',
          type: 'line',
          data: (data || []).map((item: any) => item.seaCount)
        }
      ]
      option.dataZoom = [
        {
          type: 'inside'
        },
        {
          type: 'slider'
        }
      ]
      option.grid = {
        bottom: 60
      }
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
