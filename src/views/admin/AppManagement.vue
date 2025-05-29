<template>
  <div class="app-management">
    <n-card title="應用管理" class="management-card">
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
        <n-form-item label="應用角色" path="type">
          <n-select
            v-model:value="formValue.type"
            :options="appTypeOptions"
            placeholder="請選擇應用角色"
          />
        </n-form-item>
        <n-form-item label="應用圖標" path="icon">
          <n-grid :cols="10" :x-gap="8" :y-gap="8">
            <n-grid-item v-for="option in iconOptions" :key="option.value">
              <div
                class="icon-item"
                :class="{ active: formValue.iconName === option.value }"
                @click="selectIcon(option)"
              >
                <n-icon size="24">
                  <component :is="option.icon" />
                </n-icon>
              </div>
            </n-grid-item>
          </n-grid>
        </n-form-item>
        <n-form-item label="應用描述" path="description">
          <n-input
            v-model:value="formValue.description"
            type="textarea"
            placeholder="請輸入應用描述"
          />
        </n-form-item>
        <n-form-item label="應用URL" path="url">
          <n-input v-model:value="formValue.url" placeholder="請輸入應用URL" />
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
  NGrid,
  NGridItem,
  useMessage
} from 'naive-ui'
import {
  Add,
  Search,
  TimeOutline,
  PersonOutline,
  CarOutline,
  DocumentTextOutline,
  RocketOutline,
  GiftOutline,
  CalendarOutline,
  ClipboardOutline,
  PhonePortraitOutline,
  MailOutline,
  ChatbubbleOutline,
  CloudOutline,
  SettingsOutline,
  AppsOutline,
  HomeOutline,
  BookmarkOutline,
  StarOutline,
  ShareOutline,
  LinkOutline,
  ImageOutline
} from '@vicons/ionicons5'

const message = useMessage()
const formRef = ref(null)
const showAddModal = ref(false)
const isEdit = ref(false)
const searchQuery = ref('')

// 預設圖標列表
const iconOptions = [
  { value: 'TimeOutline', icon: TimeOutline },
  { value: 'PersonOutline', icon: PersonOutline },
  { value: 'CarOutline', icon: CarOutline },
  { value: 'DocumentTextOutline', icon: DocumentTextOutline },
  { value: 'RocketOutline', icon: RocketOutline },
  { value: 'GiftOutline', icon: GiftOutline },
  { value: 'CalendarOutline', icon: CalendarOutline },
  { value: 'ClipboardOutline', icon: ClipboardOutline },
  { value: 'PhonePortraitOutline', icon: PhonePortraitOutline },
  { value: 'MailOutline', icon: MailOutline },
  { value: 'ChatbubbleOutline', icon: ChatbubbleOutline },
  { value: 'CloudOutline', icon: CloudOutline },
  { value: 'SettingsOutline', icon: SettingsOutline },
  { value: 'AppsOutline', icon: AppsOutline },
  { value: 'HomeOutline', icon: HomeOutline },
  { value: 'BookmarkOutline', icon: BookmarkOutline },
  { value: 'StarOutline', icon: StarOutline },
  { value: 'ShareOutline', icon: ShareOutline },
  { value: 'LinkOutline', icon: LinkOutline },
  { value: 'ImageOutline', icon: ImageOutline }
]

// 應用角色選項
const appTypeOptions = [
  { label: '一般使用者', value: 'user' },
  { label: '管理員', value: 'admin' },
  { label: '系統管理員', value: 'system_admin' },
  { label: '訪客', value: 'guest' },
  { label: '開發者', value: 'developer' }
]

// 表單數據
const formValue = ref({
  name: '',
  type: null,
  icon: '',
  iconName: '',
  description: '',
  url: '',
  status: true,
  sort: 0
})

// 表單驗證規則
const rules = {
  name: {
    required: true,
    message: '請輸入應用名稱',
    trigger: 'blur'
  },
  type: {
    required: true,
    message: '請選擇應用角色',
    trigger: 'change'
  },
  description: {
    required: true,
    message: '請輸入應用描述',
    trigger: 'blur'
  },
  url: {
    required: true,
    message: '請輸入應用URL',
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
    title: '應用角色',
    key: 'type',
    render(row) {
      const roleMap = {
        user: '一般使用者',
        admin: '管理員',
        system_admin: '系統管理員',
        guest: '訪客',
        developer: '開發者'
      }
      return h('span', {}, roleMap[row.type] || row.type)
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
    title: 'URL',
    key: 'url',
    ellipsis: {
      tooltip: true
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
    name: 'TIPTOP系統',
    type: 'user',
    status: true,
    sort: 1,
    url: 'http://10.20.99.90/tiptop.html'
  },
  {
    id: 2,
    name: 'MAIL系統',
    type: 'user',
    status: true,
    sort: 2,
    url: 'https://dwm6.digiwin.com/coremail/index.jsp'
  },
  {
    id: 3,
    name: 'EFGP系統',
    type: 'user',
    status: true,
    sort: 3,
    url: 'https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward'
  },
  {
    id: 4,
    name: 'BI系統',
    type: 'admin',
    status: true,
    sort: 4,
    url: 'http://10.20.99.71:8080/BOE/BI'
  },
  {
    id: 5,
    name: 'ACP系統',
    type: 'admin',
    status: true,
    sort: 5,
    url: 'https://acpms.digiwin.com/'
  },
  {
    id: 6,
    name: '顧問CRM系統',
    type: 'admin',
    status: true,
    sort: 6,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  },
  {
    id: 7,
    name: '考勤打卡',
    type: 'user',
    status: true,
    sort: 7,
    url: 'http://10.20.99.90/tiptop.html'
  },
  {
    id: 8,
    name: '自己人',
    type: 'user',
    status: true,
    sort: 8,
    url: 'https://dwm6.digiwin.com/coremail/index.jsp'
  },
  {
    id: 9,
    name: '出發GO',
    type: 'user',
    status: true,
    sort: 9,
    url: 'https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward'
  },
  {
    id: 10,
    name: '學苑報',
    type: 'user',
    status: true,
    sort: 10,
    url: 'http://10.20.99.71:8080/BOE/BI'
  },
  {
    id: 11,
    name: '行銷自動化系統',
    type: 'admin',
    status: true,
    sort: 11,
    url: 'https://acpms.digiwin.com/'
  },
  {
    id: 12,
    name: '創業創新',
    type: 'admin',
    status: true,
    sort: 12,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  },
  {
    id: 13,
    name: '活動簽到',
    type: 'user',
    status: true,
    sort: 13,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
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
  formValue.value = {
    ...row,
    iconName: row.icon
  }
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
      const data = {
        ...formValue.value,
        icon: formValue.value.iconName
      }
      console.log('提交的數據：', data)
      message.success(isEdit.value ? '更新成功' : '新增成功')
      showAddModal.value = false
    }
  })
}

// 添加選擇圖標的方法
const selectIcon = option => {
  formValue.value.iconName = option.value
  formValue.value.icon = option.value
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

.icon-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }

  &.active {
    border-color: #18a058;
    background-color: #f0f9eb;
  }
}
</style>
