import {
  findHogeUserByLoginId,
  createHogeUser,
  updateHogeUser,
} from '~/server/repositories/hoge-user-repository';
import type { CreateHogeUserDto } from '~/server/dtos/hoge-user-dto';
import type { UpsertHogeUserResult } from '~/server/types/hoge-user-types';
import type { HogeUser } from '~/server/models/hoge-user-model';

/**
 * HogeUserの登録または更新（upsert）処理を行うサービス処理
 *
 * @param {CreateHogeUserDto} input - Hogeユーザーの登録・更新に必要なデータ
 * @returns {Promise<UpsertHogeUserResult>} 登録・更新結果
 */
export const upsertHogeUser = async (input: CreateHogeUserDto): Promise<UpsertHogeUserResult> => {
  console.log('upsertHogeUser');
  const existingUser = await findHogeUserByLoginId(input.loginId);

  if (existingUser === null) {
    console.log('not exists yet');

    // いなければ新規登録
    const newHogeUser: HogeUser = await createHogeUser(input);

    return { hogeUser: newHogeUser, isCreated: true };
  }

  if (existingUser.name === input.name && existingUser.email === input.email) {
    // 入力内容がDB情報と全く同じであれば更新処理を実行しない
    console.log('no change');

    return { hogeUser: existingUser, isCreated: false };
  }

  // 入力内容に更新があった場合のみ更新処理実行
  const updatedHogeUser: HogeUser = await updateHogeUser(input.loginId, {
    name: input.name,
    email: input.email,
  });

  return { hogeUser: updatedHogeUser, isCreated: false };
};
