import { defineEventHandler, type H3Event } from 'h3';
import { sendApiResponse } from '~/utils/api-utils';
import type { ApiResponse } from '~/server/types/api-types';
import { handleUpsertHogeUser } from '~/server/controllers/hoge-user-controller';

/**
 * Hogeユーザー登録・更新APIのエンドポイント
 *
 * @param {H3Event} event - 登録・更新するユーザー情報
 * @returns {Promise<ApiResponse>} ユーザー登録・更新結果
 */
export default defineEventHandler(async (event: H3Event): Promise<ApiResponse> => {
  console.log('defineEventHandler', event.node.req.originalUrl);

  const response = await handleUpsertHogeUser(event);

  // 成功・失敗に応じてレスポンスする
  return sendApiResponse(event, response.success ? 200 : 500, response);
});
