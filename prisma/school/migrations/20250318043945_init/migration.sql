-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "sub_titulo" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);
