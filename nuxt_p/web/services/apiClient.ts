import { useRuntimeConfig } from '#imports';
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

// 環境変数取得
const config = useRuntimeConfig();

// APIクライアント用の設定（ベースURLなどの共通設定をここに記述）
const apiConfig: AxiosRequestConfig = {
  baseURL: config.public.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Axios のインスタンスを作成し、共通設定やエラーハンドリングを設定
const apiClient: AxiosInstance = axios.create(apiConfig);

// レスポンスの共通エラーハンドリングを設定するインターセプター
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: unknown) => {
    // 必要に応じたエラーハンドリング処理をここで実施
    return Promise.reject(error);
  },
);

export default apiClient;
