// 入力・出力用のデータ型（DTO：Data Transfer Object）を定義

/**
 * 新規ユーザー登録時に使用するデータのDTOインターフェース
 *
 * @interface CreateHogeUserDto
 * @property {string} loginId - ユーザーのログインID（ユニークな識別子）
 * @property {string} name - ユーザーの名前
 * @property {string} email - ユーザーのメールアドレス
 */
export interface CreateHogeUserDto {
  loginId: string;
  name: string;
  email: string;
}

/**
 * ユーザー情報更新時に使用するデータのDTOインターフェース
 *
 * @interface UpdateHogeUserDto
 * @property {string} name - ユーザーの更新後の名前
 * @property {string} email - ユーザーの更新後のメールアドレス
 */
export interface UpdateHogeUserDto {
  name: string;
  email: string;
}
