<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="0"
    :width="240"
    :collapsed="layoutStore.collapsed"
    show-trigger
    @collapse="layoutStore.toggleCollapsed"
    @expand="layoutStore.toggleCollapsed"
  >
    <div class="logo-container">
      <div class="logo" v-if="!layoutStore.collapsed">數智入口</div>
      <div class="logo-small" v-else>數智</div>
    </div>
    <div class="menu-container">
      <n-menu
        :collapsed="layoutStore.collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :value="activeKey"
        @update:value="handleMenuUpdate"
        :render-label="renderMenuLabel"
      />
    </div>
  </n-layout-sider>
</template>

<script setup>
import { ref, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NLayoutSider, NMenu, NIcon } from 'naive-ui'
import { useLayoutStore } from '../stores/layout'
import { Home, Newspaper, Apps, ShieldCheckmark, DocumentText, Key } from '@vicons/ionicons5'

const router = useRouter()
const route = useRoute()
const layoutStore = useLayoutStore()
const activeKey = ref(route.path)

// 渲染圖標的函數
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// 菜單配置
const menuOptions = [
  {
    label: '首頁',
    key: '/',
    path: '/',
    icon: renderIcon(Home)
  },
  {
    label: '資訊入口',
    key: '/Information',
    path: '/Information',
    icon: renderIcon(Newspaper)
  },
  {
    label: '功能應用',
    key: '/application',
    path: '/application',
    icon: renderIcon(Apps)
  },
  {
    label: '管理員',
    key: 'admin',
    icon: renderIcon(ShieldCheckmark),
    children: [
      {
        label: '文章管理',
        key: '/admin/articles',
        path: '/admin/articles',
        icon: renderIcon(DocumentText)
      },
      {
        label: '權限管理',
        key: '/admin/permissions',
        path: '/admin/permissions',
        icon: renderIcon(Key)
      }
    ]
  }
]

// 處理菜單點擊
const handleMenuUpdate = key => {
  const findRoute = items => {
    for (const item of items) {
      if (item.key === key) {
        return item
      }
      if (item.children) {
        const found = findRoute(item.children)
        if (found) return found
      }
    }
    return null
  }

  const route = findRoute(menuOptions)
  if (route && route.path) {
    router.push(route.path)
    activeKey.value = key
  }
}

// 自定義菜單標籤渲染
const renderMenuLabel = option => {
  return h(
    'div',
    {
      style: {
        color:
          activeKey.value === option.key
            ? 'var(--n-menu-item-color-active)'
            : 'var(--n-menu-item-color)'
      }
    },
    option.label
  )
}
</script>

<style scoped>
.logo-container {
  height: 64px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--n-border-color);
}

.menu-container {
  padding-top: 10px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: var(--n-text-color);
}

.logo-small {
  font-size: 16px;
  font-weight: bold;
  color: var(--n-text-color);
}
</style>
