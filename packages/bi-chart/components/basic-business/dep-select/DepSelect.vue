<template>
  <el-select
    style="width: 124px;"
    v-model="state.cdId"
    :teleported="false"
    placeholder="选择部门"
    size="small"
    @change="depChange"
  >
    <el-option
      v-for="item of state.depListData"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    />
  </el-select>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { ElOption, ElSelect } from 'element-plus'
import { DepInfo, getDepartmentList } from '../../../_plugins/axios-http/apis'

export default defineComponent({
  name: 'DepSelect',
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
  emits: ['update:params', 'change'],
  setup(props, { emit }) {
    const state = reactive<{
      depListData: DepInfo[]
      cdId: number | string
    }>({
      depListData: [],
      cdId: ''
    })

    getDepartmentList().then(res => {
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
      depChange(state.cdId as number)
    })

    function depChange(val: number) {
      emit('update:params', {
        ...props.params,
        cdId: val,
        depName: state.depListData.find(item => item.id === val).name
      })
    }

    return {
      state,
      depChange
    }
  }
})
</script>
