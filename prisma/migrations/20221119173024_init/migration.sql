-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nickname" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Impression" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" INTEGER NOT NULL,
    "timestamp" DATE NOT NULL,
    "comment" TEXT,
    "receiverId" UUID NOT NULL,
    "senderId" UUID NOT NULL,
    "animalId" UUID NOT NULL,

    CONSTRAINT "Impression_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpressionTag" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "impressionId" UUID NOT NULL,
    "tagId" UUID NOT NULL,

    CONSTRAINT "ImpressionTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Impression" ADD CONSTRAINT "Impression_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Impression" ADD CONSTRAINT "Impression_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Impression" ADD CONSTRAINT "Impression_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImpressionTag" ADD CONSTRAINT "ImpressionTag_impressionId_fkey" FOREIGN KEY ("impressionId") REFERENCES "Impression"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImpressionTag" ADD CONSTRAINT "ImpressionTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
