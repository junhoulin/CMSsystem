<template>
  <div class="articles-container">
    <n-card title="文章管理" class="mb-4">
      <template #header-extra>
        <n-button type="primary" @click="handleAdd">
          <template #icon>
            <n-icon><Add /></n-icon>
          </template>
          新增文章
        </n-button>
      </template>

      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
        :bordered="false"
      />
    </n-card>

    <!-- 新增文章 Modal -->
    <n-modal
      v-model:show="showModal"
      preset="card"
      style="width: 90vw; height: 90vh"
      title="新增文章"
      :bordered="false"
      size="huge"
    >
      <n-form
        ref="formRef"
        :model="formValue"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="標題" path="title">
          <n-input v-model:value="formValue.title" placeholder="請輸入文章標題" />
        </n-form-item>
        <n-form-item label="發布狀態" path="isPublished">
          <n-switch v-model:value="formValue.isPublished" />
        </n-form-item>
      </n-form>
      <article-editor />
      <template #footer>
        <n-space justify="end">
          <n-button @click="showModal = false">取消</n-button>
          <n-button type="primary" @click="handleSave">保存</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<script setup>
import { h, ref } from 'vue'
import {
  NCard,
  NButton,
  NDataTable,
  NIcon,
  NSpace,
  NPopconfirm,
  NModal,
  NForm,
  NFormItem,
  NInput,
  NSwitch
} from 'naive-ui'
import { Add, Create, Trash } from '@vicons/ionicons5'
import ArticleEditor from '@/components/ArticleEditor.vue'

// 控制 Modal 顯示
const showModal = ref(false)

// 表單數據
const formValue = ref({
  title: '',
  isPublished: false
})

// 表單驗證規則
const rules = {
  title: {
    required: true,
    message: '請輸入文章標題',
    trigger: ['blur', 'input']
  }
}

// 表格列定義
const columns = [
  {
    title: '標題',
    key: 'title'
  },
  {
    title: '作者',
    key: 'author'
  },
  {
    title: '發布時間',
    key: 'publishTime'
  },
  {
    title: '狀態',
    key: 'status'
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
    title: '示例文章1',
    author: '管理員',
    publishTime: '2024-03-26 10:00:00',
    status: '已發布'
  },
  {
    id: 2,
    title: '示例文章2',
    author: '管理員',
    publishTime: '2024-03-26 11:00:00',
    status: '草稿'
  },
  {
    id: 3,
    title: '示例文章3',
    author: '管理員',
    publishTime: '2024-03-26 12:00:00',
    status: '已發布'
  },
  {
    id: 4,
    title: '示例文章4',
    author: '管理員',
    publishTime: '2024-03-26 13:00:00',
    status: '草稿'
  },
  {
    id: 5,
    title: '示例文章5',
    author: '管理員',
    publishTime: '2024-03-26 14:00:00',
    status: '已發布'
  },
  {
    id: 6,
    title: '示例文章6',
    author: '管理員',
    publishTime: '2024-03-26 15:00:00',
    status: '草稿'
  },
  {
    id: 7,
    title: '示例文章7',
    author: '管理員',
    publishTime: '2024-03-26 16:00:00',
    status: '已發布'
  }
])

// 分頁配置
const pagination = {
  pageSize: 10
}

// 處理函數
const handleAdd = () => {
  // 重置表單
  formValue.value = {
    title: '',
    isPublished: false
  }
  showModal.value = true
}

const handleSave = () => {
  // 獲取編輯器內容
  const content = document.querySelector('#editor .ql-editor').innerHTML

  // 組合所有文章數據
  const articleData = {
    title: formValue.value.title,
    isPublished: formValue.value.isPublished,
    content: content
  }

  // 顯示數據
  console.log('文章數據:', articleData)

  showModal.value = false
}

const handleEdit = row => {
  console.log('編輯文章', row)
}

const handleDelete = row => {
  console.log('刪除文章', row)
}
</script>

<style lang="scss" scoped>
.articles-container {
  .mb-4 {
    margin-bottom: 16px;
  }
}
</style>
