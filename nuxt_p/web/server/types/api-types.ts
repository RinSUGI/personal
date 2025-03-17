import type { HTTPHeaderName } from 'h3';

/**
 * APIレスポンスの共通フォーマット定義
 *
 * @template T - レスポンスデータの型（デフォルトはunknown）
 * @property {boolean} success - 処理成功・失敗フラグ
 * @property {(T | null)} data - 成功時のレスポンスデータ。失敗時はnull
 * @property {string} [message] - レスポンスに付随するメッセージ
 * @property {Object} [error] - エラー発生時の詳細情報
 * @property {string} error.code - エラーコード
 * @property {string} error.message - エラーメッセージ
 * @property {unknown} [error.details] - エラーに関する追加情報
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T | null;
  message?: string;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

/**
 * APIリクエストパラメータの共通フォーマット定義
 *
 * @template T - リクエストボディのデータ型（デフォルトはunknown）
 * @property {T} body - リクエストボディのデータ
 * @property {string} method - HTTPメソッド（GET, POSTなど）
 * @property {Partial<Record<HTTPHeaderName, string | undefined>>} headers - リクエストヘッダー
 * @property {unknown} query - URLのクエリパラメータ
 */
export interface ApiRequestParams<T = unknown> {
  body: T;
  method: string;
  headers: Partial<Record<HTTPHeaderName, string | undefined>>;
  query: unknown;
}

/**
 * カスタムエラークラス
 * 未知のエラーに対してstackなどの情報を取得するために標準のErrorクラスを拡張
 *
 * @class ApiError
 * @extends {Error}
 * @property {string} code - エラーコード
 * @property {unknown} [details] - エラーに関する追加情報
 */
export class ApiError extends Error {
  code: string;
  details?: unknown;
  constructor(code: string, message: string, details?: unknown) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = 'ApiError';
  }
}
