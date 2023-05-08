<template>
  <v-chart class="chart-box" :option="state.options" autoresize />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive, onMounted } from 'vue'
import VChart from 'vue-echarts'
import { chartOption } from './chartOptions'
import { cloneDeep } from 'lodash-es'
import { getData } from './hooks'

export default defineComponent({
  name: 'BasicBar',
  components: { VChart },
  setup() {
    const state = reactive({
      options: cloneDeep(chartOption)
    })

    onMounted(() => {
      getData().then(res => {
        let optionCache = cloneDeep(chartOption)
        optionCache.series[0].data = res.data || []
        state.options = optionCache
      })
    })

    return {
      state
    }
  }
})
</script>

<style scoped lang="less">
.chart-box {
  width: 100%;
  min-width: 300px;
  height: 100%;
  min-height: 200px;
}
</style>
