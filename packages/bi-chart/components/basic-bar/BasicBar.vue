<template>
    <v-chart class="chart-box" :option="state.options" autoresize/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {reactive} from "vue";
import VChart from "vue-echarts";
import {chartOption} from "./chartOptions";
import {cloneDeep} from 'lodash-es'

export default defineComponent({
    name: 'BasicBar',
    components: {VChart},
    setup() {
        const state = reactive({
            options: cloneDeep(chartOption)
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
