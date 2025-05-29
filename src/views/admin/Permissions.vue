<template>
  <div class="permissions-container">
    <n-card title="權限管理" class="mb-4">
      <template #header-extra>
        <n-button type="primary" @click="handleAddRole">
          <template #icon>
            <n-icon><Add /></n-icon>
          </template>
          新增角色群組
        </n-button>
      </template>

      <n-tabs type="line" animated>
        <n-tab-pane v-for="role in roleGroups" :key="role.id" :name="role.id" :tab="role.name">
          <div class="role-content">
            <div class="role-header">
              <n-space>
                <n-button type="primary" @click="handleAddPermission(role)"> 新增權限 </n-button>
                <n-button @click="handleEditRole(role)">編輯角色</n-button>
                <n-button type="error" @click="handleDeleteRole(role)">刪除角色</n-button>
              </n-space>
            </div>

            <n-data-table
              :columns="columns"
              :data="role.permissions"
              :pagination="pagination"
              :bordered="false"
            />
          </div>
        </n-tab-pane>
      </n-tabs>
    </n-card>

    <!-- 新增/編輯角色 Modal -->
    <n-modal
      v-model:show="showRoleModal"
      preset="card"
      :style="{
        width: '90vw',
        height: isMobile ? '1050px' : '860px'
      }"
      :title="editingRole ? '編輯角色群組' : '新增角色群組'"
      :bordered="false"
      size="huge"
    >
      <n-form
        ref="roleFormRef"
        :model="roleForm"
        :rules="roleRules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="角色名稱" path="name">
          <n-input v-model:value="roleForm.name" placeholder="請輸入角色名稱" />
        </n-form-item>
        <n-form-item label="角色描述" path="description">
          <n-input
            v-model:value="roleForm.description"
            type="textarea"
            placeholder="請輸入角色描述"
          />
        </n-form-item>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button @click="showRoleModal = false">取消</n-button>
          <n-button type="primary" @click="handleSaveRole">保存</n-button>
        </n-space>
      </template>
    </n-modal>

    <!-- 新增/編輯權限 Modal -->
    <n-modal
      v-model:show="showPermissionModal"
      preset="card"
      :style="{
        width: '90vw',
        height: isMobile ? '1050px' : '860px'
      }"
      :title="editingPermission ? '編輯權限' : '新增權限'"
      :bordered="false"
      size="huge"
    >
      <n-form
        ref="permissionFormRef"
        :model="permissionForm"
        :rules="permissionRules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="權限名稱" path="name">
          <n-input v-model:value="permissionForm.name" placeholder="請輸入權限名稱" />
        </n-form-item>
        <n-form-item label="權限類型" path="type">
          <n-select
            v-model:value="permissionForm.type"
            :options="permissionTypes"
            placeholder="請選擇權限類型"
          />
        </n-form-item>
        <n-form-item label="權限範圍" path="scopes">
          <n-checkbox-group v-model:value="permissionForm.scopes">
            <n-space vertical>
              <n-checkbox
                v-for="scope in availableScopes"
                :key="scope.value"
                :value="scope.value"
                :label="scope.label"
              />
            </n-space>
          </n-checkbox-group>
        </n-form-item>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button @click="showPermissionModal = false">取消</n-button>
          <n-button type="primary" @click="handleSavePermission">保存</n-button>
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
  NSelect,
  NCheckboxGroup,
  NCheckbox,
  NTabs,
  NTabPane,
  NTag
} from 'naive-ui'
import { Add, Create, Trash } from '@vicons/ionicons5'

// 使用 useWindowSize 監聽視窗大小
const { width } = useWindowSize()
const isMobile = computed(() => width.value <= 768)

// 角色群組數據
const roleGroups = ref([
  {
    id: 1,
    name: '輪播圖管理員',
    description: '管理輪播圖相關權限',
    permissions: []
  },
  {
    id: 2,
    name: '文章管理員',
    description: '管理文章相關權限',
    permissions: []
  },
  {
    id: 3,
    name: '應用程式管理員',
    description: '管理應用程式相關權限',
    permissions: []
  },
  {
    id: 4,
    name: '系統管理員',
    description: '管理系統相關權限',
    permissions: []
  },
  {
    id: 5,
    name: '導覽列管理員',
    description: '管理導覽列相關權限',
    permissions: []
  }
])

// 權限類型選項
const permissionTypes = [
  { label: '文章', value: 'article' },
  { label: '輪播圖', value: 'carousel' },
  { label: '應用程式', value: 'application' },
  { label: '系統', value: 'system' },
  { label: '導覽列', value: 'navigation' }
]

