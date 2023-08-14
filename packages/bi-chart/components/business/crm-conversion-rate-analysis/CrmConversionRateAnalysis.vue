<template>
  <BasicBusinessLayout
    title="转化率分析"
    chart-type="basicLine"
    url="/pscrm-rest/crmReport/getConvertRateReportData"
    method="get"
    :params="params"
    :set-option="setOption"
  >
    <template #info>{{ dateText }} | {{ params.depName }}</template>
    <template #form>
      <DepSelect v-model:params="params" prop-key="deptId" />

      <DateTypeSelect v-model:params="params" />
    </template>
  </BasicBusinessLayout>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import BasicBusinessLayout from '../../basic-business/BasicBusinessLayout.vue'
import { getDateText } from '../../basic-business/hooks/date'
import DepSelect from '../../basic-business/dep-select/DepSelect.vue'
import DateTypeSelect from '../../basic-business/date-type-select/DateTypeSelect.vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'CrmConversionRateAnalysis',
  components: { DateTypeSelect, DepSelect, BasicBusinessLayout },
  props: {
    // 传给接口的参数
    extraParams: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({})
    }
  },
  setup(props) {
    const params = ref({
      // 部门 id
      deptId: 0,
      // 部门名称, 用于模版中显示，不参与请求
      depName: '',
      dateType: 1,
      ...props.extraParams
    })

    // 监听父组件传入的参数，更新 params
    watch(
      () => props.extraParams,
      val => {
        params.value = {
          ...params.value,
          ...val
        }
      }
    )

    const dateText = computed(() => getDateText(params.value))

    function setOption(data, option) {
      option.yAxis.data = data?.xaxisList || []
      option.series[0].data = data?.dataList || []
      option.series[0].label.formatter = '{c}%'
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
