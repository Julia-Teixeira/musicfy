-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(125) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musics" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(125) NOT NULL,
    "album" VARCHAR(30) NOT NULL,
    "artist" VARCHAR(20) NOT NULL,
    "genre" VARCHAR(20) NOT NULL,
    "year" VARCHAR(4) NOT NULL,
    "cover_image" TEXT,
    "music_url" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "musics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "musics" ADD CONSTRAINT "musics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
