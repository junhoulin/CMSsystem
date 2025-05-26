import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const collapsed = ref(false)

  function toggleCollapsed() {
    collapsed.value = !collapsed.value
  }

  return {
    collapsed,
    toggleCollapsed
  }
}) 