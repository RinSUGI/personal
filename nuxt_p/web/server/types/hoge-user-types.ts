import type { HogeUser } from '~/server/models/hoge-user-model';

/**
 * HogeUserのupsert処理結果インターフェース
 *
 * @interface UpsertHogeUserResult
 * @property {HogeUser} hogeUser - 登録または更新されたHogeUserオブジェクト
 * @property {boolean} isCreated - Hogeユーザーが新規作成されたかどうかを示すフラグ
 */
export interface UpsertHogeUserResult {
  hogeUser: HogeUser;
  isCreated: boolean;
}
