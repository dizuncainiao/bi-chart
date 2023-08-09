<template>
  <bn-select
    style="width: 95px;"
    v-model="state.date"
    placeholder="选择时间"
    size="small"
    @change="dateChange"
  >
    <bn-option label="昨日" value="1" />
    <bn-option label="近7天" value="2" />
    <bn-option label="本周" value="3" />
    <bn-option label="近30天" value="4" />
    <bn-option label="本月" value="5" />
  </bn-select>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Select as BnSelect, Option as BnOption } from 'blocks-next'
import { optionDate, today, yesterday } from '../hooks/date'
import type { PropType } from 'vue'
import type { OptionDataKeys } from '../hooks/date'

export default defineComponent({
  name: 'DateSelect',
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
    const state = reactive<{
      date: OptionDataKeys
      startDate: string
      endDate: string
    }>({
      date: '1',
      startDate: yesterday,
      endDate: today
    })

    function dateChange(val: OptionDataKeys) {
      state.startDate = optionDate[val]
      emit('update:params', {
        ...props.params,
        startDate: state.startDate,
        endDate: state.endDate
      })
    }

    dateChange(state.date)

    return {
      state,
      dateChange
    }
  }
})
</script>
