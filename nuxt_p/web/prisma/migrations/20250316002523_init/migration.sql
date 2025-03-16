-- CreateTable
CREATE TABLE `HogeUser` (
    `id` VARCHAR(191) NOT NULL,
    `loginId` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `passwordHash` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `HogeUser_loginId_key`(`loginId`),
    UNIQUE INDEX `HogeUser_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HogeRefreshToken` (
    `id` VARCHAR(191) NOT NULL,
    `hogeUserId` VARCHAR(255) NOT NULL,
    `refreshTokenHash` VARCHAR(255) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `HogeRefreshToken_hogeUserId_key`(`hogeUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HogePasswordResetToken` (
    `id` VARCHAR(191) NOT NULL,
    `hogeUserId` VARCHAR(255) NOT NULL,
    `setType` ENUM('INIT', 'RESET') NOT NULL DEFAULT 'INIT',
    `passwordResetTokenHash` VARCHAR(255) NOT NULL,
    `tokenExpiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `HogePasswordResetToken_hogeUserId_key`(`hogeUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HogeRefreshToken` ADD CONSTRAINT `HogeRefreshToken_hogeUserId_fkey` FOREIGN KEY (`hogeUserId`) REFERENCES `HogeUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HogePasswordResetToken` ADD CONSTRAINT `HogePasswordResetToken_hogeUserId_fkey` FOREIGN KEY (`hogeUserId`) REFERENCES `HogeUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
