<script setup lang="ts">
import { useDarkMode } from 'vue-hooks-plus';
import { theme } from 'ant-design-vue';

const [darkMode] = useDarkMode();
</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }"
  >
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped></style>
