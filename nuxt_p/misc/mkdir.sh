#!/bin/bash
# UI 関連のディレクトリ構造を作成するスクリプト
# プロジェクトのルートが現在のディレクトリにあり、web/pages/ などを作成します

# 作成するディレクトリのリスト
directories=(
  "web/assets/styles"
  "web/components"
  "web/composables"
  "web/constants"
  "web/layouts"
  "web/types"
  "web/utils"
  "web/pages/admin/auth/login"
  "web/pages/admin/auth/password-init"
  "web/pages/admin/auth/password-reset"
  "web/pages/admin/institution"
  "web/pages/admin/institution/analysis"
  "web/pages/admin/institution/user"
  "web/pages/admin/institution/user/upsert"
  "web/pages/admin/settings"
  "web/pages/admin/user"
  "web/pages/admin/user/upsert"
  "web/pages/admin/user/edit-info"
  "web/pages/medical/auth/login"
  "web/server/config"
  "web/server/controllers"
  "web/server/dtos"
  "web/server/middlewares"
  "web/server/models"
  "web/server/repositories"
  "web/server/services"
)

# 配列内の各ディレクトリを作成し、.gitkeep を配置
for dir in "${directories[@]}"; do
  mkdir -p "$dir"
  touch "$dir/.gitkeep"
done

echo "指定されたディレクトリ構造と .gitkeep ファイルが作成されました。"
