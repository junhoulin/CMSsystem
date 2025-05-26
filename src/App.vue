<script setup>
import { NConfigProvider, NLoadingBarProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <n-config-provider :theme="themeStore.theme">
    <n-loading-bar-provider>
      <router-view></router-view>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style>
.app-container {
  height: 100vh;
  overflow: hidden;
}
</style>
