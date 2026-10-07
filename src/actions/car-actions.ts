"use server";

import { prisma } from "@/lib/prisma";

export async function getCars() {
  return prisma.car.findMany({
    include: {
      images: true,
    },
  });
}
