<template>
  <BasicBusinessLayout
    title="客户阶段漏斗"
    chart-type="refineCrmCustomerStageFunnel"
    url="/pscrm-rest/crmReport/getCustomerReportData"
    method="get"
    :params="params"
    :set-option="setOption"
  >
    <template #info>{{ params.depName }}</template>
    <template #form>
      <DepSelect v-model:params="params" prop-key="depId" />

      <DateTypeSelect v-model:params="params" />
    </template>
  </BasicBusinessLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BasicBusinessLayout from '../../basic-business/BasicBusinessLayout.vue'
import { getDateText } from '../../basic-business/hooks/date'
import DateTypeSelect from '../../basic-business/date-type-select/DateTypeSelect.vue'
import DepSelect from '../../basic-business/dep-select/DepSelect.vue'

export default defineComponent({
  name: 'CrmCustomerStageFunnel',
  components: { DepSelect, DateTypeSelect, BasicBusinessLayout },
  props: {
    extraParams: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const params = ref({
      depId: 0,
      dateType: 1,
      depName: '', // 用于显示 info 数据，传为接口参数不用管
      ...props.extraParams
    })

    function setOption(data: any, option: any) {
      option.series[0].data = data?.list || []
      option.series[1].data = data?.list || []
    }

    return {
      params,
      getDateText,
      setOption
    }
  }
})
</script>
