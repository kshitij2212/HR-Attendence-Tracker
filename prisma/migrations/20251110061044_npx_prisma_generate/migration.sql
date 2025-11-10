/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Leave` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Payroll` table. All the data in the column will be lost.
  - You are about to drop the column `paidOn` on the `Payroll` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Payroll` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSalary` to the `Payroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `daysPresent` to the `Payroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `netSalary` to the `Payroll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Department` DROP COLUMN `createdAt`,
    ADD COLUMN `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Employee` DROP COLUMN `phone`,
    DROP COLUMN `position`,
    DROP COLUMN `salary`,
    DROP COLUMN `userId`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Leave` DROP COLUMN `type`,
    ADD COLUMN `reason` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Payroll` DROP COLUMN `amount`,
    DROP COLUMN `paidOn`,
    DROP COLUMN `year`,
    ADD COLUMN `baseSalary` DOUBLE NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `daysPresent` INTEGER NOT NULL,
    ADD COLUMN `deductions` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `netSalary` DOUBLE NOT NULL;

-- DropTable
DROP TABLE `User`;
