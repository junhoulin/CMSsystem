<template>
  <div class="editor-container">
    <div id="editor"></div>
    <!-- 圖片URL輸入 Modal -->
    <n-modal
      v-model:show="showImageModal"
      preset="dialog"
      title="插入圖片"
      positive-text="確定"
      negative-text="取消"
      @positive-click="handleImageConfirm"
      @negative-click="showImageModal = false"
    >
      <n-input
        v-model:value="imageUrl"
        type="text"
        placeholder="請輸入圖片URL"
        @keyup.enter="handleImageConfirm"
      />
    </n-modal>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css' // 引入樣式
import { NModal, NInput } from 'naive-ui'

let quill = null
const showImageModal = ref(false)
const imageUrl = ref('')

// 自定義圖片處理器
const ImageHandler = {
  init() {
    const toolbar = quill.getModule('toolbar')
    toolbar.addHandler('image', () => {
      showImageModal.value = true
    })
  }
}

// 處理圖片確認
const handleImageConfirm = () => {
  if (imageUrl.value) {
    const range = quill.getSelection(true) // 強制獲取選中位置
    if (!range) {
      // 如果沒有選中位置，則在編輯器末尾插入
      const length = quill.getLength()
      quill.insertEmbed(length - 1, 'image', imageUrl.value)
    } else {
      quill.insertEmbed(range.index, 'image', imageUrl.value)
    }
    imageUrl.value = ''
    showImageModal.value = false
  }
}

onMounted(() => {
  // 初始化 Quill
  quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // 文字格式
        ['blockquote', 'code-block'], // 引用和代碼塊
        [{ header: 1 }, { header: 2 }], // 標題
        [{ list: 'ordered' }, { list: 'bullet' }], // 列表
        [{ script: 'sub' }, { script: 'super' }], // 上下標
        [{ indent: '-1' }, { indent: '+1' }], // 縮進
        [{ direction: 'rtl' }], // 文字方向
        [{ size: ['small', false, 'large', 'huge'] }], // 字體大小
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 標題級別
        [{ color: [] }, { background: [] }], // 顏色
        [{ font: [] }], // 字體
        [{ align: [] }], // 對齊方式
        ['clean'], // 清除格式
        ['link', 'image', 'video'] // 鏈接、圖片、視頻
      ]
    }
  })

  // 初始化圖片處理器
  ImageHandler.init()

  // 監聽內容變化
  quill.on('text-change', (delta, oldDelta, source) => {
    if (source === 'user') {
      console.log('內容已更新:', quill.root.innerHTML)
    }
  })
})

// 獲取編輯器內容
const getContent = () => {
  return quill.root.innerHTML
}

// 設置編輯器內容
const setContent = content => {
  quill.root.innerHTML = content
}

// 組件銷毀時清理
onBeforeUnmount(() => {
  if (quill) {
    quill = null
  }
})
</script>

<style scoped>
.editor-container {
  width: 100%;
  height: 280px;
  margin-bottom: 20px;
}

#editor {
  height: 100%;
  overflow: hidden; /* 防止編輯器容器溢出 */
}

:deep(.ql-container) {
  height: 350px; /* 設置容器高度 */
  overflow: hidden; /* 防止容器溢出 */
}
</style>
