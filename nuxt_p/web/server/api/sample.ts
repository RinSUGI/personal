import { defineEventHandler, setResponseStatus, type H3Event } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ApiResponse<T = unknown> {
  success: boolean;
  data: T | null;
  message?: string;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

class ApiError extends Error {
  code: string;
  details?: unknown;
  constructor(code: string, message: string, details?: unknown) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = 'ApiError';
  }
}

/**
 * Mysqlサーバーからデータを取得するためのサンプルAPI
 */
export default defineEventHandler(async (event: H3Event): Promise<ApiResponse> => {
  console.log('defineEventHandler', event.node.req.originalUrl);

  const body = {
    loginId: 'test001',
    name: 'テスト001',
    email: 'new@example.com',
  };

  const config = useRuntimeConfig();
  console.log('NUXT_ENV:', config.public.nuxtEnv);
  console.log('BASE_URL:', config.public.baseUrl);

  try {
    // 入力値のユーザーIDのユーザーが登録済みかどうかを検証
    const existingUser = await prisma.hogeUser.findUnique({
      where: { loginId: body.loginId },
    });

    if (existingUser === null) {
      console.log('not exists yet');

      // いなければ新規登録
      await prisma.hogeUser.create({
        data: body,
      });

      console.log('new user', body);

      return sendApiResponse(event, 200, {
        success: true,
        data: body,
        message: 'User created successfully',
      });
    } else {
      console.log('already exists');

      if (existingUser.name === body.name && existingUser.email === body.email) {
        // 入力内容がDB情報と全く同じであれば更新処理を実行しない
        console.log('no change');

        return sendApiResponse(event, 200, {
          success: true,
          data: existingUser,
          message: 'No changes made',
        });
      }

      // いればユーザー情報を更新
      await prisma.hogeUser.update({
        where: { loginId: body.loginId },
        data: {
          name: body.name,
          email: body.email,
        },
      });
    }

    console.log('end process', event.node.req.originalUrl);

    return sendApiResponse(event, 200, {
      success: true,
      data: body,
      message: 'User updated successfully',
    });
  } catch (error: unknown) {
    console.error('Failed to fetch data from mysql:', error);

    let message: string = 'unknown error occurred';
    let errorCode: string = 'INTERNAL_ERROR';
    let errorDetails: unknown = undefined;

    if (error instanceof ApiError) {
      // カスタムエラーの場合、コードや詳細をそのまま利用
      message = error.message;
      errorCode = error.code;
      errorDetails = error.details;
    } else if (error instanceof Error) {
      message = error.message;

      if (config.public.nuxtEnv === 'local') {
        // 開発環境ならスタックトレースを返す（本番環境では伏せる）
        errorDetails = error.stack;
      }
    }

    return sendApiResponse(event, 500, {
      success: false,
      data: null,
      message,
      error: {
        code: errorCode,
        message,
        details: errorDetails,
      },
    });
  }
});

export const sendApiResponse = <T>(
  event: H3Event,
  status: number,
  payload: ApiResponse<T>,
): ApiResponse<T> => {
  setResponseStatus(event, status);

  return payload;
};
