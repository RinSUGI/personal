import prisma from '~/server/config/database';
import type { CreateHogeUserDto, UpdateHogeUserDto } from '~/server/dtos/hoge-user-dto';
import type { HogeUser } from '~/server/models/hoge-user-model';
import { mapPrismaHogeUserToDomain } from '~/server/mappers/hoge-user-mapper';
/**
 * loginId に基づいて HogeUser を検索し、HogeUser もしくは null を返す
 *
 * @param loginId - 検索対象のログインID
 * @returns {Promise<HogeUser | null>} HogeUser オブジェクトまたは null
 */
export const findHogeUserByLoginId = async (loginId: string): Promise<HogeUser | null> => {
  console.log('findHogeUserByLoginId');

  const hogeUser = await prisma.hogeUser.findUnique({
    where: { loginId },
  });

  if (hogeUser === null) {
    return null;
  }

  return mapPrismaHogeUserToDomain(hogeUser);
};

/**
 * 新規 HogeUser を作成する。
 *
 * @param data - 作成に必要なデータ
 * @returns {Promise<HogeUser>} 作成された HogeUser オブジェクト
 */
export const createHogeUser = async (data: CreateHogeUserDto): Promise<HogeUser> => {
  console.log('createHogeUser');

  const newHogeUser = await prisma.hogeUser.create({
    data,
  });

  return mapPrismaHogeUserToDomain(newHogeUser);
};

/**
 * loginId に基づいて HogeUser を更新する。
 *
 * @param loginId - 更新対象のログインID
 * @param data - 更新するデータ
 * @returns {Promise<HogeUser>} 更新後の HogeUser オブジェクト
 */
export const updateHogeUser = async (
  loginId: string,
  data: UpdateHogeUserDto,
): Promise<HogeUser> => {
  console.log('updateHogeUser');

  return await prisma.hogeUser.update({
    where: { loginId },
    data,
  });
};
