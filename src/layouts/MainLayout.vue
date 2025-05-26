<template>
  <n-layout class="layout" has-sider>
    <Sider />
    <n-layout>
      <Header />
      <n-layout-content class="content" :class="{ 'dark-theme': isDarkTheme }">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { NLayout, NLayoutContent } from 'naive-ui'
import Header from '../components/Header.vue'
import Sider from '../components/Sider.vue'
import { useThemeStore } from '../stores/theme'
import { computed } from 'vue'

const themeStore = useThemeStore()
const isDarkTheme = computed(() => themeStore.theme !== null)
</script>

<style scoped>
.layout {
  height: 100vh;
}

.content {
  padding: 24px;
  height: calc(100vh - 64px);
  overflow: auto;
  background-color: rgb(245 246 251);
}

.content.dark-theme {
  background-color: var(--n-color);
}
</style>
