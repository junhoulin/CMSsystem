<template>
  <div class="information">
    <div class="content-container" ref="contentContainer">
      <h2 class="section-title">40周年</h2>
      <n-tabs type="line" animated>
        <n-tab-pane name="news" tab="最新消息">
          <div class="article-list">
            <template v-if="loading">
              <div class="article-item" v-for="i in 12" :key="i">
                <div class="article-image">
                  <n-skeleton height="120px" />
                </div>
                <div class="article-content">
                  <n-skeleton text />
                  <n-skeleton text :repeat="2" />
                  <div class="article-meta">
                    <n-skeleton text />
                    <n-skeleton text />
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div
                class="article-item"
                v-for="(item, index) in newsList"
                :key="index"
                @click="goToArticleDetail('news', index)"
              >
                <div class="article-image">
                  <img :src="item.image" :alt="item.title" />
                </div>
                <div class="article-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.content }}</p>
                  <div class="article-meta">
                    <n-tag :bordered="false" type="success">{{ item.tag }}</n-tag>
                    <span class="article-time">{{ item.time }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="pagination">
            <n-pagination
              v-model:page="page.news"
              :page-count="totalPages.news"
              @update:page="handlePageChange('news')"
              simple
            />
          </div>
        </n-tab-pane>

        <n-tab-pane name="digital-world" tab="數智天地">
          <div class="article-list">
            <template v-if="loading">
              <div class="article-item" v-for="i in 12" :key="i">
                <div class="article-image">
                  <n-skeleton height="120px" />
                </div>
                <div class="article-content">
                  <n-skeleton text />
                  <n-skeleton text :repeat="2" />
                  <div class="article-meta">
                    <n-skeleton text />
                    <n-skeleton text />
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div
                class="article-item"
                v-for="(item, index) in digitalWorldList"
                :key="index"
                @click="goToArticleDetail('digital-world', index)"
              >
                <div class="article-image">
                  <img :src="item.image" :alt="item.title" />
                </div>
                <div class="article-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.content }}</p>
                  <div class="article-meta">
                    <n-tag :bordered="false" type="success">{{ item.tag }}</n-tag>
                    <span class="article-time">{{ item.time }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="pagination">
            <n-pagination
              v-model:page="page.digitalWorld"
              :page-count="totalPages.digitalWorld"
              @update:page="handlePageChange('digital-world')"
              simple
            />
          </div>
        </n-tab-pane>

        <n-tab-pane name="digital-articles" tab="數智文章">
          <div class="article-list">
            <template v-if="loading">
              <div class="article-item" v-for="i in 12" :key="i">
                <div class="article-image">
                  <n-skeleton height="120px" />
                </div>
                <div class="article-content">
                  <n-skeleton text />
                  <n-skeleton text :repeat="2" />
                  <div class="article-meta">
                    <n-skeleton text />
                    <n-skeleton text />
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div
                class="article-item"
                v-for="(item, index) in digitalArticlesList"
                :key="index"
                @click="goToArticleDetail('digital-articles', index)"
              >
                <div class="article-image">
                  <img :src="item.image" :alt="item.title" />
                </div>
                <div class="article-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.content }}</p>
                  <div class="article-meta">
                    <n-tag :bordered="false" type="success">{{ item.tag }}</n-tag>
                    <span class="article-time">{{ item.time }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="pagination">
            <n-pagination
              v-model:page="page.digitalArticles"
              :page-count="totalPages.digitalArticles"
              @update:page="handlePageChange('digital-articles')"
              simple
            />
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { NTabs, NTabPane, NTag, NPagination, NSkeleton } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

const contentContainer = ref(null)
const loading = ref(true)

// 分頁數據
const page = ref({
  news: 1,
  digitalWorld: 1,
  digitalArticles: 1
})

// 總頁數
const totalPages = ref({
  news: 10,
  digitalWorld: 10,
  digitalArticles: 10
})

// 列表數據
const newsList = ref([])
const digitalWorldList = ref([])
const digitalArticlesList = ref([])

// 模擬獲取數據的函數
const fetchData = async (type, pageNum) => {
  // 這裡模擬API請求，實際使用時替換為真實的API調用
  return new Promise(resolve => {
    setTimeout(() => {
      const newItems = Array(12)
        .fill(null)
        .map((_, index) => ({
          title: `${type} 文章 ${pageNum * 12 + index + 1}`,
          content: '這是一篇示例文章，實際使用時請替換為真實的內容。',
          image: `https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel${
            (index % 4) + 1
          }.jpeg`,
          tag: '示例標籤',
          time: '2024-03-21'
        }))
      resolve(newItems)
    }, 500)
  })
}

// 處理頁碼變化
const handlePageChange = async type => {
  loading.value = true
  const list = {
    news: newsList,
    'digital-world': digitalWorldList,
    'digital-articles': digitalArticlesList
  }[type]

  const newItems = await fetchData(type, page.value[type])
  list.value = newItems
  loading.value = false

  // 使用 contentContainer 滾動到頂部
  if (contentContainer.value) {
    contentContainer.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 跳轉到文章詳情頁
const goToArticleDetail = (type, index) => {
  const pageType = {
    news: 'news',
    'digital-world': 'digitalWorld',
    'digital-articles': 'digitalArticles'
  }[type]

  const id = page.value[pageType] * 12 + index + 1
  router.push(`/Information/article/${id}`)
}

// 初始化數據
onMounted(async () => {
  loading.value = true
  const [news, digitalWorld, digitalArticles] = await Promise.all([
    fetchData('news', 1),
    fetchData('digital-world', 1),
    fetchData('digital-articles', 1)
  ])

  newsList.value = news
  digitalWorldList.value = digitalWorld
  digitalArticlesList.value = digitalArticles
  loading.value = false
})
</script>

<style scoped>
.content-container {
  border-radius: 8px;
}

.section-title {
  font-size: 22px;
  font-weight: 700;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;
}

.article-list {
  min-height: 400px;
  padding: 6px 0;
  display: grid;
  gap: 10px;
}

.article-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  transition: all 0.3s ease;
  align-items: center;
}

.article-item:hover {
  cursor: pointer;
}

.article-image {
  flex: 0 0 200px;
  height: 120px;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-content h3 {
  font-size: 18px;
}

.article-content p {
  line-height: 1.4;
  flex: 1;
  margin: 4px 0;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.article-tag {
  padding: 2px 8px;
  border-radius: 4px;
}

.pagination {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

:deep(.n-tag) {
  font-size: 12px;
  padding: 0 6px;
  height: 20px;
}

@media (min-width: 481px) {
  .article-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1023px) {
  .article-list {
    gap: 12px;
    padding: 0 12px;
  }

  .article-item {
    padding: 12px;
    gap: 12px;
  }

  .article-image {
    flex: 0 0 120px;
    height: 80px;
  }

  .article-content h3 {
    font-size: 15px;
    margin: 0 0 4px 0;
  }

  .article-content p {
    font-size: 13px;
    margin: 0 0 4px 0;
    overflow: hidden;
  }

  .article-meta {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .article-list {
    grid-template-columns: 1fr;
    padding: 0 8px;
  }

  .article-item {
    padding: 8px;
    gap: 8px;
  }

  .article-image {
    flex: 0 0 100px;
    height: 70px;
  }

  .article-content h3 {
    font-size: 14px;
  }

  .article-content p {
    font-size: 10px;
  }

  :deep(.n-tag) {
    font-size: 11px;
    padding: 0 4px;
    height: 18px;
  }
}
</style>
