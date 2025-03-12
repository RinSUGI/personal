# nuxt_p

## UI 部分、Server 部分のソース配置について

クライアント側はフィーチャーベース、サーバー側はクリーンアーキテクチャの考え方を部分的に取り入れ、おのおののファイル配置場所を分けています。  
また、サーバー・クライアント双方で利用する型定義やユーティリティなどの共有コードは、専用ディレクトリにまとめています。

### ディレクトリ構成

```
nuxt_p/                             # プロジェクトのルートディレクトリ
├── .vscode/                        # エディターの設定ファイル（Pritterを適用するのに使用）
│   └── settings.json
├── db/                             # dbサービス関連のファイル（今回は未使用）
├── web/                            # webサービス関連のファイル
│   ├── .nuxt/                      # Nuxt自動生成物（グローバルコンポーネントなどのコンフィグ）
│   ├── .output/                    # Nuxt自動生成物（ビルド後の静的生成物など）
│   ├── app/                        # アプリケーション固有のテンプレートやリソース
│   │   └── spa-loading-template.html
│   ├── assets/                     # 全体で使用するstyleなど
│   │   └── styles/                 # グローバルstyle
│   │       └── global.css
│   ├── components/                 # 共通コンポーネント
│   ├── composables/                # UI固有のロジックや、状態管理、API 通信、サイドエフェクトの処理などをコンポーネント間で共通化する
│   ├── constants/                  # サーバー・クライアントどちらでも共通して利用する定数リソース
│   ├── layouts/                    # 共通レイアウト（ヘッダー、フッター、サイドバーなど）
│   ├── node_modules/               # webサービスの依存関係
│   ├── pages/                      # ルーティング先の各機能画面のvueファイル
│   │   ├── hoge/                   # hoge
│   │   ├── fuga/                   # fuga
│   │   ├── [...notFound].vue
│   │   └── index.vue
│   ├── prisma/                     # Prisma ORM のDBスキーマ定義やマイグレーションなど
│   │   ├── migrations/             # マイグレーションファイル
│   │   │   ├── 20250311025512_init/
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   └── schema.prisma
│   ├── public/                     #　公開用の静的ファイル
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── server/                     # ServerSide関連ファイル
│   │   ├── _docs/                  # ServerSideのドキュメント
│   │   │   └── openapi_back_office_user.yml
│   │   ├── api/                    # APIエンドポイント（必要なパラメータのパースやエラーハンドリングを行った上でControllerを呼び出すだけの薄いラッパー）
│   │   │   └── sample/             # サンプル用（ゆくゆくは削除予定）
│   │   │       └── users.ts
│   │   ├── config/                 # 環境設定やDB接続、外部サービスとの連携設定など（PrismaClient初期化など）
│   │   ├── controllers/            # apiのラッパーから呼ばれ、リクエストの内容に応じた入力検証や変換を行い、ビジネスロジックを担当するservicesの機能を呼ぶ
│   │   ├── dtos/                   # データ転送オブジェクト（DTO：リクエストの形式やレスポンスの形式定義。コントローラやサービス内で、リクエストデータの検証や変換のために利用）
│   │   ├── middlewares/            # HTTP リクエストの前後処理（例: 認証、ログ、エラーハンドリング、リクエスト検証など）を行う関数を配置
│   │   ├── models/                 # アプリケーションの内部ロジック用のドメインモデルやビジネスロジックに沿ったエンティティモデル定義
│   │   ├── repositories/           # データベースアクセスや外部APIとの通信など、データ取得・永続化の処理
│   │   ├── services/               # ユースケース／アプリケーションのビジネスロジックを実装する層
│   │   └── tsconfig.json
│   ├── types/                      # サーバー・クライアント共通の純粋な型定義やインターフェース（e.g. シンプルな型やAPIレスポンスの形式など）
│   ├── utils/                      # サーバー・クライアント共通の汎用処理
│   ├── .env
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── app.vue
│   ├── Dockerfile # 今回は入れていない
│   ├── eslint.config.mjs
│   ├── nuxt.config.ts
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── docker-compose.yml  # 今回は入れていない
└── README.md
```

### コード配置ルール

「ディレクトリ構成」ツリーの各ディレクトリコメントに準拠してソースコードを命名・配置。

# Docker Compose

Docker compose 関連の実装・動作確認メモ

## Start

以下で docker-compose.yml のサービスコンテナをまとめて起動

```bash
# 起動コマンド
docker compose up

# DockerFileやdocker-compose.ymlファイルに修正があってイメージをリビルドする場合は以下を実行
docker compose up --build
```

## メモ

### ◆ Mysql 側関連

#### Prisma による DB マイグレーション

schema.prisma に従って DB 環境を更新する手順

```bash
#　サービスをバックグラウンドで起動
docker compose up -d

# webサービスコンテナからDBにスキーマ内容を反映させる（--name のあとはどんなマイグレーションなのかを命名）
docker-compose exec web npx prisma migrate dev --name <任意の名前>
```

※もし以下のエラーが発生した場合は、root で mysql に入って user に編集権限を与える。

エラー内容

```bash
Error: P3014
Prisma Migrate could not create the shadow database. Please make sure the database user has permission to create databases. Read more about the shadow database (and workarounds) at https://pris.ly/d/migrate-shadow
Original error: Error code: P1010
User user was denied access on the database hoge
```

手順

```bash
# Mysqlコンテナにアクセス（パスワードはroot）
docker compose exec db mysql -u root -p
```

```sql
-- userにデータベース編集の権限を付与
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%';
FLUSH PRIVILEGES;
```

### ◆ Nuxt.js アプリ側関連

依存関係変更時、コンテナの node_modules に反映されているかを確認するには、コンテナを起動した状態で別のターミナルにて以下実行

```bash
docker compose exec web find /web/node_modules -type d -name '<特定のワード>'
```

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

```

Locally preview production build:

```bash
# npm
npm run preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
