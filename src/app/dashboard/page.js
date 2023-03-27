import { UserButton } from '@clerk/nextjs/app-beta/client'
import { PrismaClient } from '@prisma/client'

export default async function Page() {
  const prisma = new PrismaClient()

  const users = await prisma.user.findMany()

  return (
    <div>
      Dashboard Page
      <UserButton />
      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  )
}

Page.propTypes = {}
