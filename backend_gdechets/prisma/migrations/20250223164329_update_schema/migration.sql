-- DropIndex
DROP INDEX `Alerte_poubelleId_fkey` ON `alerte`;

-- DropIndex
DROP INDEX `PoubelleConnectee_itineraireId_fkey` ON `poubelleconnectee`;

-- DropIndex
DROP INDEX `PoubelleConnectee_userId_fkey` ON `poubelleconnectee`;

-- AddForeignKey
ALTER TABLE `PoubelleConnectee` ADD CONSTRAINT `PoubelleConnectee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PoubelleConnectee` ADD CONSTRAINT `PoubelleConnectee_itineraireId_fkey` FOREIGN KEY (`itineraireId`) REFERENCES `Itineraire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alerte` ADD CONSTRAINT `Alerte_poubelleId_fkey` FOREIGN KEY (`poubelleId`) REFERENCES `PoubelleConnectee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
