/*
  Warnings:

  - You are about to alter the column `timestamp` on the `server_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `server_log` MODIFY `timestamp` DATETIME NOT NULL;
