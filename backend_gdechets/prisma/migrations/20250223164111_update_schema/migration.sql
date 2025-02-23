-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_telephone_key`(`telephone`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Itineraire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `heureDepart` DATETIME(3) NOT NULL,
    `chauffeurId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PoubelleConnectee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `niveauRemplissage` INTEGER NOT NULL,
    `etat` VARCHAR(191) NOT NULL,
    `localisation` VARCHAR(191) NOT NULL,
    `userId` INTEGER NULL,
    `itineraireId` INTEGER NULL,
    `capteurID` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PoubelleConnectee_capteurID_key`(`capteurID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alerte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `message` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `poubelleId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PoubelleConnectee` ADD CONSTRAINT `PoubelleConnectee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PoubelleConnectee` ADD CONSTRAINT `PoubelleConnectee_itineraireId_fkey` FOREIGN KEY (`itineraireId`) REFERENCES `Itineraire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alerte` ADD CONSTRAINT `Alerte_poubelleId_fkey` FOREIGN KEY (`poubelleId`) REFERENCES `PoubelleConnectee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
