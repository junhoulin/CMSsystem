<template>
  <div class="information">
    <div class="content-container">
      <n-tabs type="line" animated>
        <n-tab-pane name="news" tab="最新消息">
          <div class="article-list" ref="newsListRef" @scroll="handleScroll('news')">
            <div class="article-item" v-for="(item, index) in newsList" :key="index">
              <div class="article-image">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="article-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
                <div class="article-meta">
                  <span class="article-tag">{{ item.tag }}</span>
                  <span class="article-time">{{ item.time }}</span>
                </div>
              </div>
            </div>
            <div v-if="loading.news" class="loading-more">
              <n-spin size="small" />
              <span>載入中...</span>
            </div>
          </div>
        </n-tab-pane>

        <n-tab-pane name="digital-world" tab="數智天地">
          <div
            class="article-list"
            ref="digitalWorldListRef"
            @scroll="handleScroll('digital-world')"
          >
            <div class="article-item" v-for="(item, index) in digitalWorldList" :key="index">
              <div class="article-image">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="article-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
                <div class="article-meta">
                  <span class="article-tag">{{ item.tag }}</span>
                  <span class="article-time">{{ item.time }}</span>
                </div>
              </div>
            </div>
            <div v-if="loading.digitalWorld" class="loading-more">
              <n-spin size="small" />
              <span>載入中...</span>
            </div>
          </div>
        </n-tab-pane>

        <n-tab-pane name="digital-articles" tab="數智文章">
          <div
            class="article-list"
            ref="digitalArticlesListRef"
            @scroll="handleScroll('digital-articles')"
          >
            <div class="article-item" v-for="(item, index) in digitalArticlesList" :key="index">
              <div class="article-image">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="article-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
                <div class="article-meta">
                  <span class="article-tag">{{ item.tag }}</span>
                  <span class="article-time">{{ item.time }}</span>
                </div>
              </div>
            </div>
            <div v-if="loading.digitalArticles" class="loading-more">
              <n-spin size="small" />
              <span>載入中...</span>
            </div>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { NTabs, NTabPane, NSpin } from 'naive-ui'

// 載入狀態
const loading = ref({
  news: false,
  digitalWorld: false,
  digitalArticles: false
})

// 分頁數據
const page = ref({
  news: 1,
  digitalWorld: 1,
  digitalArticles: 1
})

// 是否還有更多數據
const hasMore = ref({
  news: true,
  digitalWorld: true,
  digitalArticles: true
})

// 列表引用
const newsListRef = ref(null)
const digitalWorldListRef = ref(null)
const digitalArticlesListRef = ref(null)

// 模擬獲取數據的函數
const fetchData = async (type, pageNum) => {
  // 這裡模擬API請求，實際使用時替換為真實的API調用
  return new Promise(resolve => {
    setTimeout(() => {
      const newItems = Array(5)
        .fill(null)
        .map((_, index) => ({
          title: `${type} 文章 ${pageNum * 5 + index + 1}`,
          content: '這是一篇示例文章，實際使用時請替換為真實的內容。',
          image: `https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel${
            (index % 4) + 1
          }.jpeg`,
          tag: '示例標籤',
          time: '2024-03-21 10:00'
        }))
      resolve(newItems)
    }, 1000)
  })
}

// 處理滾動事件
const handleScroll = async type => {
  const listRef = {
    news: newsListRef,
    'digital-world': digitalWorldListRef,
    'digital-articles': digitalArticlesListRef
  }[type]

  if (!listRef.value || loading.value[type] || !hasMore.value[type]) return

  const { scrollTop, scrollHeight, clientHeight } = listRef.value
  // 當滾動到距離底部 50px 時觸發加載
  if (scrollHeight - scrollTop - clientHeight < 50) {
    loading.value[type] = true
    try {
      const newItems = await fetchData(type, page.value[type])
      if (newItems.length === 0) {
        hasMore.value[type] = false
      } else {
        const list = {
          news: newsList,
          'digital-world': digitalWorldList,
          'digital-articles': digitalArticlesList
        }[type]
        list.value.push(...newItems)
        page.value[type]++
      }
    } finally {
      loading.value[type] = false
    }
  }
}

// 初始化數據
const newsList = ref([])
const digitalWorldList = ref([])
const digitalArticlesList = ref([])

onMounted(async () => {
  // 初始加載數據
  loading.value.news = true
  loading.value.digitalWorld = true
  loading.value.digitalArticles = true

  try {
    const [news, digitalWorld, digitalArticles] = await Promise.all([
      fetchData('news', 1),
      fetchData('digital-world', 1),
      fetchData('digital-articles', 1)
    ])

    newsList.value = news
    digitalWorldList.value = digitalWorld
    digitalArticlesList.value = digitalArticles

    page.value.news = 2
    page.value.digitalWorld = 2
    page.value.digitalArticles = 2
  } finally {
    loading.value.news = false
    loading.value.digitalWorld = false
    loading.value.digitalArticles = false
  }
})
</script>

<style scoped>

.content-container {
  border-radius: 8px;
}

.article-list {
  height: 600px;
  overflow-y: auto;
  padding-right: 10px;
}

.article-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
}

.article-item:hover {
  background: #f8f9fa;
}

.article-image {
  flex: 0 0 200px;
  height: 120px;
  overflow: hidden;
  border-radius: 6px;
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
  margin: 0 0 10px 0;
  color: #2c3e50;
  font-size: 18px;
}

.article-content p {
  margin: 0 0 10px 0;
  color: #666;
  line-height: 1.6;
  flex: 1;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.article-tag {
  background: #e8f4ff;
  color: #1890ff;
  padding: 2px 8px;
  border-radius: 4px;
}

.article-time {
  color: #999;
}

.loading-more {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #666;
  gap: 8px;
}
</style>
