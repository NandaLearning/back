-- CreateTable
CREATE TABLE "Biodata" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "usia" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Biodata_pkey" PRIMARY KEY ("id")
);
