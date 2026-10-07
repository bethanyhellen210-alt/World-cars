import { prisma } from "@/lib/prisma";
export async function GET(){const cars=await prisma.car.findMany({include:{images:true,videos:true},orderBy:{createdAt:"desc"}}); return Response.json(cars)}
