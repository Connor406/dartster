-- CreateTable
CREATE TABLE "traffic" (
    "ip" TEXT NOT NULL,
    "userAgent" TEXT,
    "location" TEXT,
    "vists" INTEGER NOT NULL DEFAULT 1,
    "firstVisit" TIMESTAMP(3) NOT NULL,
    "lastVisit" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "traffic_pkey" PRIMARY KEY ("ip")
);
