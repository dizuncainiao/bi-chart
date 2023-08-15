<template>
  <BasicBusinessLayout
    title="转化率分析"
    chart-type="basicLineStack"
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
import { defineComponent, ref, watch } from 'vue'
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

    function setOption(data, option) {
      const series = [
        {
          name: '线索转客户数',
          data: data?.clueConvertCustomerList || [] // 线索转客户
        },
        {
          name: '客户转商机数',
          data: data?.customerConvertBusinessList || [] // 客户转商机
        }
      ]

      option.xAxis.data = data?.dataList || []
      Object.assign(option.series, series)
    }

    return {
      params,
      getDateText,
      setOption
    }
  }
})
</script>
