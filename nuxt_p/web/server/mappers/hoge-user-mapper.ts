import type { HogeUser as DomainHogeUser } from '~/server/models/hoge-user-model';
import type { HogeUser as PrismaHogeUser } from '@prisma/client';

/**
 * ORM（Prisma）の型からドメインモデルへの変換処理
 *
 * @param prismaUser - ORM が返す HogeUser オブジェクト
 * @returns {DomainHogeUser} ドメインモデルとしての HogeUser オブジェクト
 */
export const mapPrismaHogeUserToDomain = (prismaUser: PrismaHogeUser): DomainHogeUser => {
  return {
    id: prismaUser.id,
    loginId: prismaUser.loginId,
    name: prismaUser.name,
    email: prismaUser.email,
    passwordHash: prismaUser.passwordHash,
    createdAt: prismaUser.createdAt,
    updatedAt: prismaUser.updatedAt,
  };
};
