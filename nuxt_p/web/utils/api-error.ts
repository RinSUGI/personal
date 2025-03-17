import { isLocal } from '~/composables/useEnv';
import { type ApiResponse, ApiError } from '~/server/types/api-types';

/**
 * エラーを受け取り、共通フォーマットのエラーレスポンスオブジェクトを返す
 *
 * @param {unknown} error - エラー
 * @returns {ApiResponse} ApiResponse形式のエラーレスポンス
 */
export const handleErrorResponse = (error: unknown): ApiResponse => {
  let errorCode: string = 'INTERNAL_ERROR';
  let message: string = 'Unknown error';
  let errorDetails: unknown = undefined;

  if (error instanceof ApiError) {
    // Controllersより下の層でApiErrorインスタンス（PJで規定したエラー）をthrowした場合に動くルート
    errorCode = error.code;
    message = error.message;
    errorDetails = error.details;
  } else if (error instanceof Error) {
    // 規定外のエラーが発生した場合に動くルート
    message = error.message;

    if (isLocal()) {
      // 開発環境の場合はスタックを格納
      errorDetails = error.stack;
    }
  }

  const errorResponse: ApiResponse = {
    success: false,
    data: null,
    message: message,
    error: {
      code: errorCode,
      message: message,
      details: errorDetails,
    },
  };

  return errorResponse;
};
