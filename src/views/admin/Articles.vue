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
      :style="{
        width: '90vw',
        height: isMobile ? '1050px' : '860px'
      }"
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
        <n-form-item label="分類" path="channel">
          <n-space>
            <n-select
              v-model:value="formValue.channel"
              :options="channelOptions"
              placeholder="請選擇頻道"
              @update:value="handleChannelChange"
              style="width: 200px"
            />
            <n-select
              v-model:value="formValue.category"
              :options="categoryOptions"
              placeholder="請選擇分類"
              :disabled="!formValue.channel"
              @update:value="handleCategoryChange"
              style="width: 200px"
            />
            <n-select
              v-model:value="formValue.subcategory"
              :options="subcategoryOptions"
              placeholder="請選擇子分類"
              :disabled="!formValue.category"
              style="width: 200px"
            />
          </n-space>
        </n-form-item>
        <n-form-item label="發布時間" path="publishTime">
          <n-date-picker
            v-model:value="formValue.publishTime"
            type="date"
            clearable
            placeholder="請選擇發布日期"
            style="width: 200px"
            :default-value="Date.now()"
            @update:value="handleDateChange"
          />
        </n-form-item>
        <n-form-item label="發布狀態" path="isPublished">
          <n-switch v-model:value="formValue.isPublished" />
        </n-form-item>
      </n-form>
      <div style="height: 400px">
        <article-editor />
      </div>
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
import { h, ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
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
  NSwitch,
  NSelect,
  NDatePicker,
  NTag
} from 'naive-ui'
import { Add, Create, Trash } from '@vicons/ionicons5'
import ArticleEditor from '@/components/ArticleEditor.vue'

// 控制 Modal 顯示
const showModal = ref(false)

// 分類數據結構
const categoryData = {
  'strategy-analysis': {
    label: '策略解析',
    categories: [
      {
        label: '數位轉型',
        value: 'digital-transformation',
        subcategories: [
          { label: '轉型策略', value: 'transformation-strategy' },
          { label: '轉型案例', value: 'transformation-case' },
          { label: '轉型工具', value: 'transformation-tools' }
        ]
      },
      {
        label: '創新策略',
        value: 'innovation-strategy',
        subcategories: [
          { label: '創新方法', value: 'innovation-methods' },
          { label: '創新案例', value: 'innovation-case' },
          { label: '創新工具', value: 'innovation-tools' }
        ]
      },
      {
        label: '市場分析',
        value: 'market-analysis',
        subcategories: [
          { label: '市場趨勢', value: 'market-trends' },
          { label: '競爭分析', value: 'competition-analysis' },
          { label: '用戶洞察', value: 'user-insights' }
        ]
      }
    ]
  },
  'digital-native': {
    label: '數智原生',
    categories: [
      {
        label: '數位原生企業',
        value: 'digital-native-enterprise',
        subcategories: [
          { label: '企業案例', value: 'enterprise-case' },
          { label: '企業策略', value: 'enterprise-strategy' },
          { label: '企業工具', value: 'enterprise-tools' }
        ]
      },
      {
        label: '數位原生產品',
        value: 'digital-native-product',
        subcategories: [
          { label: '產品案例', value: 'product-case' },
          { label: '產品策略', value: 'product-strategy' },
          { label: '產品工具', value: 'product-tools' }
        ]
      }
    ]
  }
}

// 頻道選項
const channelOptions = [
  { label: '策略解析', value: 'strategy-analysis' },
  { label: '數智原生', value: 'digital-native' },
  { label: '數智場景', value: 'digital-scenario' },
  { label: '成功典範', value: 'success-story' },
  { label: '最牛評比', value: 'best-rating' },
  { label: '策略勳章', value: 'strategy-badge' },
  { label: '行業案例', value: 'industry-case' }
]

// 表單數據
const formValue = ref({
  title: '',
  channel: null,
  category: null,
  subcategory: null,
  publishTime: Date.now(),
  isPublished: false
})

