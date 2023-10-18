import { PrismaClient } from "@prisma/client";

let prismaInstace = null;

const getPrismaInstance =()=>{
    if(!prismaInstace){
        prismaInstace = new PrismaClient()
    }
    return prismaInstace
}

export default getPrismaInstance