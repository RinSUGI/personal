import { z } from 'zod';
import type { CreateHogeUserDto } from '~/server/dtos/hoge-user-dto';

// CreateHogeUserDto の検証スキーマ
const createHogeUserSchema = z.object({
  loginId: z.string().min(1, { message: 'LoginId is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
});

/**
 * リクエストボディを検証し、問題があれば ZodError を throw する
 *
 * @param data - 検証対象のデータ
 * @returns {CreateHogeUserDto} 検証済みのデータ
 */
export const validateCreateHogeUserDto = (data: unknown): CreateHogeUserDto => {
  return createHogeUserSchema.parse(data);
};
