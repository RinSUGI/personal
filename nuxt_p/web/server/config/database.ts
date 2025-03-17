import { PrismaClient } from '@prisma/client';

// ORMにPrismaを使う場合はこれを使用
const prisma = new PrismaClient();
export default prisma;
