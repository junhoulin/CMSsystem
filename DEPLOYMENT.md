# GitHub Pages 部署指南

## 快速部署

### 方法一：使用部署腳本（推薦）

```bash
# Windows
deploy.bat

# Linux/Mac
./deploy.sh
```

### 方法二：手動部署

```bash
# 1. 構建應用程式
npm run build

# 2. 部署到 GitHub Pages
npm run deploy
```

## 配置說明

### 1. Vite 配置

- 已配置 `base: '/數智入口_前端_v1/'` 用於 GitHub Pages
- 支援生產環境和開發環境的不同路徑

### 2. Vue Router 配置

- 使用 `import.meta.env.BASE_URL` 自動適配基礎路徑
- 支援 HTML5 History API

### 3. GitHub Pages 設置

1. 前往您的 GitHub 倉庫
2. 點擊 `Settings` → `Pages`
3. 在 `Source` 部分選擇 `Deploy from a branch`
4. 選擇 `gh-pages` 分支
5. 點擊 `Save`

## 部署後訪問

您的應用程式將在以下地址可用：

```
https://[您的GitHub用戶名].github.io/數智入口_前端_v1/
```

## 注意事項

1. **首次部署**：可能需要 5-10 分鐘才能生效
2. **後續更新**：每次運行 `npm run deploy` 後，更新會在幾分鐘內生效
3. **路由問題**：GitHub Pages 會自動處理 Vue Router 的路由
4. **快取問題**：如果更新沒有立即顯示，請清除瀏覽器快取

## 故障排除

### 常見問題

1. **404 錯誤**

   - 確保 GitHub Pages 已啟用
   - 檢查 gh-pages 分支是否存在

2. **資源載入失敗**

   - 檢查 Vite 配置中的 base 路徑是否正確
   - 確保所有資源路徑都使用相對路徑

3. **路由不工作**
   - 確保使用 `createWebHistory` 模式
   - 檢查 `import.meta.env.BASE_URL` 配置

### 檢查部署狀態

```bash
# 檢查 gh-pages 分支
git branch -a

# 檢查部署歷史
git log --oneline gh-pages
```

## 自定義域名（可選）

如果您有自定義域名，可以：

1. 在 GitHub 倉庫設置中添加自定義域名
2. 修改 `vite.config.js` 中的 base 路徑
3. 重新部署應用程式
