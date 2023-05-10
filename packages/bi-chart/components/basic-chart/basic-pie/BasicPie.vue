<template>
  <VChart :option="$props.options" autoresize />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { reactive } from 'vue'
import { cloneDeep } from 'lodash-es'
import VChart from 'vue-echarts'
import pieOptions from './chartOptions'

export default defineComponent({
  name: 'BasicPie',
  components: { VChart },
  props: {
    options: {
      type: Object as PropType<any>,
      default: () => cloneDeep(pieOptions)
    }
  },
  setup() {
    // const state = reactive({
    //   options: cloneDeep(pieOptions)
    // })
    //
    // return {
    //   state
    // }
  }
})
</script>
