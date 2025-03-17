import type { H3Event } from 'h3';
import type { CreateHogeUserDto } from '~/server/dtos/hoge-user-dto';
import type { ApiResponse } from '~/server/types/api-types';
import type { UpsertHogeUserResult } from '~/server/types/hoge-user-types';
import { upsertHogeUser } from '~/server/services/hoge-user-service';
import { handleSuccessResponse } from '~/utils/api-success';
import { handleErrorResponse } from '~/utils/api-error';
import { getApiRequestParams } from '~/utils/api-utils';
import { validateDto } from '~/server/validators/dto-validator';
import { createHogeUserSchema } from '~/server/validators/hoge-user-zod-schema';

/**
 * HogeUserのupsert（登録または更新）処理をハンドリングする処理
 * エラー発生時は、共通のエラーハンドリング処理により標準化されたエラーレスポンスを返す。
 *
 * @async
 * @param {H3Event} event - 受信したHTTPリクエストに関するH3イベントオブジェクト
 * @returns {Promise<ApiResponse>} APIレスポンスオブジェクト
 */
export const handleUpsertHogeUser = async (event: H3Event): Promise<ApiResponse> => {
  try {
    const { body } = await getApiRequestParams(event);
    console.log('request body:', body);

    // リクエスト内容を検証
    const validatedInput: CreateHogeUserDto = validateDto(createHogeUserSchema, body);

    // Hogeユーザー登録・更新処理結果取得
    const result: UpsertHogeUserResult = await upsertHogeUser(validatedInput);
    const message = result.isCreated ? 'User created successfully' : 'User updated successfully';
    const response: ApiResponse = handleSuccessResponse(result.hogeUser, message);

    console.log('end process', event.node.req.originalUrl);

    return response;
  } catch (error: unknown) {
    console.error('Error in controller', error);

    // エラーレスポンスを返却
    return handleErrorResponse(error);
  }
};
