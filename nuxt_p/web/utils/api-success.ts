import type { ApiResponse } from '~/server/types/api-types';

/**
 * 成功レスポンスを共通フォーマットで生成するハンドラー
 *
 * @template T - レスポンスデータの型
 * @param {T} data - レスポンスとして返すデータ
 * @param {string} [message] - オプションのメッセージ
 * @returns {ApiResponse<T>} フォーマット済みの成功レスポンス
 */
export const handleSuccessResponse = <T>(data: T, message?: string): ApiResponse<T> => {
  return {
    success: true,
    data,
    message,
  };
};
