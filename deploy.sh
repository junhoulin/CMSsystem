#!/bin/bash

# GitHub Pages 部署腳本
echo "🚀 開始部署到 GitHub Pages..."

# 檢查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  發現未提交的更改，請先提交您的更改："
    git status
    exit 1
fi

# 構建應用程式
echo "📦 構建應用程式..."
npm run build

# 檢查構建是否成功
if [ $? -ne 0 ]; then
    echo "❌ 構建失敗！"
    exit 1
fi

# 部署到 GitHub Pages
echo "🌐 部署到 GitHub Pages..."
npm run deploy

# 檢查部署是否成功
if [ $? -eq 0 ]; then
    echo "✅ 部署成功！"
    echo "🔗 您的應用程式將在以下地址可用："
    echo "   https://[您的GitHub用戶名].github.io/數智入口_前端_v1/"
    echo ""
    echo "📝 注意："
    echo "   - 部署可能需要幾分鐘時間才能生效"
    echo "   - 請確保您的GitHub倉庫已啟用GitHub Pages功能"
    echo "   - 在Settings > Pages中選擇gh-pages分支作為源"
else
    echo "❌ 部署失敗！"
    exit 1
fi 