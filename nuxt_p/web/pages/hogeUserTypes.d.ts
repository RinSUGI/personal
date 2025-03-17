import type { BaseApiResponse } from '~/types/apiTypes';

/**
 * HogeUser のデータ型
 *
 * @interface HogeUserData
 * @property {string} id - ユーザーの一意な識別子
 * @property {string} loginId - ログインID
 * @property {string} name - ユーザー名
 * @property {string | null} passwordHash - ハッシュ化されたパスワード
 * @property {string} email - メールアドレス
 * @property {string} createdAt - 作成日時
 * @property {string} updatedAt - 更新日時
 */
interface HogeUserData {
  id: string;
  loginId: string;
  name: string;
  passwordHash: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * HogeUser API のレスポンス型
 *
 * BaseApiResponse を拡張し、HogeUser のデータ型を data プロパティに指定する。
 *
 * @interface HogeUserResponse
 * @extends {BaseApiResponse<HogeUserData>}
 */
export type HogeUserResponse = BaseApiResponse<HogeUserData>;
