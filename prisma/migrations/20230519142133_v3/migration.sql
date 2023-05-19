/*
  Warnings:

  - Made the column `fechaProbableDeMuerte` on table `Cliente` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "fechaDeNacimiento" SET DATA TYPE TEXT,
ALTER COLUMN "fechaProbableDeMuerte" SET NOT NULL,
ALTER COLUMN "fechaProbableDeMuerte" SET DATA TYPE TEXT;
