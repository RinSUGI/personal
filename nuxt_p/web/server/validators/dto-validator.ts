import { type ZodSchema, ZodError } from 'zod';
import { ApiError } from '~/server/types/api-types';

/**
 * 任意の DTO に対する汎用検証関数
 *
 * @template T - 検証後のデータの型
 * @param {ZodSchema<T>} schema - 検証に用いる Zod スキーマ
 * @param {unknown} data - 検証対象のデータ
 * @returns {T} 検証に成功したデータ
 * @throws {ApiError} 検証に失敗した場合、詳細なエラー情報を持つ ApiError をスローする
 */
export const validateDto = <T>(schema: ZodSchema<T>, data: unknown): T => {
  console.log('validate dto');
  try {
    // 検証通過済みのデータを返却
    return schema.parse(data);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      // 検証不通過の場合はZodエラーを共通Errorの形でthrowする
      throw new ApiError('VALIDATION_ERROR', 'Validation failed', error.errors);
    }
    // 未知のエラーの場合はそのままerrorオブジェクトをthrowする
    throw error;
  }
};
