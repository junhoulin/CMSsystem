<template>
  <div class="article-detail">
    <div class="content-container">
      <template v-if="loading">
        <div class="article-header">
          <n-skeleton text style="width: 60%" />
          <div class="article-meta">
            <n-skeleton text style="width: 100px" />
            <n-skeleton text style="width: 80px" />
          </div>
        </div>

        <div class="article-image">
          <n-skeleton height="400px" />
        </div>

        <div class="article-content">
          <n-skeleton text :repeat="6" />
          <n-skeleton text style="width: 80%" />
          <n-skeleton text :repeat="4" />
          <n-skeleton text style="width: 60%" />
        </div>
      </template>

      <template v-else>
        <div class="article-header">
          <h1>{{ article.title }}</h1>
          <div class="article-meta">
            <n-tag :bordered="false" type="success">{{ article.tag }}</n-tag>
            <span class="article-time">{{ article.time }}</span>
          </div>
        </div>

        <div class="article-image">
          <img :src="article.image" :alt="article.title" />
        </div>

        <div class="article-content" v-html="article.content"></div>

        <div class="article-actions">
          <n-button @click="goBack">
            <template #icon>
              <n-icon><ArrowBackCircleOutline /></n-icon>
            </template>
            返回列表
          </n-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NTag, NIcon, NSkeleton } from 'naive-ui'
import { ArrowBackCircleOutline } from '@vicons/ionicons5'

const route = useRoute()
const router = useRouter()
const loading = ref(true)

const article = ref({
  title: '',
  content: '',
  image: '',
  tag: '',
  time: ''
})

// 模擬獲取文章詳情
const fetchArticleDetail = async id => {
  // 這裡模擬API請求，實際使用時替換為真實的API調用
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: `數智化轉型：企業發展的新引擎`,
        content: `
          <p class="ql-align-justify"><span>伴隨著國內造車新勢力的快速崛起，汽車行業無疑成為當前最受矚目的領域之一。得益於汽車產業的蓬勃發展，從產品設計到零配件的生產製造，再到智能網聯技術的更新迭代，汽車產業鏈實現全面爆發。</span></p><p class="ql-align-justify">	</p><p class="ql-align-justify"><span>汽車密封件後加工工裝、設備和模具作為這一鏈條裏的一環，也迎來了發展機遇。伴隨中國汽車市場的國產化進程加快，眾多優秀的本土工裝設備及模具供應商嶄露頭角，太倉久本機械便是其中的佼佼者。</span></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span>歷經十餘載的深耕細作，久本機械在模具和工裝設備兩個方面的產品市場佔有率穩居全球前三甲，為特斯拉、比亞迪、蔚來、小鵬等知名車企提供密封條加工精密模具產品。這一成就的背後，是久本機械對創新不懈追求的生動詮釋。今天就讓我們一起深入久本機械的革新之旅。</span></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><img src="https://dmc.digiwincloud.com/api/dmc/v2/file/intelligententry/preview/2629cbfe-f6aa-4e0f-9159-0e01f76908aa"></p><p><br></p><p><br></p><p class="ql-align-justify">在傳統行業，變更我們都是當做異常流程來處理的，但是在模具行業，變更就是生產常態化。因此，變更造成的管理痛點，歸納如下：</p><p class="ql-align-justify">l 變更高頻，設計下發的變更時間不定，依靠人員某段時間集中去檢核處理，按時間點逐筆核對。</p><p class="ql-align-justify">l 變更內容影響較多，需要在眾多數據裏，人工判斷狀態，進行物料的處理，跟進結果處理困難。</p><p class="ql-align-justify">l 生產週期短，頻繁的變更，如果不及時處理，嚴重影響交期及產能分配及成本浪費。</p><p class="ql-align-justify">1. 如果ECN不及時更新毛胚尺寸，生產就會容易切錯毛胚尺寸，若切小後就會形成呆滯，要重新購買材料。</p><p class="ql-align-justify">2. 如果ECN不及時處理，MES就沒有生產資訊來源，導致沒有及時排產，會舍影響交期。</p><p class="ql-align-justify">3. 如果ECN不及時處理，生產到一半才發現，最新ECN沒有執行下去，導致報廢或者返工</p><p class="ql-align-justify">4. 生產已把物料領用後，發了變更，難以追蹤物料退料情況，實物散落在車間各處。</p><p class="ql-align-justify">5. 變更導致報廢後，有些材料實際是可以在用的，但實物散落在車間各處，系統無帳務管理，導致沒法跟進可再利用率，一直在購買新料。</p><p class="ql-align-justify">6. 針對定制尺寸毛胚請採購，如果ECN不及時處理，買錯尺寸就會形成呆滯。要重新購買材料</p><p class="ql-align-justify">	</p><p class="ql-align-justify"><strong>解決方案</strong></p><p class="ql-align-justify"><br></p><p class="ql-align-justify">通過雅典娜裝備雲設變導航，針對生產及發退料，請採購增減，庫存處理，鎖定變更影響，封裝處理方案，5種變更類型，36個變更場景，58種封裝方案，10種自動變更處理，即時偵測，主動推送。 從原來的人找事，變成現在事找人，並追蹤處理結果。形成變更閉環管理。</p><p class="ql-align-justify"><br></p><p class="ql-align-justify"> </p><p class="ql-align-justify"><strong>舉例說明：</strong></p><p class="ql-align-justify">1、當ECN（工程變更通知）導致物料增加時，系統會即時偵測並判斷當前的生產狀態，隨後提供相應的建議處理方案，並主動將待辦任務推送給相關責任人。</p><p class="ql-align-center"><br></p><p class="ql-align-justify">2、在生產過程中，如果發現尚未領料，系統將即時自動更新狀態並進行自動處理；若已領料，則系統會自動生成退料單，並將退料任務推送至責任人。</p><p class="ql-align-center"><br></p><p class="ql-align-justify">3、當變更導致物料報廢時，系統會推送影響材料處理任務，同時進行賬務追蹤，以提高材料的二次利用率</p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><strong>效益提升</strong></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><strong>1、高效的設計變更回應</strong></p><p class="ql-align-justify">每月平均1629筆數據，設變導航自動處理工單變更6150筆明細，提供方案人工確認1807筆明細。處理時間每天減少4小時，處理時效從2~3天到現在每天10分鐘定時處理，設變影響做到日清日結。</p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><strong>2、庫存呆滯降低</strong></p><p class="ql-align-justify">快速打通設計和生產變更流轉，減少模具返修、原材料的錯誤切割，能夠及時退料，讓可用材料及時消耗，減少庫存呆滯、報廢的風險。提升資源利用率，能為企業減少成本浪費。</p><p class="ql-align-justify">	</p><p class="ql-align-justify"><strong>3、提升專案准交</strong></p><p class="ql-align-justify">新下的模具，及時下達生產指令，能夠及時買料，不遺漏，原先依靠人員逐筆手動核對下單，現在有設變導航10分鐘自動下單，加快模具的開單和下發進度，促進專案的及時交付。</p><p class="ql-align-justify"><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://temp-picture.s3.ap-northeast-1.amazonaws.com/METIS_%E5%90%8D%E7%89%87%E6%8E%83%E6%8F%8F%E8%A7%A3%E8%AA%AA+(2).mp4"></iframe><p class="ql-align-justify"><br></p><p class="ql-align-justify">	</p><p class="ql-align-justify"><strong>客戶證言</strong></p><p class="ql-align-justify"><br></p><p class="ql-align-justify">“用了設變導航之後，我的工作輕鬆多了，不用一個個點了，可以批量處理，也不會遺漏下單。”——用戶層</p><p class="ql-align-justify"><br></p><p class="ql-align-justify">“設變導航服務團隊很專業，處理問題很及時。設變導航應用封裝的方案，能夠快速解決我們公司的頻繁變更情況，減少物料呆滯的情況，讓內部的變更流程更加通暢，保證我們專案更好的交付“——管理層</p><p><br></p><p><br></p>
        `,
        image: `https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel${
          (id % 4) + 1
        }.jpeg`,
        tag: '數智化轉型',
        time: '2024-03-21'
      })
    }, 1000) // 增加延遲以更好地展示載入效果
  })
}

