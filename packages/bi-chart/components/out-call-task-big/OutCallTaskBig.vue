<template>
  <BasicBusinessLayout />
</template>

<script lang="ts">
// 呼叫任务统计
import { defineComponent } from 'vue'
import BasicBusinessLayout from '../basic-business-layout/BasicBusinessLayout.vue'

export default defineComponent({
  name: 'OutCallTaskBig',
  components: { BasicBusinessLayout }
})
</script>
