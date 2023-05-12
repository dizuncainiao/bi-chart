<template>
  <ElConfigProvider :locale="locale">
    <div class="bi-chart-layout">
      <div class="bi-chart-header">
        <div class="l-box">
          <div class="title">{{ $props.title }}</div>
          <div class="info">
            <slot name="info"></slot>
          </div>
        </div>

        <div class="r-box">
          <slot name="form"></slot>
        </div>
      </div>
      <div class="bi-chart-content">
        <BasicChart :options="chartOptions" />
      </div>
    </div>
  </ElConfigProvider>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, PropType, unref, watch } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { ChartType, getChartOption } from '../basic-chart/echarts-options'
import http from '../../_plugins/axios-http'
import BasicChart from '../basic-chart/BasicChart.vue'
import { locale } from './hooks/locale'

type SetOption = (data: any, option: any) => void

export default defineComponent({
  name: 'BasicBusinessLayout',
  components: {
    BasicChart,
    ElConfigProvider
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
      default: () => ({})
    },
    // 设置图表 option 方法
    setOption: {
      type: Function as PropType<SetOption>,
      required: true
    }
  },
  setup(props) {
    const { url, chartType, method, params } = toRefs(props)
    const chartOptions = getChartOption(unref(chartType))

    function getData() {
      http[method.value](url.value, params.value)
        .then(res => {
          props.setOption(res.data, chartOptions.value)
        })
        .catch(err => {
          console.error(`ChartError: Error in '${url.value}',\n ${err}`)
        })
    }

    watch(
      () => props.params,
      () => {
        getData()
      }
    )

    onMounted(() => {
      getData()
    })

    return {
      chartOptions,
      locale
    }
  }
})
</script>