const goBack = () => {
  router.back()
}

onMounted(async () => {
  const id = route.params.id
  const data = await fetchArticleDetail(id)
  article.value = data
  loading.value = false
})
</script>

<style scoped>


.content-container {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 24px;
}

.article-header {
  margin-bottom: 24px;
}

.article-header h1 {
  font-size: 24px;
  margin-bottom: 16px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.article-image {
  width: 100%;
  height: 400px;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  line-height: 1.8;
  margin-bottom: 50px;
}

.article-content :deep(p) {
  margin-bottom: 16px;
  line-height: 1.8;
}

.article-content :deep(.ql-size-small) {
  font-size: 0.75em;
  line-height: 1.4;
}

.article-content :deep(.ql-size-normal) {
  font-size: 1em;
  line-height: 1.8;
}

.article-content :deep(.ql-size-large) {
  font-size: 1.5em;
  line-height: 1.4;
}

.article-content :deep(.ql-size-huge) {
  font-size: 2.5em;
  line-height: 1.2;
}

.article-content :deep(h1) {
  font-size: 2em;
  margin: 24px 0 16px;
  font-weight: 600;
}

.article-content :deep(ol) {
  margin: 16px 0;
  padding-left: 24px;
}

.article-content :deep(li) {
  margin-bottom: 8px;
  line-height: 1.6;
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 16px 0;
  border-radius: 4px;
}

.article-content :deep(.ql-video) {
  width: 100%;
  height: 400px;
  margin: 16px 0;
  border-radius: 4px;
}

.article-content :deep(s) {
  text-decoration: line-through;
}

.article-content :deep(u) {
  text-decoration: underline;
}

.article-content :deep(em) {
  font-style: italic;
}

.article-content :deep(strong) {
  font-weight: 600;
}

.article-content :deep(span[style*='background-color']) {
  padding: 2px 4px;
  border-radius: 2px;
}

.article-actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
}

@media (max-width: 768px) {
  .content-container {
    padding: 16px;
  }

  .article-header h1 {
    font-size: 20px;
  }

  .article-image {
    height: 300px;
  }

  .article-content :deep(.ql-size-small) {
    font-size: 0.8em;
  }

  .article-content :deep(.ql-size-large) {
    font-size: 1.3em;
  }

  .article-content :deep(.ql-size-huge) {
    font-size: 2em;
  }

  .article-content :deep(h1) {
    font-size: 1.8em;
  }

  .article-content :deep(.ql-video) {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .article-detail {
    padding: 12px;
  }

  .content-container {
    padding: 12px;
  }

  .article-header h1 {
    font-size: 18px;
  }

  .article-image {
    height: 200px;
  }

  .article-content :deep(.ql-size-small) {
    font-size: 0.85em;
  }

  .article-content :deep(.ql-size-large) {
    font-size: 1.2em;
  }

  .article-content :deep(.ql-size-huge) {
    font-size: 1.8em;
  }

  .article-content :deep(h1) {
    font-size: 1.5em;
  }

  .article-content :deep(.ql-video) {
    height: 200px;
  }

  .article-content :deep(blockquote) {
    padding: 12px 16px;
  }
}
</style>
