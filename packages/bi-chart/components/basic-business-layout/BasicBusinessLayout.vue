<template>
  <div class="bi-chart-layout">
    <div class="bi-chart-header"></div>
    <div class="bi-chart-content">
      <!--      <BasicPie />-->
      <component :is="chart" :options="options" />
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
import { ChartType, getChartOption } from '../basic-chart/echarts-options'
import http from '../../_plugins/axios-http'
import { useChartComps } from '../basic-chart/chartComps'

export default defineComponent({
  name: 'BasicBusinessLayout',
  props: {
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
        token:
          'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzczMjY4N30.6lCwxodyJIRGArFZeIfP-v-6DrCX7XPJFmX113Vr6E9Px0S-xPb0TpWeZivff5HlqMHhXAWo4KxIfjg8WyK7BQ',
        COMPANYID: '3263',
        companyId: '3263',
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
    const options = getChartOption(unref(chartType))
    const charts = useChartComps()
    const chart = computed(() => Reflect.get(unref(charts), unref(chartType)))

    function getData() {
      http[method.value](url.value, params.value, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzczMjY4N30.6lCwxodyJIRGArFZeIfP-v-6DrCX7XPJFmX113Vr6E9Px0S-xPb0TpWeZivff5HlqMHhXAWo4KxIfjg8WyK7BQ'
        }
      }).then(res => {
        options.value.series[0].data = res.data || []
      })
    }

    onMounted(() => {
      getData()
    })

    return {
      options,
      chart
    }
  }
})
</script>

<style lang="less">
.bi-chart-layout {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 28px;

  .bi-chart-header {
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 20px;
  }

  .bi-chart-content {
    height: calc(100% - 60px);
  }
}
</style>
