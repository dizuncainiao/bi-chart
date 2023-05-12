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
          <el-select
            style="width: 124px;"
            v-model="state.cdId"
            :teleported="false"
            placeholder="选择部门"
            size="small"
          >
            <el-option
              v-for="item of state.depListData"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>

          <el-select
            style="width: 80px;"
            v-model="state.date"
            :teleported="false"
            placeholder="选择时间"
            size="small"
          >
            <el-option label="昨日" value="1" />
            <el-option label="近7天" value="2" />
            <el-option label="本周" value="3" />
            <el-option label="近30天" value="4" />
            <el-option label="本月" value="5" />
          </el-select>
        </div>
      </div>
      <div class="bi-chart-content">
        <BasicChart :options="chartOptions" />
      </div>
    </div>
  </ElConfigProvider>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  toRefs,
  PropType,
  unref,
  reactive
} from 'vue'
import { ElSelect, ElOption, ElConfigProvider } from 'element-plus'
import { ChartType, getChartOption } from '../basic-chart/echarts-options'
import http from '../../_plugins/axios-http'
import BasicChart from '../basic-chart/BasicChart.vue'
import { DepInfo, getDepartmentList } from '../../_plugins/axios-http/apis'

export default defineComponent({
  name: 'BasicBusinessLayout',
  components: {
    BasicChart,
    ElSelect,
    ElOption,
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
    const state = reactive<{
      date: string
      depListData: DepInfo[]
      cdId: number | string
    }>({
      date: '1',
      depListData: [],
      cdId: ''
    })

    function getData() {
      http[method.value](url.value, params.value).then(res => {
        chartOptions.value.series[0].data = res.data || []
      })
    }

    getDepartmentList({}).then(res => {
      const depList = res?.data?.innerDep || []

      depList.forEach(item => {
        item.id = Math.abs(item.id)
        item.pId = Math.abs(item.pId)
      })

      // 获取最顶层组件架构
      const topLevelIndex = depList.findIndex((item: any) => item.pId == 0)

      if (topLevelIndex > -1) {
        depList[topLevelIndex].name = '全部'
        depList[topLevelIndex].id = 0
      }

      state.depListData = depList
      state.cdId = depList[0]?.id ?? ''
    })

    onMounted(() => {
      getData()
    })

    return {
      chartOptions,
      value: ref(''),
      state,
      locale: {
        name: 'zh-cn',
        el: {
          select: {
            loading: '\u52A0\u8F7D\u4E2D',
            noMatch: '\u65E0\u5339\u914D\u6570\u636E',
            noData: '\u65E0\u6570\u636E',
            placeholder: '\u8BF7\u9009\u62E9'
          }
        }
      }
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
