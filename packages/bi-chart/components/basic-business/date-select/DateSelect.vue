<template>
  <el-select
    style="width: 80px;"
    v-model="state.date"
    :teleported="false"
    placeholder="选择时间"
    size="small"
    @change="dateChange"
  >
    <el-option label="昨日" value="1" />
    <el-option label="近7天" value="2" />
    <el-option label="本周" value="3" />
    <el-option label="近30天" value="4" />
    <el-option label="本月" value="5" />
  </el-select>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { OptionDataKeys, optionDate, today, yesterday } from '../hooks/date'
import dayjs from 'dayjs'
import { ElOption, ElSelect } from 'element-plus'

export default defineComponent({
  name: 'DateSelect',
  components: {
    ElOption,
    ElSelect
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
