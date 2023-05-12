<template>
  <BasicBusinessLayout
    title="外呼次数排行榜"
    chart-type="basicBar"
    url="/bdcloud-call-analytic/call/callPhoneReport/callTimesRankStatistics"
    :params="params"
  >
    <template #info>{{ params }}</template>
    <template #form>
      <DepSelect v-model:params="params" />

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
  </BasicBusinessLayout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import BasicBusinessLayout from '../../basic-business/BasicBusinessLayout.vue'
import { DepInfo, getDepartmentList } from '../../../_plugins/axios-http/apis'
import { OptionDataKeys } from '../../basic-business/hooks'
import { ElOption, ElSelect } from 'element-plus'
import DepSelect from '../../basic-business/dep-select/DepSelect.vue'

export default defineComponent({
  name: 'OutCallNumRankBig',
  components: {
    DepSelect,
    BasicBusinessLayout,
    ElSelect,
    ElOption
  },
  setup() {
    const state = reactive<{
      date: string
      depListData: DepInfo[]
      cdId: number | string
    }>({
      date: '1',
      depListData: [],
      cdId: ''
    })

    const params = ref({
      cdId: '',
      companyId: '6509',
      endTime: '2023-05-12',
      pageNo: 1,
      pageSize: 10,
      profileId: '67098',
      startTime: '2023-05-11'
    })

    function dateChange(val: OptionDataKeys) {}

    function depChange(val: number) {}

    getDepartmentList({}).then(res => {
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
    })

    return {
      params,
      state,
      dateChange,
      depChange
    }
  }
})
</script>
