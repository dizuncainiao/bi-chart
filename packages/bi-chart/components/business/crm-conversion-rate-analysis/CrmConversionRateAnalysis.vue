<template>
  <BasicBusinessLayout
    title="转化率分析"
    chart-type="basicLine"
    url="/pscrm-rest/crmReport/getConvertRateReportData"
    method="get"
    :params="params"
    :set-option="setOption"
  >
    <template #title>
      <div
        style="
          display: inline-flex;
          gap: 4px;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 16px;
          color: #242934;
"
      >
        转化率分析 <bn-icon-app-question />
      </div>
    </template>
    <template #form>
      <DepSelect v-model:params="params" prop-key="deptId" />

      <DateTypeSelect v-model:params="params" />
    </template>
  </BasicBusinessLayout>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { getDateText } from '../../basic-business/hooks/date'
import BasicBusinessLayout from '../../basic-business/BasicBusinessLayout.vue'
import DepSelect from '../../basic-business/dep-select/DepSelect.vue'
import DateTypeSelect from '../../basic-business/date-type-select/DateTypeSelect.vue'
import { BnIconAppQuestion } from 'blocks-next'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'CrmConversionRateAnalysis',
  components: {
    DateTypeSelect,
    DepSelect,
    BasicBusinessLayout,
    BnIconAppQuestion
  },
  props: {
    // 传给接口的参数（companyId 之类的）
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
      const series = [
        {
          name: '线索转客户数',
          type: 'line',
          symbolSize: 6, // 折线点的大小
          stack: 'Total',
          data: data.clueConvertCustomerList || [] // 线索转客户
        },
        {
          name: '客户转商机数',
          type: 'line',
          symbolSize: 6, // 折线点的大小
          stack: 'Total',
          data: data.customerConvertBusinessList || [] // 客户转商机
        }
      ]

      option.xAxis.data = data.dataList || []
      option.series = series

      console.log(option, 'option')
      console.log(data, 'data')
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
