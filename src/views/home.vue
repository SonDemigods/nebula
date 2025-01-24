<script setup lang="ts">
// 导入组件

// 导入vue功能
import { ref } from 'vue'

// 导入类型
import type { Ref } from 'vue'

// 默认左面板比例
const split = ref(0.7)
// 左侧面板最小值
const min = ref('820px')
// 右侧面板最小值
const max = ref('350px')


</script>
<template>
  <div class="split">
    <!-- <Split v-model="split" :min="min" :max="max">
      <template #left>
        <div class="split-pane">
          <preview :config="configData" />
        </div>
      </template>
      <template #right>
        <div class="split-pane">
          <attribute @on-change="changeConfigData" />
        </div>
      </template>
    </Split> -->
    111
  </div>
</template>
<style scoped>

</style>
