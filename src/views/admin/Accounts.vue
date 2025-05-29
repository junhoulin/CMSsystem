<template>
  <div class="accounts-container">
    <n-card title="帳號管理" class="mb-4">
      <template #header-extra>
        <n-button type="primary" @click="handleAdd">
          <template #icon>
            <n-icon><Add /></n-icon>
          </template>
          新增帳號
        </n-button>
      </template>

      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
        :bordered="false"
      />
    </n-card>
  </div>
</template>

<script setup>
import { h, ref } from 'vue'
import { NCard, NButton, NDataTable, NIcon, NSpace, NPopconfirm, NTag } from 'naive-ui'
import { Add, Create, Trash } from '@vicons/ionicons5'

// 表格列定義
const columns = [
  {
    title: '帳號',
    key: 'username'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '角色',
    key: 'roles',
    render(row) {
      return h(
        NSpace,
        { size: 'small' },
        {
          default: () =>
            row.roles.map(role =>
              h(
                NTag,
                {
                  type: 'success',
                  size: 'small'
                },
                { default: () => role }
              )
            )
        }
      )
    }
  },
  {
    title: '狀態',
    key: 'status',
    render(row) {
      return h(
        NTag,
        {
          type: row.status === 'active' ? 'success' : 'error',
          size: 'small'
        },
        { default: () => (row.status === 'active' ? '啟用' : '停用') }
      )
    }
  },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      return h(
        NSpace,
        {},
        {
          default: () => [
            h(
              NButton,
              {
                size: 'small',
                type: 'primary',
                onClick: () => handleEdit(row)
              },
              {
                default: () => '編輯',
                icon: () => h(NIcon, null, { default: () => h(Create) })
              }
            ),
            h(
              NPopconfirm,
              {
                onPositiveClick: () => handleDelete(row)
              },
              {
                default: () => '確認刪除？',
                trigger: () =>
                  h(
                    NButton,
                    {
                      size: 'small',
                      type: 'error'
                    },
                    {
                      default: () => '刪除',
                      icon: () => h(NIcon, null, { default: () => h(Trash) })
                    }
                  )
              }
            )
          ]
        }
      )
    }
  }
]

// 模擬數據
const tableData = ref([
  {
    id: 1,
    username: '23735',
    name: '陳怡君',
    roles: ['系統管理員', '文章管理員', '輪播圖管理員', '資訊管理員'],
    status: 'active'
  },
  {
    id: 2,
    username: '15362',
    name: '陳怡君',
    roles: ['文章管理員', '輪播圖管理員'],
    status: 'active'
  }
])

// 分頁配置
const pagination = {
  pageSize: 10
}

// 處理函數
const handleAdd = () => {
  console.log('新增帳號')
}

const handleEdit = row => {
  console.log('編輯帳號', row)
}

const handleDelete = row => {
  console.log('刪除帳號', row)
}
</script>

<style lang="scss" scoped>
.accounts-container {
  .mb-4 {
    margin-bottom: 16px;
  }
}
</style>
