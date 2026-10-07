import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: {
    params: {
      id: string;
    };
  }
) {
  const car =
    await prisma.car.findUnique({
      where: {
        id: params.id,
      },

      include: {
        images: true,
        videos: true,
      },
    });

  return Response.json(car);
}
