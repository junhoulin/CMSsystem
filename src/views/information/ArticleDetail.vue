<template>
  <div class="article-detail">
    <div class="content-container">
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

      <div class="article-content">
        <p>{{ article.content }}</p>
      </div>

      <div class="article-actions">
        <n-button @click="goBack">
          <template #icon>
            <n-icon><ArrowBackCircleOutline /></n-icon>
          </template>
          返回列表
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NTag, NIcon } from 'naive-ui'
import { ArrowBackCircleOutline } from '@vicons/ionicons5'

const route = useRoute()
const router = useRouter()

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
        title: `文章 ${id} 的標題`,
        content: '這是一篇詳細的文章內容。這裡可以包含更多的文字描述，圖片，以及其他相關信息。',
        image: `https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel${
          (id % 4) + 1
        }.jpeg`,
        tag: '示例標籤',
        time: '2024-03-21'
      })
    }, 500)
  })
}

const goBack = () => {
  router.back()
}

onMounted(async () => {
  const id = route.params.id
  const data = await fetchArticleDetail(id)
  article.value = data
})
</script>

<style scoped>
.article-detail {
  padding: 20px;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
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
  color: #666;
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
  color: #333;
  margin-bottom: 24px;
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
}
</style>
