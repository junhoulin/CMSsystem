<template>
  <div class="application">
    <div class="layout-content-container">
      <h2 class="section-title">個人應用</h2>

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
  </div>
</template>

<script setup>
import { NModal, NIcon } from 'naive-ui'
import { ref } from 'vue'
// 引入 xicons.org 的 icon（以 Ionicons 為例）
import {
  BriefcaseOutline,
  PersonOutline,
  LockClosedOutline,
  PeopleOutline,
  RocketOutline,
  CashOutline,
  CalendarOutline,
  DocumentTextOutline,
  TimeOutline,
  CarOutline,
  ClipboardOutline,
  GiftOutline,
  PhonePortraitOutline
} from '@vicons/ionicons5'

const showModal = ref(false)
const currentTitle = ref('')
const currentUrl = ref('')

const customApps = [
  { title: '考勤打卡', icon: TimeOutline, url: 'http://10.20.99.90/tiptop.html' },
  {
    title: '自己人',
    icon: PersonOutline,
    url: 'https://dwm6.digiwin.com/coremail/index.jsp'
  },
  {
    title: '出發GO',
    icon: CarOutline,
    url: 'https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward'
  },
  { title: '學苑報', icon: DocumentTextOutline, url: 'http://10.20.99.71:8080/BOE/BI' },
  { title: '行銷自動化系統', icon: RocketOutline, url: 'https://acpms.digiwin.com/' },
  {
    title: '創業創新',
    icon: GiftOutline,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  },
  {
    title: '活動簽到',
    icon: CalendarOutline,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  },
  {
    title: '訂單查詢',
    icon: ClipboardOutline,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  },
  {
    title: '遠傳方案',
    icon: PhonePortraitOutline,
    url: 'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
  }
]

const openSystem = (title, url) => {
  currentTitle.value = title
  currentUrl.value = url
  showModal.value = true
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
