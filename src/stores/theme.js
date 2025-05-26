import { defineStore } from 'pinia'
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(null)

  function toggleTheme() {
    theme.value = theme.value === null ? darkTheme : null
  }

  return {
    theme,
    toggleTheme
  }
})
