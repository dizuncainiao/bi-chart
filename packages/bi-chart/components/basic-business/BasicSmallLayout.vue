<template>
  <div class="special-small-chart">
    <div class="l-box">
      <h3>
        <slot name="title">{{ $props.title }}</slot>
      </h3>
      <div class="action-or-info">
        <div class="info">
          <slot name="info">{{ today }} | {{ $props.type }}</slot>
        </div>
      </div>
    </div>
    <div class="r-box">
      <div class="value">
        <slot name="value">{{ $props.value }}</slot>
        <span class="unit">
          <slot name="unit">{{ $props.unit }}</slot></span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { today } from './hooks/date'

export default defineComponent({
  name: 'BasicSmallLayout',
  props: {
    // 单位
    unit: {
      type: String as PropType<string>
    },
    // 数值
    value: {
      type: String as PropType<string>
    },
    // 标题
    title: {
      type: String as PropType<string>
    },
    // 图表类型，例如：我的、部门……
    type: {
      type: String as PropType<string>
    }
  },
  setup() {
    const state = reactive({
      title: '活跃坐席数',
      hasRecharge: false,
      infoValue: '2022-02-01',
      infoType: '团队',
      unit: '人',
      value: 1
    })

    return {
      state,
      today
    }
  }
})
</script>

<style scoped lang="less">
.special-small-chart {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  height: 100px;
  padding: 29px 28px;
  text-align: left;
  background: #fff;
  border-radius: 12px;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .l-box {
    h3 {
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
      color: #242934;
    }

    .action-or-info {
      display: flex;
      gap: 8px;
      align-items: center;

      .info {
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        color: #9ca6b9;
      }
    }
  }

  .r-box {
    .value {
      font-size: 36px;
      font-weight: 500;
      line-height: 36px;
      color: #242934;

      .unit {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: #9ca6b9;
      }
    }
  }
}
</style>
