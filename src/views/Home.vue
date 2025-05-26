<template>
  <div class="home_app">
    <n-grid :cols="24" :x-gap="12" :y-gap="8">
      <n-grid-item :span="24">
        <div class="section-title">
          <n-icon size="24" class="title-icon">
            <ConstructSharp />
          </n-icon>
          <h2>常用系統</h2>
        </div>
        <n-card class="systems-card">
          <div class="systems">
            <div
              class="systems-item"
              @click="openSystem('TIPTOP', 'http://10.20.99.90/tiptop.html')"
            >
              <img src="../assets/application/TIPTOP.png" alt="TIPTOP" />
              <div class="content">
                <p>TIPTOP</p>
              </div>
            </div>
            <div
              class="systems-item"
              @click="openSystem('MAIL', 'https://dwm6.digiwin.com/coremail/index.jsp')"
            >
              <img src="../assets/application/MAIL.png" alt="MAIL" />
              <div class="content">
                <p>MAIL</p>
              </div>
            </div>
            <div
              class="systems-item"
              @click="
                openSystem(
                  'EFGP',
                  'https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward'
                )
              "
            >
              <img src="../assets/application/EFGP.png" alt="EFGP" />
              <div class="content">
                <p>EFGP</p>
              </div>
            </div>
            <div class="systems-item" @click="openSystem('BI', 'http://10.20.99.71:8080/BOE/BI')">
              <img src="../assets/application/BI.png" alt="BI" />
              <div class="content">
                <p>BI</p>
              </div>
            </div>
            <div class="systems-item" @click="openSystem('ACP', 'https://acpms.digiwin.com/')">
              <img src="../assets/application/ACP.png" alt="ACP" />
              <div class="content">
                <p>ACP</p>
              </div>
            </div>
            <div
              class="systems-item"
              @click="
                openSystem(
                  '顧問CRM',
                  'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
                )
              "
            >
              <img src="../assets/application/顧問CRM.png" alt="顧問CRM" />
              <div class="content">
                <p>顧問CRM</p>
              </div>
            </div>
          </div>
        </n-card>
      </n-grid-item>
      <n-grid-item :span="24">
        <div class="section-title">
          <n-icon size="24" class="title-icon">
            <LogoBuffer />
          </n-icon>
          <h2>自訂系統</h2>
        </div>
        <n-card class="systems-card">
          <div class="systems">
            <div
              class="systems-item"
              @click="openSystem('TIPTOP', 'http://10.20.99.90/tiptop.html')"
            >
              <img src="../assets/application/TIPTOP.png" alt="TIPTOP" />
              <div class="content">
                <p>TIPTOP</p>
              </div>
            </div>
            <div
              class="systems-item"
              @click="openSystem('MAIL', 'https://dwm6.digiwin.com/coremail/index.jsp')"
            >
              <img src="../assets/application/MAIL.png" alt="MAIL" />
              <div class="content">
                <p>MAIL</p>
              </div>
            </div>
            <div
              class="systems-item"
              @click="
                openSystem(
                  'EFGP',
                  'https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward'
                )
              "
            >
              <img src="../assets/application/EFGP.png" alt="EFGP" />
              <div class="content">
                <p>EFGP</p>
              </div>
            </div>
            <div class="systems-item" @click="openSystem('BI', 'http://10.20.99.71:8080/BOE/BI')">
              <img src="../assets/application/BI.png" alt="BI" />
              <div class="content">
                <p>BI</p>
              </div>
            </div>
            <div class="systems-item" @click="openSystem('ACP', 'https://acpms.digiwin.com/')">
              <img src="../assets/application/ACP.png" alt="ACP" />
              <div class="content">
                <p>ACP</p>
              </div>
            </div>
            <div
              class="systems-item"
              @click="
                openSystem(
                  '顧問CRM',
                  'http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx'
                )
              "
            >
              <img src="../assets/application/顧問CRM.png" alt="顧問CRM" />
              <div class="content">
                <p>顧問CRM</p>
              </div>
            </div>
          </div>
        </n-card>
      </n-grid-item>
      <n-grid-item :span="8">
        <h2>KPI指標</h2>
        <n-card>內容2</n-card>
      </n-grid-item>
      <n-grid-item :span="16">
        <h2>我的任務</h2>
        <n-card>內容2</n-card>
      </n-grid-item>
    </n-grid>

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
import { NGrid, NGridItem, NCard, NModal, NIcon } from 'naive-ui'
import { ref } from 'vue'
import { ConstructSharp, LogoBuffer } from '@vicons/ionicons5'

const showModal = ref(false)
const currentTitle = ref('')
const currentUrl = ref('')

const openSystem = (title, url) => {
  currentTitle.value = title
  currentUrl.value = url
  showModal.value = true
}
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  h2 {
    margin: 0;
  }

  .title-icon {
    color: var(--primary-color);
  }
}

.systems-card {
  height: 180px;
  .systems {
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 12px;
    gap: 12px;
    transform: translateY(-10px);
    overflow-x: auto;
  }
  .systems-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 80px;
    gap: 10px;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
      transform: translateY(-5px);
      transition: all 0.3s ease;
    }
    img {
      width: 100px;
      height: 100%;
      border-radius: 12px;
      object-fit: cover;
    }
  }
}
</style>