// 權限範圍選項
const availableScopes = {
  article: [
    { label: '策略營地', value: 'strategy-camp' },
    { label: '40周年', value: '40th-anniversary' },
    { label: '數智入口', value: 'digital-entrance' }
  ],
  carousel: [
    { label: '首頁輪播', value: 'home' },
    { label: '活動輪播', value: 'event' }
  ],
  application: [
    { label: '策略工具', value: 'strategy-tools' },
    { label: '數智工具', value: 'digital-tools' }
  ],
  system: [
    { label: '用戶管理', value: 'user-management' },
    { label: '權限管理', value: 'permission-management' }
  ],
  navigation: [
    { label: '主導覽', value: 'main' },
    { label: '次導覽', value: 'sub' }
  ]
}

// 表格列定義
const columns = [
  {
    title: '權限名稱',
    key: 'name'
  },
  {
    title: '權限類型',
    key: 'type',
    render(row) {
      const type = permissionTypes.find(t => t.value === row.type)
      return type ? type.label : '-'
    }
  },
  {
    title: '權限範圍',
    key: 'scopes',
    render(row) {
      const scopes = row.scopes.map(scope => {
        const scopeOption = availableScopes[row.type]?.find(s => s.value === scope)
        return scopeOption ? scopeOption.label : scope
      })
      return scopes.join(', ')
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
                onClick: () => handleEditPermission(row)
              },
              {
                default: () => '編輯',
                icon: () => h(NIcon, null, { default: () => h(Create) })
              }
            ),
            h(
              NPopconfirm,
              {
                onPositiveClick: () => handleDeletePermission(row)
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

// 分頁配置
const pagination = {
  pageSize: 10
}

// Modal 控制
const showRoleModal = ref(false)
const showPermissionModal = ref(false)
const editingRole = ref(null)
const editingPermission = ref(null)

// 表單數據
const roleForm = ref({
  name: '',
  description: ''
})

const permissionForm = ref({
  name: '',
  type: null,
  scopes: []
})

// 表單驗證規則
const roleRules = {
  name: {
    required: true,
    message: '請輸入角色名稱',
    trigger: ['blur', 'input']
  }
}

const permissionRules = {
  name: {
    required: true,
    message: '請輸入權限名稱',
    trigger: ['blur', 'input']
  },
  type: {
    required: true,
    message: '請選擇權限類型',
    trigger: ['blur', 'change']
  },
  scopes: {
    required: true,
    message: '請選擇權限範圍',
    trigger: ['blur', 'change']
  }
}

// 處理函數
const handleAddRole = () => {
  editingRole.value = null
  roleForm.value = {
    name: '',
    description: ''
  }
  showRoleModal.value = true
}

const handleEditRole = role => {
  editingRole.value = role
  roleForm.value = {
    name: role.name,
    description: role.description
  }
  showRoleModal.value = true
}

const handleDeleteRole = role => {
  const index = roleGroups.value.findIndex(r => r.id === role.id)
  if (index !== -1) {
    roleGroups.value.splice(index, 1)
  }
}

const handleSaveRole = () => {
  if (editingRole.value) {
    // 編輯現有角色
    const role = roleGroups.value.find(r => r.id === editingRole.value.id)
    if (role) {
      role.name = roleForm.value.name
      role.description = roleForm.value.description
    }
  } else {
    // 新增角色
    const newRole = {
      id: Date.now(),
      name: roleForm.value.name,
      description: roleForm.value.description,
      permissions: []
    }
    roleGroups.value.push(newRole)
  }
  showRoleModal.value = false
}

const handleAddPermission = role => {
  editingPermission.value = null
  permissionForm.value = {
    name: '',
    type: null,
    scopes: []
  }
  showPermissionModal.value = true
}

const handleEditPermission = permission => {
  editingPermission.value = permission
  permissionForm.value = {
    name: permission.name,
    type: permission.type,
    scopes: [...permission.scopes]
  }
  showPermissionModal.value = true
}

const handleDeletePermission = permission => {
  const role = roleGroups.value.find(r => r.permissions.includes(permission))
  if (role) {
    const index = role.permissions.indexOf(permission)
    if (index !== -1) {
      role.permissions.splice(index, 1)
    }
  }
}

const handleSavePermission = () => {
  const permission = {
    id: Date.now(),
    name: permissionForm.value.name,
    type: permissionForm.value.type,
    scopes: permissionForm.value.scopes
  }

  if (editingPermission.value) {
    // 編輯現有權限
    const role = roleGroups.value.find(r => r.permissions.includes(editingPermission.value))
    if (role) {
      const index = role.permissions.indexOf(editingPermission.value)
      if (index !== -1) {
        role.permissions[index] = permission
      }
    }
  } else {
    // 新增權限
    const role = roleGroups.value.find(r => r.id === editingRole.value.id)
    if (role) {
      role.permissions.push(permission)
    }
  }
  showPermissionModal.value = false
}
</script>

<style lang="scss" scoped>
.permissions-container {
  .mb-4 {
    margin-bottom: 16px;
  }

  .role-content {
    .role-header {
      margin-bottom: 16px;
    }
  }
}
</style>
