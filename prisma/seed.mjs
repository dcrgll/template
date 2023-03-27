import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'user 1',
      email: 'user1@example.com'
    }
  })
  await prisma.user.create({
    data: {
      name: 'user 2',
      email: 'user2@example.com'
    }
  })
  await prisma.user.create({
    data: {
      name: 'user 3',
      email: 'user3@example.com'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
