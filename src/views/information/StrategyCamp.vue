<template>
  <div class="information">
    <div class="content-container" ref="contentContainer">
      <h2 class="section-title">策略營地</h2>
      <n-tabs type="line" animated>
        <n-tab-pane name="strategy-analysis" tab="策略解析">
          <div class="category-filter">
            <n-select
              v-model:value="selectedSubcategory['strategy-analysis']"
              :options="subcategories['strategy-analysis']"
              placeholder="選擇子分類"
              @update:value="handleSubcategoryChange('strategy-analysis')"
            />
          </div>
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
                v-for="(item, index) in strategyAnalysisList"
                :key="index"
                @click="goToArticleDetail('strategy-analysis', index)"
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
              v-model:page="page['strategy-analysis']"
              :page-count="totalPages['strategy-analysis']"
              @update:page="handlePageChange('strategy-analysis')"
              simple
            />
          </div>
        </n-tab-pane>

        <n-tab-pane name="digital-native" tab="數智原生">
          <div class="category-filter">
            <n-select
              v-model:value="selectedSubcategory['digital-native']"
              :options="subcategories['digital-native']"
              placeholder="選擇子分類"
              @update:value="handleSubcategoryChange('digital-native')"
            />
          </div>
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
                v-for="(item, index) in digitalNativeList"
                :key="index"
                @click="goToArticleDetail('digital-native', index)"
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
              v-model:page="page['digital-native']"
              :page-count="totalPages['digital-native']"
              @update:page="handlePageChange('digital-native')"
              simple
            />
          </div>
        </n-tab-pane>

        <n-tab-pane name="digital-scenario" tab="數智場景">
          <div class="category-filter">
            <n-select
              v-model:value="selectedSubcategory['digital-scenario']"
              :options="subcategories['digital-scenario']"
              placeholder="選擇子分類"
              @update:value="handleSubcategoryChange('digital-scenario')"
            />
          </div>
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
                v-for="(item, index) in digitalScenarioList"
                :key="index"
                @click="goToArticleDetail('digital-scenario', index)"
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
              v-model:page="page['digital-scenario']"
              :page-count="totalPages['digital-scenario']"
              @update:page="handlePageChange('digital-scenario')"
              simple
            />
          </div>
        </n-tab-pane>

        <n-tab-pane name="success-story" tab="成功典範">
          <div class="category-filter">
            <n-select
              v-model:value="selectedSubcategory['success-story']"
              :options="subcategories['success-story']"
              placeholder="選擇子分類"
              @update:value="handleSubcategoryChange('success-story')"
            />
          </div>
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
                v-for="(item, index) in successStoryList"
                :key="index"
                @click="goToArticleDetail('success-story', index)"
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
              v-model:page="page['success-story']"
              :page-count="totalPages['success-story']"
              @update:page="handlePageChange('success-story')"
              simple
            />
          </div>
        </n-tab-pane>

        <n-tab-pane name="best-rating" tab="最牛評比">
          <div class="category-filter">
            <n-select
              v-model:value="selectedSubcategory['best-rating']"
              :options="subcategories['best-rating']"
              placeholder="選擇子分類"
              @update:value="handleSubcategoryChange('best-rating')"
            />
          </div>
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
                v-for="(item, index) in bestRatingList"
                :key="index"
                @click="goToArticleDetail('best-rating', index)"
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
              v-model:page="page['best-rating']"
              :page-count="totalPages['best-rating']"
              @update:page="handlePageChange('best-rating')"
              simple
            />
          </div>
        </n-tab-pane>

        <n-tab-pane name="strategy-badge" tab="策略勳章">
          <div class="category-filter">
            <n-select
              v-model:value="selectedSubcategory['strategy-badge']"
              :options="subcategories['strategy-badge']"
              placeholder="選擇子分類"
              @update:value="handleSubcategoryChange('strategy-badge')"
            />
          </div>
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
                v-for="(item, index) in strategyBadgeList"
                :key="index"
                @click="goToArticleDetail('strategy-badge', index)"
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
              v-model:page="page['strategy-badge']"
              :page-count="totalPages['strategy-badge']"
              @update:page="handlePageChange('strategy-badge')"
              simple
            />
          </div>
        </n-tab-pane>

        <n-tab-pane name="industry-case" tab="行業案例">
          <div class="category-filter">
            <n-select
              v-model:value="selectedSubcategory['industry-case']"
              :options="subcategories['industry-case']"
              placeholder="選擇子分類"
              @update:value="handleSubcategoryChange('industry-case')"
            />
          </div>
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
                v-for="(item, index) in industryCaseList"
                :key="index"
                @click="goToArticleDetail('industry-case', index)"
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
              v-model:page="page['industry-case']"
              :page-count="totalPages['industry-case']"
              @update:page="handlePageChange('industry-case')"
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
import { NTabs, NTabPane, NTag, NPagination, NSkeleton, NInput, NIcon, NSelect } from 'naive-ui'
import { useRouter } from 'vue-router'
import { Search as SearchIcon } from '@vicons/ionicons5'

const router = useRouter()
const searchTag = ref('')

const contentContainer = ref(null)
const loading = ref(true)

// 分頁數據
const page = ref({
  'strategy-analysis': 1,
  'digital-native': 1,
  'digital-scenario': 1,
  'success-story': 1,
  'best-rating': 1,
  'strategy-badge': 1,
  'industry-case': 1
})

// 總頁數
const totalPages = ref({
  'strategy-analysis': 10,
  'digital-native': 10,
  'digital-scenario': 10,
  'success-story': 10,
  'best-rating': 10,
  'strategy-badge': 10,
  'industry-case': 10
})

