import { PrismaClient } from '@prisma/client'

const isProd = process.env.NODE_ENV === 'production'

export const prisma =
  global.prisma ||
  new PrismaClient({
    ...(!isProd && { log: ['error'] }),
  })

if (!isProd) global.prisma = prisma
