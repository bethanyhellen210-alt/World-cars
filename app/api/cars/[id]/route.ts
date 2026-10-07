import { prisma } from "@/lib/prisma";
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params; const car=await prisma.car.findUnique({where:{id},include:{images:true,videos:true}}); if(!car)return Response.json({error:"Vehicle not found"},{status:404}); return Response.json(car)}
