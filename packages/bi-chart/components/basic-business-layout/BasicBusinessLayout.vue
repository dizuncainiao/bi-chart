<template>
  <div class="bi-chart-layout">
    <div class="bi-chart-header">
      <div class="l-box">
        <div class="title">{{ $props.title }}</div>
        <div class="info">
          <slot name="info"></slot>
        </div>
      </div>

      <div class="r-box" style="

  --el-component-size-small: 28px;">
        <el-select
          style="width: 124px;"
          v-model="value"
          placeholder="Select"
          size="small"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value as any"
          />
        </el-select>

        <el-select
          style="width: 80px;"
          v-model="value"
          placeholder="Select"
          size="small"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value as any"
          />
        </el-select>
      </div>
    </div>
    <div class="bi-chart-content">
      <component :is="chart" :options="chartOptions" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  toRefs,
  PropType,
  computed,
  unref
} from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import { ChartType, getChartOption } from '../basic-chart/echarts-options'
import http from '../../_plugins/axios-http'
import { useChartComps } from '../basic-chart/chartComps'

export default defineComponent({
  name: 'BasicBusinessLayout',
  components: {
    ElSelect,
    ElOption
  },
  props: {
    title: {
      type: String as PropType<string>
    },
    // 图表类型（基础图表组件的 name 集合）
    chartType: {
      type: String as PropType<ChartType>,
      required: true
    },
    // 请求地址
    url: {
      type: String as PropType<string>,
      required: true
    },
    // 请求方式
    method: {
      type: String as PropType<'postJson'>,
      default: 'postJson'
    },
    // 请求参数
    params: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({
        endTime: '',
        profileId: '67098',
        startTime: '',
        type: '0',
        pageNo: 0,
        pageSize: 0
      })
    }
  },
  setup(props) {
    const { url, chartType, method, params } = toRefs(props)
    const chartOptions = getChartOption(unref(chartType))
    const charts = useChartComps()
    const chart = computed(() => Reflect.get(unref(charts), unref(chartType)))

    function getData() {
      http[method.value](url.value, params.value).then(res => {
        chartOptions.value.series[0].data = res.data || []
      })
    }

    onMounted(() => {
      getData()
    })

    return {
      chartOptions,
      chart,
      value: ref(''),
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ]
    }
  }
})
</script>

<!--<style lang="less">-->
<!--.bi-chart-layout {-->
<!--  box-sizing: border-box;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  padding: 28px;-->

<!--  .bi-chart-header {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    height: 40px;-->
<!--    margin-bottom: 20px;-->

<!--    .l-box {-->
<!--      text-align: left;-->

<!--      .title {-->
<!--        font-size: 16px;-->
<!--        font-weight: 600;-->
<!--        line-height: 16px;-->
<!--        color: #242934;-->
<!--      }-->

<!--      .info {-->
<!--        margin-top: 10px;-->
<!--        font-size: 14px;-->
<!--        font-weight: 400;-->
<!--        line-height: 14px;-->
<!--        color: #9ca6b9;-->
<!--      }-->
<!--    }-->

<!--    .r-box {-->
<!--      display: flex;-->
<!--      gap: 8px;-->
<!--      margin-top: -4px;-->
<!--    }-->
<!--  }-->

<!--  .bi-chart-content {-->
<!--    height: calc(100% - 60px);-->
<!--  }-->
<!--}-->
<!--</style>-->