// 列表數據
const strategyAnalysisList = ref([])
const digitalNativeList = ref([])
const digitalScenarioList = ref([])
const successStoryList = ref([])
const bestRatingList = ref([])
const strategyBadgeList = ref([])
const industryCaseList = ref([])

// 子分類數據
const subcategories = ref({
  'strategy-analysis': [
    { label: '全部', value: 'all' },
    { label: '數位轉型', value: 'digital-transformation' },
    { label: '創新策略', value: 'innovation-strategy' },
    { label: '市場分析', value: 'market-analysis' }
  ],
  'digital-native': [
    { label: '全部', value: 'all' },
    { label: '數位原生企業', value: 'digital-native-enterprise' },
    { label: '數位原生產品', value: 'digital-native-product' },
    { label: '數位原生服務', value: 'digital-native-service' }
  ],
  'digital-scenario': [
    { label: '全部', value: 'all' },
    { label: '智慧零售', value: 'smart-retail' },
    { label: '智慧製造', value: 'smart-manufacturing' },
    { label: '智慧金融', value: 'smart-finance' }
  ],
  'success-story': [
    { label: '全部', value: 'all' },
    { label: '企業案例', value: 'enterprise-case' },
    { label: '產品案例', value: 'product-case' },
    { label: '服務案例', value: 'service-case' }
  ],
  'best-rating': [
    { label: '全部', value: 'all' },
    { label: '產品評比', value: 'product-rating' },
    { label: '服務評比', value: 'service-rating' },
    { label: '解決方案評比', value: 'solution-rating' }
  ],
  'strategy-badge': [
    { label: '全部', value: 'all' },
    { label: '數位轉型勳章', value: 'digital-transformation-badge' },
    { label: '創新勳章', value: 'innovation-badge' },
    { label: '卓越勳章', value: 'excellence-badge' }
  ],
  'industry-case': [
    { label: '全部', value: 'all' },
    { label: '製造業', value: 'manufacturing' },
    { label: '零售業', value: 'retail' },
    { label: '金融業', value: 'finance' }
  ]
})

// 當前選中的子分類
const selectedSubcategory = ref({
  'strategy-analysis': 'all',
  'digital-native': 'all',
  'digital-scenario': 'all',
  'success-story': 'all',
  'best-rating': 'all',
  'strategy-badge': 'all',
  'industry-case': 'all'
})

// 處理搜尋
const handleSearch = value => {
  // 重置所有列表的頁碼
  Object.keys(page.value).forEach(key => {
    page.value[key] = 1
  })

  // 重新獲取所有列表的數據
  onMounted()
}

// 處理子分類變化
const handleSubcategoryChange = async type => {
  loading.value = true
  // 重置頁碼
  page.value[type] = 1
  // 重新獲取數據
  const list = {
    'strategy-analysis': strategyAnalysisList,
    'digital-native': digitalNativeList,
    'digital-scenario': digitalScenarioList,
    'success-story': successStoryList,
    'best-rating': bestRatingList,
    'strategy-badge': strategyBadgeList,
    'industry-case': industryCaseList
  }[type]

  const newItems = await fetchData(type, 1, selectedSubcategory.value[type])
  list.value = newItems
  loading.value = false
}

// 修改 fetchData 函數以支持子分類
const fetchData = async (type, pageNum, subcategory = 'all') => {
  // 這裡模擬API請求，實際使用時替換為真實的API調用
  return new Promise(resolve => {
    setTimeout(() => {
      const newItems = Array(12)
        .fill(null)
        .map((_, index) => ({
          title: `${type} ${subcategory !== 'all' ? subcategory + ' ' : ''}文章 ${
            pageNum * 12 + index + 1
          }`,
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
    'strategy-analysis': strategyAnalysisList,
    'digital-native': digitalNativeList,
    'digital-scenario': digitalScenarioList,
    'success-story': successStoryList,
    'best-rating': bestRatingList,
    'strategy-badge': strategyBadgeList,
    'industry-case': industryCaseList
  }[type]

  const newItems = await fetchData(type, page.value[type], selectedSubcategory.value[type])
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
    'strategy-analysis': 'strategy-analysis',
    'digital-native': 'digital-native',
    'digital-scenario': 'digital-scenario',
    'success-story': 'success-story',
    'best-rating': 'best-rating',
    'strategy-badge': 'strategy-badge',
    'industry-case': 'industry-case'
  }[type]

  const id = page.value[pageType] * 12 + index + 1
  router.push(`/Information/article/${id}`)
}

// 初始化數據
onMounted(async () => {
  loading.value = true
  const [
    strategyAnalysis,
    digitalNative,
    digitalScenario,
    successStory,
    bestRating,
    strategyBadge,
    industryCase
  ] = await Promise.all([
    fetchData('strategy-analysis', 1, selectedSubcategory.value['strategy-analysis']),
    fetchData('digital-native', 1, selectedSubcategory.value['digital-native']),
    fetchData('digital-scenario', 1, selectedSubcategory.value['digital-scenario']),
    fetchData('success-story', 1, selectedSubcategory.value['success-story']),
    fetchData('best-rating', 1, selectedSubcategory.value['best-rating']),
    fetchData('strategy-badge', 1, selectedSubcategory.value['strategy-badge']),
    fetchData('industry-case', 1, selectedSubcategory.value['industry-case'])
  ])

  strategyAnalysisList.value = strategyAnalysis
  digitalNativeList.value = digitalNative
  digitalScenarioList.value = digitalScenario
  successStoryList.value = successStory
  bestRatingList.value = bestRating
  strategyBadgeList.value = strategyBadge
  industryCaseList.value = industryCase
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

.search-container {
  margin: 16px 0;
  max-width: 300px;
}

:deep(.n-input) {
  width: 100%;
}

.category-filter {
  margin-bottom: 16px;
  max-width: 200px;
}
</style>
