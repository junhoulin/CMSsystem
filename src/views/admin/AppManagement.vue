<template>
  <div class="app-management">
    <n-card title="應用程式管理" class="management-card">
      <!-- 頂部操作欄 -->
      <div class="action-bar">
        <n-space>
          <n-button type="primary" @click="showAddModal = true">
            <template #icon>
              <n-icon><Add /></n-icon>
            </template>
            新增應用
          </n-button>
          <n-input-group>
            <n-input v-model:value="searchQuery" placeholder="搜尋應用程式..." />
            <n-button type="primary" ghost>
              <template #icon>
                <n-icon><Search /></n-icon>
              </template>
            </n-button>
          </n-input-group>
        </n-space>
      </div>

      <!-- 應用程式列表 -->
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
        :bordered="false"
        :single-line="false"
      />
    </n-card>

    <!-- 新增/編輯應用程式對話框 -->
    <n-modal
      v-model:show="showAddModal"
      :title="isEdit ? '編輯應用程式' : '新增應用程式'"
      preset="card"
      style="width: 600px"
    >
      <n-form
        ref="formRef"
        :model="formValue"
        :rules="rules"
        label-placement="left"
        label-width="100"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="應用名稱" path="name">
          <n-input v-model:value="formValue.name" placeholder="請輸入應用名稱" />
        </n-form-item>
        <n-form-item label="應用類型" path="type">
          <n-select
            v-model:value="formValue.type"
            :options="appTypeOptions"
            placeholder="請選擇應用類型"
          />
        </n-form-item>
        <n-form-item label="應用圖標" path="icon">
          <n-upload accept="image/*" :show-file-list="false" @change="handleIconChange">
            <n-button>上傳圖標</n-button>
          </n-upload>
        </n-form-item>
        <n-form-item label="應用描述" path="description">
          <n-input
            v-model:value="formValue.description"
            type="textarea"
            placeholder="請輸入應用描述"
          />
        </n-form-item>
        <n-form-item label="應用狀態" path="status">
          <n-switch v-model:value="formValue.status" />
        </n-form-item>
        <n-form-item label="排序" path="sort">
          <n-input-number v-model:value="formValue.sort" :min="0" />
        </n-form-item>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button @click="showAddModal = false">取消</n-button>
          <n-button type="primary" @click="handleSubmit">確定</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<script setup>
import { h, ref } from 'vue'
import {
  NCard,
  NSpace,
  NButton,
  NInput,
  NInputGroup,
  NDataTable,
  NModal,
  NForm,
  NFormItem,
  NSelect,
  NUpload,
  NSwitch,
  NInputNumber,
  NIcon,
  useMessage
} from 'naive-ui'
import { Add, Search, Pencil, TrashBin } from '@vicons/ionicons5'

const message = useMessage()
const formRef = ref(null)
const showAddModal = ref(false)
const isEdit = ref(false)
const searchQuery = ref('')

// 表單數據
const formValue = ref({
  name: '',
  type: null,
  icon: '',
  description: '',
  status: true,
  sort: 0
})

// 應用類型選項
const appTypeOptions = [
  { label: '系統應用', value: 'system' },
  { label: '自定義應用', value: 'custom' }
]

// 表單驗證規則
const rules = {
  name: {
    required: true,
    message: '請輸入應用名稱',
    trigger: 'blur'
  },
  type: {
    required: true,
    message: '請選擇應用類型',
    trigger: 'change'
  },
  description: {
    required: true,
    message: '請輸入應用描述',
    trigger: 'blur'
  }
}

// 表格列定義
const columns = [
  {
    title: '應用名稱',
    key: 'name'
  },
  {
    title: '應用類型',
    key: 'type',
    render(row) {
      return h('span', {}, row.type === 'system' ? '系統應用' : '自定義應用')
    }
  },
  {
    title: '狀態',
    key: 'status',
    render(row) {
      return h(
        'n-tag',
        {
          type: row.status ? 'success' : 'error'
        },
        {
          default: () => (row.status ? '已上架' : '已下架')
        }
      )
    }
  },
  {
    title: '排序',
    key: 'sort'
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
                onClick: () => handleEdit(row)
              },
              { default: () => '編輯' }
            ),
            h(
              NButton,
              {
                size: 'small',
                type: 'error',
                onClick: () => handleDelete(row)
              },
              { default: () => '刪除' }
            )
          ]
        }
      )
    }
  }
]

// 模擬表格數據
const tableData = ref([
  {
    id: 1,
    name: '數智入口',
    type: 'system',
    status: true,
    sort: 1
  },
  {
    id: 2,
    name: '數智文章',
    type: 'system',
    status: true,
    sort: 2
  }
])

// 分頁配置
const pagination = {
  pageSize: 10
}

// 處理圖標上傳
const handleIconChange = ({ file }) => {
  if (file) {
    // 這裡可以添加上傳邏輯
    message.success('圖標上傳成功')
  }
}

// 處理編輯
const handleEdit = row => {
  isEdit.value = true
  formValue.value = { ...row }
  showAddModal.value = true
}

// 處理刪除
const handleDelete = row => {
  // 這裡可以添加刪除邏輯
  message.success('刪除成功')
}

// 處理提交
const handleSubmit = () => {
  formRef.value?.validate(errors => {
    if (!errors) {
      // 這裡可以添加保存邏輯
      message.success(isEdit.value ? '更新成功' : '新增成功')
      showAddModal.value = false
    }
  })
}
</script>

<style lang="scss" scoped>

.management-card {
  margin-bottom: 24px;
}

.action-bar {
  margin-bottom: 24px;
}

:deep(.n-data-table) {
  .n-data-table-td {
    padding: 16px;
  }
}

@media (max-width: 768px) {
  .app-management {
    padding: 16px;
  }

  .action-bar {
    margin-bottom: 16px;
  }
}
</style>
