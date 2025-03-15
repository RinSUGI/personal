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
  "web/pages"
  "web/pages/hoge/auth/login"
  "web/pages/hoge/auth/password-init"
  "web/pages/hoge/auth/password-reset"
  "web/pages/hoge/settings"
  "web/pages/hoge/user"
  "web/pages/hoge/user/upsert"
  "web/pages/hoge/user/edit-info"
  "web/pages/fuga/auth/login"
  "web/pages/fuga/auth/password-init"
  "web/pages/fuga/auth/password-reset"
  "web/pages/fuga/settings"
  "web/pages/fuga/user"
  "web/pages/fuga/user/upsert"
  "web/pages/fuga/user/edit-info"
  "web/server/config"
  "web/server/controllers"
  "web/server/dtos"
  "web/server/middlewares"
  "web/server/models"
  "web/server/repositories"
  "web/server/services"
  "web/types"
  "web/utils"
)

# 配列内の各ディレクトリを作成し、.gitkeep を配置
for dir in "${directories[@]}"; do
  mkdir -p "$dir"
  touch "$dir/.gitkeep"
done

echo "指定されたディレクトリ構造と .gitkeep ファイルが作成されました。"