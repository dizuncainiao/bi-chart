<template>
  <BasicBusinessLayout
    title="企业解锁量排行榜"
    chart-type="basicBar"
    url="/badu-expand-customer-rest/overview/queryYkcRankingListOfEnterpriseUnlockVolume"
    :params="params"
    :set-option="setOption"
  >
    <template #info><!--{{ dateText }} | -->{{ params.depName }}</template>
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
      startDate: '',
      depName: ''
    })

    const dateText = computed(() => getDateText(params.value))

    function setOption(data, option) {
      console.log(data, 'lin 39')
      option.yAxis.data = (data || []).map((item: any) => item.profileName)
      option.series[0].data = (data || []).map((item: any) => item.unlockNum)
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
