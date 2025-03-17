import apiClient from '~/services/apiClient';
import type { AxiosRequestConfig } from 'axios';

/**
 * GET リクエスト送信処理
 *
 * @template T - レスポンスデータの型
 * @param {string} url - 呼び出す API エンドポイントの URL
 * @param {AxiosRequestConfig} [options] - 追加の Axios リクエスト設定（例：ヘッダー、パラメータ等）
 * @returns {Promise<T>} API のレスポンスデータ
 */
export const getRequest = async <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  return await apiClient.get(url, options);
};

/**
 * POST リクエスト送信処理
 *
 * @template T - レスポンスデータの型
 * @param {string} url - 呼び出す API エンドポイントの URL
 * @param {unknown} data - リクエストボディ（送信するデータ）
 * @param {AxiosRequestConfig} [options] - 追加の Axios リクエスト設定
 * @returns {Promise<T>} API のレスポンスデータ
 */
export const postRequest = async <T>(
  url: string,
  data?: unknown,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return await apiClient.post(url, data, options);
};

/**
 * PUT リクエスト送信処理
 *
 * @template T - レスポンスデータの型
 * @param {string} url - 呼び出す API エンドポイントの URL
 * @param {unknown} data - リクエストボディ（更新するデータ）
 * @param {AxiosRequestConfig} [options] - 追加の Axios リクエスト設定
 * @returns {Promise<T>} API のレスポンスデータ
 */
export const putRequest = async <T>(
  url: string,
  data?: unknown,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return await apiClient.put(url, data, options);
};

/**
 * DELETE リクエスト送信処理
 *
 * @template T - レスポンスデータの型
 * @param {string} url - 呼び出す API エンドポイントの URL
 * @param {AxiosRequestConfig} [options] - 追加の Axios リクエスト設定
 * @returns {Promise<T>} API のレスポンスデータ
 */
export const deleteRequest = async <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  return await apiClient.delete(url, options);
};
