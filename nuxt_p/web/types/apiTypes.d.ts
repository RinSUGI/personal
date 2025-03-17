/**
 * API レスポンスの共通型定義
 *
 * @template T - レスポンスデータの型（デフォルトは unknown）
 * @property {boolean} success - 処理が成功したかどうかのフラグ
 * @property {(T | null)} data - 成功時のレスポンスデータ（失敗時は null）
 * @property {string} [message] - 付随するメッセージ
 * @property {object} [error] - エラー発生時の情報
 * @property {string} error.code - エラーコード
 * @property {string} error.message - エラーメッセージ
 * @property {unknown} [error.details] - エラーに関する追加情報
 */
export interface BaseApiResponse<T = unknown> {
  success: boolean;
  data: T | null;
  message?: string;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}
