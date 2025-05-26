<template>
  <div class="permissions-container">
    <n-card title="權限管理" class="mb-4">
      <template #header-extra>
        <n-button type="primary" @click="handleAdd">
          <template #icon>
            <n-icon><Add /></n-icon>
          </template>
          新增權限
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
    title: '角色名稱',
    key: 'roleName'
  },
  {
    title: '描述',
    key: 'description'
  },
  {
    title: '權限',
    key: 'permissions',
    render(row) {
      return h(
        NSpace,
        {},
        {
          default: () =>
            row.permissions.map(permission =>
              h(
                NTag,
                {
                  type: 'success',
                  size: 'small'
                },
                { default: () => permission }
              )
            )
        }
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
    roleName: '管理員',
    description: '系統管理員，擁有所有權限',
    permissions: ['文章管理', '權限管理', '用戶管理']
  },
  {
    id: 2,
    roleName: '編輯',
    description: '內容編輯，可以管理文章',
    permissions: ['文章管理']
  }
])

// 分頁配置
const pagination = {
  pageSize: 10
}

// 處理函數
const handleAdd = () => {
  console.log('新增權限')
}

const handleEdit = row => {
  console.log('編輯權限', row)
}

const handleDelete = row => {
  console.log('刪除權限', row)
}
</script>

<style lang="scss" scoped>
.permissions-container {
  .mb-4 {
    margin-bottom: 16px;
  }
}
</style>
