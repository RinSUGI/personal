import { type ZodSchema, z } from 'zod';
import type { CreateHogeUserDto } from '~/server/dtos/hoge-user-dto';

// HogeUser関連のリクエストパラメータ検証用スキーマ

/**
 * CreateHogeUserDto の検証スキーマ
 */
export const createHogeUserSchema: ZodSchema<CreateHogeUserDto> = z.object({
  loginId: z.string().min(1, { message: 'LoginId is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
});
