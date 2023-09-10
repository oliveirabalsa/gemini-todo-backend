/*
  Warnings:

  - The `priority` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "priority",
ADD COLUMN     "priority" TEXT DEFAULT 'LOW',
DROP COLUMN "status",
ADD COLUMN     "status" TEXT DEFAULT 'TODO';

-- DropEnum
DROP TYPE "EnumTaskPriority";

-- DropEnum
DROP TYPE "EnumTaskStatus";
