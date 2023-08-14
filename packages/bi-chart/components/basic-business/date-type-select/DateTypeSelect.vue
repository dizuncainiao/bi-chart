<template>
  <bn-select
    style="width: 95px;"
    v-model="state.dateType"
    placeholder="请选择时间"
    size="small"
    @change="dateChange"
  >
    <bn-option
      v-for="item in timeOption"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </bn-select>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Select as BnSelect, Option as BnOption } from 'blocks-next'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'DateTypeSelect',
  components: {
    BnSelect,
    BnOption
  },
  props: {
    params: {
      type: Object as PropType<Record<string, any>>,
      required: true
    }
  },
  emits: ['update:params'],
  setup(props, { emit }) {
    const timeOption = [
      { label: '本日', value: 1 },
      { label: '本周', value: 2 },
      { label: '本月', value: 3 }
    ]

    const state = reactive<{
      dateType: number
    }>({
      dateType: 1
    })

    function dateChange(val: number) {
      emit('update:params', {
        ...props.params,
        dateType: val
      })
    }

    dateChange(state.dateType)

    return {
      state,
      timeOption,
      dateChange
    }
  }
})
</script>
