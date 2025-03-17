import { type ZodSchema, z } from 'zod';
import type { CreateHogeUserDto } from '~/server/dtos/hoge-user-dto';

// HogeUser関連のリクエストパラメータ検証用スキーマ

/**
 * CreateHogeUserDto の検証スキーマ
 */
export const createHogeUserSchema: ZodSchema<CreateHogeUserDto> = z.object({
  loginId: z
    .string() // 文字列であること
    .min(1, { message: 'LoginId is required' }) // 1文字以上
    .max(255, { message: 'invalid loginId length (>255)' }) // 255文字以内であること
    // 半角英数字に加え、ピリオド、アンダースコア、ハイフンを許容
    .regex(/^[a-zA-Z0-9._-]+$/, { message: 'invalid letters are included' }),
  name: z
    .string() // 文字列であること
    .min(1, { message: 'Name is required' }) // 1文字以上であること
    .max(255, { message: 'invalid loginId length (>255)' }) // 255文字以内であること
    // Unicode対応：文字（\p{L}）、合字（\p{M}）、空白（\p{Zs}）、アポストロフィ、ハイフン、数字を許容
    .regex(/^[\p{L}\p{M}\p{Zs}'’\-\d]+$/u, { message: 'invalid letters are included' }),
  email: z
    .string() // 文字列であること
    .max(255, { message: 'invalid loginId length (>255)' }) // 255文字以内であること
    .email({ message: 'invalid string for mail address' }), // メールアドレスのフォーマットであること
});
