<template>
  <VChart :option="state.options" autoresize />
</template>

<script>
import { defineComponent } from 'vue'
import { reactive } from 'vue'
import { cloneDeep } from 'lodash-es'
import VChart from 'vue-echarts'
import { pieOptions } from './chartOptions'

export default defineComponent({
  name: 'BasicPie',
  components: { VChart },
  setup() {
    const state = reactive({
      options: cloneDeep(pieOptions)
    })

    return {
      state
    }
  }
})
</script>
