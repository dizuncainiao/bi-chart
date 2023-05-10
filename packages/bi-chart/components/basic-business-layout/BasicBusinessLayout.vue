<template>
  <div class="bi-chart-layout">
    <div class="bi-chart-header"></div>
    <div class="bi-chart-content">
      <BasicPie />
      <!--      <component is="BasicPie" :options="options"/>-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicPie from '../basic-chart/pie/BasicPie.vue'

export default defineComponent({
  name: 'BasicBusinessLayout',
  components: { BasicPie }
})
</script>

<style lang="less">
.bi-chart-layout {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 28px;

  .bi-chart-header {
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 20px;
  }

  .bi-chart-content {
    height: calc(100% - 60px);
  }
}
</style>
