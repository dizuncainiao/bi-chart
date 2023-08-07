<script setup lang="ts">
import { BcLayout } from 'bdsaas-bc'
import { ref } from 'vue'
import { menuData } from '@/utils/menu.ts'

defineOptions({
  name: 'App'
})
const options = ref({
  menuData,
  showMenu: true
})
</script>

<template>
  <BcLayout :options="options as any">
    <router-view />
  </BcLayout>
</template>
