import { useRuntimeConfig } from '#imports';

/**
 * 環境種別を取得する処理
 *
 * @returns 環境種別
 */
export const getEnv = (): string => {
  const config = useRuntimeConfig();
  return config.public.nuxtEnv as string;
};

/**
 * ローカル環境であるかどうかを二値で返す処理
 *
 * @returns ローカル環境かどうか
 */
export const isLocal = (): boolean => {
  return getEnv() === 'local';
};