// 表單驗證規則
const rules = {
  title: {
    required: true,
    message: '請輸入文章標題',
    trigger: ['blur', 'input']
  },
  channel: {
    required: true,
    message: '請選擇頻道',
    trigger: ['blur', 'change']
  },
  category: {
    required: true,
    message: '請選擇分類',
    trigger: ['blur', 'change']
  },
  subcategory: {
    required: true,
    message: '請選擇子分類',
    trigger: ['blur', 'change']
  },
  publishTime: {
    required: true,
    message: '請選擇發布日期',
    trigger: ['blur', 'change'],
    validator: (rule, value) => {
      return value !== null && value !== undefined
    }
  }
}

// 計算屬性：當前選擇的頻道對應的分類選項
const categoryOptions = computed(() => {
  if (!formValue.value.channel) return []
  return categoryData[formValue.value.channel]?.categories || []
})

// 計算屬性：當前選擇的分類對應的子分類選項
const subcategoryOptions = computed(() => {
  if (!formValue.value.channel || !formValue.value.category) return []
  const category = categoryData[formValue.value.channel]?.categories.find(
    c => c.value === formValue.value.category
  )
  return category?.subcategories || []
})

// 處理頻道變化
const handleChannelChange = () => {
  formValue.value.category = null
  formValue.value.subcategory = null
}

// 處理分類變化
const handleCategoryChange = () => {
  formValue.value.subcategory = null
}

// 處理日期變化
const handleDateChange = value => {
  formValue.value.publishTime = value
}

// 表格列定義
const columns = [
  {
    title: '標題',
    key: 'title'
  },
  {
    title: '頻道',
    key: 'channel',
    render(row) {
      const channel = channelOptions.find(c => c.value === row.channel)
      return channel ? channel.label : '-'
    }
  },
  {
    title: '分類',
    key: 'category',
    render(row) {
      if (!row.channel || !row.category) return '-'
      const channelData = categoryData[row.channel]
      if (!channelData) return '-'
      const category = channelData.categories.find(c => c.value === row.category)
      return category ? category.label : '-'
    }
  },
  {
    title: '子分類',
    key: 'subcategory',
    render(row) {
      if (!row.channel || !row.category || !row.subcategory) return '-'
      const channelData = categoryData[row.channel]
      if (!channelData) return '-'
      const category = channelData.categories.find(c => c.value === row.category)
      if (!category) return '-'
      const subcategory = category.subcategories.find(s => s.value === row.subcategory)
      return subcategory ? subcategory.label : '-'
    }
  },
  {
    title: '發布時間',
    key: 'publishTime',
    render(row) {
      return row.publishTime ? new Date(row.publishTime).toLocaleDateString() : '-'
    }
  },
  {
    title: '狀態',
    key: 'status',
    render(row) {
      return h(
        NTag,
        {
          type: row.isPublished ? 'success' : 'warning'
        },
        {
          default: () => (row.isPublished ? '已發布' : '未發布')
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
    title: '示例文章示例文章示例文章示例文章示例文章示例文章示例文章示例文章示例文章示例文章',
    channel: 'strategy-analysis',
    category: 'digital-transformation',
    subcategory: 'transformation-strategy',
    publishTime: Date.now(),
    isPublished: true
  },
  {
    id: 2,
    title: '示例文章scasccsacascasc2',
    channel: 'digital-native',
    category: 'digital-native-enterprise',
    subcategory: 'enterprise-case',
    publishTime: Date.now() - 86400000, // 前一天
    isPublished: false
  },
  {
    id: 3,
    title: '示例文章3',
    channel: 'strategy-analysis',
    category: 'innovation-strategy',
    subcategory: 'innovation-methods',
    publishTime: Date.now() - 172800000, // 前兩天
    isPublished: true
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
    channel: null,
    category: null,
    subcategory: null,
    publishTime: Date.now(),
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
    channel: formValue.value.channel,
    category: formValue.value.category,
    subcategory: formValue.value.subcategory,
    publishTime: new Date(formValue.value.publishTime).toLocaleDateString(),
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

// 使用 useWindowSize 監聽視窗大小
const { width } = useWindowSize()
const isMobile = computed(() => width.value <= 768)
</script>

<style lang="scss" scoped>
.articles-container {
  .mb-4 {
    margin-bottom: 12px;
  }
}
</style>
