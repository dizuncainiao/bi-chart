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
        console.log(res, 'line 23')
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
  width: 500px;
  height: 400px;
}
</style>
