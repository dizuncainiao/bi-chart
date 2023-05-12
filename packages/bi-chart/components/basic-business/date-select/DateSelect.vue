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
import { OptionDataKeys, optionDate } from './index'
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
      date: string
      startTime: string
      endTime: string
    }>({
      date: '1',
      startTime: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      endTime: dayjs().format('YYYY-MM-DD')
    })

    function dateChange(val: OptionDataKeys) {
      state.startTime = optionDate[val]
      emit('update:params', {
        ...props.params,
        startTime: state.startTime,
        endTime: state.endTime
      })
    }

    return {
      state,
      dateChange
    }
  }
})
</script>
