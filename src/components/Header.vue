<template>
  <n-layout-header class="header" bordered>
    <div class="header-content">
      <n-space>
        <!-- 側邊欄選單按鈕 -->
        <n-button round quaternary :focusable="false" @click="layoutStore.toggleCollapsed">
          <template #icon>
            <n-icon size="20">
              <MenuFoldOutlined v-if="!layoutStore.collapsed" />
              <MenuUnfoldOutlined v-else />
            </n-icon>
          </template>
        </n-button>
      </n-space>
      <!-- 右側功能按鈕 -->
      <div class="header-right">
        <n-space align="center" :size="spaceSize">
          <!-- 主題按鈕 - 只在非手機版顯示 -->
          <n-button
            v-if="width > 480"
            round
            quaternary
            :focusable="false"
            @click="themeStore.toggleTheme"
          >
            <template #icon>
              <n-icon size="20">
                <Sunny v-if="themeStore.theme === null" />
                <Moon v-else />
              </n-icon>
            </template>
          </n-button>
          <!-- 通知按鈕 - 只在非手機版顯示 -->
          <n-badge
            v-if="width > 480"
            :value="notificationCount"
            :max="99"
            :show-zero="false"
            :offset="[-4, 1]"
          >
            <n-button round quaternary :focusable="false" @click="handleNotificationClick">
              <template #icon>
                <n-icon size="20">
                  <Notifications />
                </n-icon>
              </template>
            </n-button>
          </n-badge>
          <!-- 使用者資訊下拉選單 -->
          <n-dropdown
            :options="userOptions"
            @select="handleUserSelect"
            trigger="hover"
            :style="{ width: '120px' }"
          >
            <n-space align="center" class="user-info">
              <n-avatar
                round
                size="small"
                class="user-image"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              />
              <div class="user-text">
                <div class="name">林晉豪</div>
                <div class="role">[超級管理員]</div>
              </div>
              <n-icon size="14">
                <ChevronDown />
              </n-icon>
            </n-space>
          </n-dropdown>
        </n-space>
      </div>
    </div>
  </n-layout-header>
</template>

<script setup>
import {
  NLayoutHeader,
  NSpace,
  NButton,
  NIcon,
  NDropdown,
  NAvatar,
  NBadge,
  useMessage
} from 'naive-ui'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
import {
  Sunny,
  Moon,
  ChevronDown,
  Notifications,
  PersonCircle,
  Settings,
  LogOut
} from '@vicons/ionicons5'
import { useThemeStore } from '../stores/theme'
import { useLayoutStore } from '../stores/layout'
import { useRouter } from 'vue-router'
import { ref, h, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const router = useRouter()
const themeStore = useThemeStore()
const layoutStore = useLayoutStore()
const notificationCount = ref(1)

// 使用 useWindowSize 監測視窗大小
const { width } = useWindowSize()

const message = useMessage()

// 根據視窗寬度計算間距
const spaceSize = computed(() => {
  return width.value <= 480 ? 2 : 12
})

// 根據螢幕寬度生成選單選項
const userOptions = computed(() => {
  const baseOptions = [
    {
      label: '個人資料',
      key: 'profile',
      icon: renderIcon(PersonCircle)
    },
    {
      label: '設定',
      key: 'settings',
      icon: renderIcon(Settings)
    }
  ]

  // 在手機版添加主題切換和通知選項
  if (width.value <= 480) {
    baseOptions.unshift(
      {
        label: themeStore.theme === null ? '深色模式' : '淺色模式',
        key: 'theme',
        icon: renderIcon(themeStore.theme === null ? Moon : Sunny)
      },
      {
        label: '通知',
        key: 'notifications',
        icon: renderIcon(Notifications),
        badge: notificationCount.value
      }
    )
  }

  baseOptions.push(
    {
      type: 'divider',
      key: 'd1'
    },
    {
      label: '登出',
      key: 'logout',
      icon: renderIcon(LogOut)
    }
  )

  return baseOptions
})

// 渲染圖標的函數
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const handleUserSelect = key => {
  switch (key) {
    case 'profile':
      break
    case 'settings':
      break
    case 'theme':
      themeStore.toggleTheme()
      break
    case 'notifications':
      handleNotificationClick()
      break
    case 'logout':
      logout()
      break
  }
}

const logout = () => {
  localStorage.removeItem('token')
  message.success('已成功登出')
}

const handleNotificationClick = () => {
  // 處理通知點擊事件
  notificationCount.value += 1
}
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:deep(.n-button) {
  width: 30px;
  height: 30px;
}

.user-info {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--n-color-hover);
  }

  .username {
    width: 80px;
    font-size: 14px;
    color: var(--n-text-color);
  }

  .user-image {
    margin-top: 4px;
    @media (max-width: 480px) {
      display: none; // 在手機版隱藏文字
    }
  }

  @media (max-width: 768px) {
    padding: 2px 4px;
  }
}

.user-text {
  text-align: center;

  .name {
    font-size: 14px;
    font-weight: 500;
    color: var(--n-text-color);
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .role {
    font-size: 12px;
    color: #919293;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
}

:deep(.n-badge-sup) {
  transform: scale(0.8);
  min-width: 16px;
  height: 16px;
  padding: 2 4px;
  font-size: 10px;
  line-height: 16px;
}

// 新增手機版面的樣式
@media (max-width: 480px) {
  .user-info {
    .user-text {
      display: none;
    }
  }

  :deep(.n-dropdown-menu) {
    .n-dropdown-option {
      .n-dropdown-option-body {
        .n-dropdown-option-body__icon {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
