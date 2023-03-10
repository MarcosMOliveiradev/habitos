import { FastifyInstance } from "fastify"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function appRoutes(app: FastifyInstance) {
    app.get('/', async ()=> {
       const habits = await prisma.habit.findMany()
    
       
       return habits
    })
}
