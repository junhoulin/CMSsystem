<template>
  <div class="home_app">
    <div class="layout-content-container">
      <h2 class="section-title">常用系統</h2>
      <div class="systems">
        <div
          v-for="(item, idx) in favoriteSystems"
          :key="idx"
          class="systems-item"
          @click="openSystem(item.title, item.url)"
        >
          <img :src="item.img" :alt="item.title" />
          <div class="content">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <h2 class="section-title">
        自訂應用
        <n-icon size="20" class="settings-icon" @click="onModify">
          <CreateOutline />
        </n-icon>
      </h2>

      <div class="systems">
        <div
          v-for="(item, idx) in customApps"
          :key="idx"
          class="systems-item"
          @click="openSystem(item.title, item.url)"
        >
          <n-icon size="32">
            <component :is="item.icon" />
          </n-icon>
          <div class="content">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <n-modal
      v-model:show="showModal"
      preset="card"
      style="width: 98vw; height: 96vh"
      :title="currentTitle"
      :bordered="false"
      size="huge"
      :content-style="{
        padding: '5px 10px',
        height: '100%'
      }"
    >
      <iframe :src="currentUrl" style="width: 100%; height: 100%; border: none"></iframe>
    </n-modal>
    <n-modal
      v-model:show="showCustomizeModal"
      preset="card"
      style="width: 800px"
      title="自訂應用程式"
      :bordered="false"
      size="huge"
    >
      <n-transfer v-model:value="selectedApps" :options="transferOptions" />
      <template #footer>
        <div style="display: flex; justify-content: flex-end; gap: 12px">
          <n-button @click="showCustomizeModal = false">取消</n-button>
          <n-button type="primary" @click="handleSaveCustomization">確定</n-button>
        </div>
      </template>
    </n-modal>
  </div>
</template>

<script setup>
import { NModal, NIcon, NTransfer, NButton } from 'naive-ui'
import { ref, computed } from 'vue'
// 引入 xicons.org 的 icon（以 Ionicons 為例）
import {
  BriefcaseOutline,
  PersonOutline,
  LockClosedOutline,
  PeopleOutline,
  RocketOutline,
  CashOutline,
  CreateOutline
} from '@vicons/ionicons5'

const showModal = ref(false)
const currentTitle = ref('')
const currentUrl = ref('')
const showCustomizeModal = ref(false)
const selectedApps = ref([])

const favoriteSystems = [
  {
    title: 'TIPTOP系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/TIPTOP.png',
    url: 'http://10.20.99.90/tiptop.html'
  },
  {
    title: 'MAIL系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/MAIL.png',
    url: 'https://dwm6.digiwin.com/coremail/index.jsp'
  },
  {
    title: 'EFGP系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/EFGP.png',
    url: 'https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward'
  },
  {
    title: 'BI系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/BI.png',
    url: 'http://10.20.99.71:8080/BOE/BI'
  },
  {
    title: 'ACP系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/ACP.png',
    url: 'https://acpms.digiwin.com/'
  },
  {
    title: '顧問CRM系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/顧問CRM.png',
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  },
  {
    title: 'MAIL系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/MAIL.png',
    url: 'https://dwm6.digiwin.com/coremail/index.jsp'
  },
  {
    title: 'EFGP系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/EFGP.png',
    url: 'https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward'
  },
  {
    title: 'BI系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/BI.png',
    url: 'http://10.20.99.71:8080/BOE/BI'
  },
  {
    title: 'ACP系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/ACP.png',
    url: 'https://acpms.digiwin.com/'
  },
  {
    title: '顧問CRM系統',
    img: 'https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/顧問CRM.png',
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  }
]

const customApps = [
  { title: '考勤打卡', icon: BriefcaseOutline, url: 'http://10.20.99.90/tiptop.html' },
  {
    title: '自己人',
    icon: PersonOutline,
    url: 'https://dwm6.digiwin.com/coremail/index.jsp'
  },
  {
    title: '出發GO',
    icon: LockClosedOutline,
    url: 'https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward'
  },
  { title: '學苑報', icon: PeopleOutline, url: 'http://10.20.99.71:8080/BOE/BI' },
  { title: '行銷自動化系統', icon: RocketOutline, url: 'https://acpms.digiwin.com/' },
  {
    title: '創業創新',
    icon: CashOutline,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  },
  {
    title: '活動簽到',
    icon: CashOutline,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  }
]

// 轉換現有的 customApps 為 transfer 選項格式
const transferOptions = computed(() => {
  return customApps.map((app, index) => ({
    label: app.title,
    value: index,
    disabled: false
  }))
})

const openSystem = (title, url) => {
  currentTitle.value = title
  currentUrl.value = url
  showModal.value = true
}

const onModify = () => {
  showCustomizeModal.value = true
}

const handleSaveCustomization = () => {
  // 這裡可以添加保存邏輯
  showCustomizeModal.value = false
}
</script>

<style lang="scss" scoped>
.layout-content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.section-title {
  font-size: 22px;
  font-weight: 700;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;
}
.settings-icon {
  cursor: pointer;
  transform: translateY(1px);
}
.systems {
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  gap: 12px;
  padding: 16px 16px;
}
.systems-item {
  width: 160px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  transition: box-shadow 0.18s, border 0.18s, transform 0.18s;
  &:hover {
    box-shadow: 0 6px 24px 0 #bfc8d1;
    // border: 1px solid #bfc8d1;
    transform: scale(1.045);
  }
  img,
  .n-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content p {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 18px;
    font-weight: 700;
    padding: 0px 0 8px 0;
    text-align: left;
  }
  .systems {
    grid-template-columns: repeat(2, 1fr);
  }
  .systems-item {
    width: 140px;
    gap: 8px;
    padding: 6px;
    .content p {
      font-size: 12px;
    }
  }
}
</style>
