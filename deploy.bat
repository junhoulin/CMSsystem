@echo off
chcp 65001 >nul
echo 🚀 開始部署到 GitHub Pages...

REM 檢查是否有未提交的更改
git status --porcelain >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  發現未提交的更改，請先提交您的更改：
    git status
    pause
    exit /b 1
)

REM 構建應用程式
echo 📦 構建應用程式...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ 構建失敗！
    pause
    exit /b 1
)

REM 部署到 GitHub Pages
echo 🌐 部署到 GitHub Pages...
call npm run deploy
if %errorlevel% equ 0 (
    echo ✅ 部署成功！
    echo 🔗 您的應用程式將在以下地址可用：
    echo    https://[您的GitHub用戶名].github.io/數智入口_前端_v1/
    echo.
    echo 📝 注意：
    echo    - 部署可能需要幾分鐘時間才能生效
    echo    - 請確保您的GitHub倉庫已啟用GitHub Pages功能
    echo    - 在Settings ^> Pages中選擇gh-pages分支作為源
) else (
    echo ❌ 部署失敗！
    pause
    exit /b 1
)

pause 