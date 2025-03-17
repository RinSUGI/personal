/**
 * ドメインモデルとしての HogeUserインターフェース
 *
 * @interface HogeUser
 * @property {string} id - ユーザーの一意な識別子（例：UUID）
 * @property {string} loginId - ユーザーのログインID（ユニークな識別子）
 * @property {string} name - ユーザーの名前
 * @property {string | null} passwordHash - ハッシュ化されたパスワード
 * @property {string} email - ユーザーのメールアドレス
 * @property {Date} createdAt - ユーザーの作成日時
 * @property {Date} updatedAt - ユーザーの最終更新日時
 */
export interface HogeUser {
  id: string;
  loginId: string;
  name: string;
  passwordHash: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
