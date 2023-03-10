// para executar o comando no package.json basta colocar no terminal "npm run dev"
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { appRoutes } from './route'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)
app.register(appRoutes)


app.listen({
    port: 3333,
}).then(()=> {
    console.log('HTTP Server running!')
})