-- CreateTable
CREATE TABLE `PointDeCollecte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `localisation` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `itineraireId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PointDeCollecte_userId_key`(`userId`),
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
    `capteurID` VARCHAR(191) NOT NULL,
    `pointDeCollecteId` INTEGER NOT NULL,
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
ALTER TABLE `PointDeCollecte` ADD CONSTRAINT `PointDeCollecte_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PointDeCollecte` ADD CONSTRAINT `PointDeCollecte_itineraireId_fkey` FOREIGN KEY (`itineraireId`) REFERENCES `Itineraire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PoubelleConnectee` ADD CONSTRAINT `PoubelleConnectee_pointDeCollecteId_fkey` FOREIGN KEY (`pointDeCollecteId`) REFERENCES `PointDeCollecte`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alerte` ADD CONSTRAINT `Alerte_poubelleId_fkey` FOREIGN KEY (`poubelleId`) REFERENCES `PoubelleConnectee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
