import { PrismaClient } from ".prisma/client"
import { users } from "./data/users"

const prisma = new PrismaClient()

async function main() {
  for (const user of users) {
    const newUser = await prisma.user.create({
      data: { ...user, createdAt: new Date(), updatedAt: new Date() },
    })
    const randomNum = Math.floor(Math.random() * 100)
    await prisma.user_stats.create({
      data: { user_id: newUser.id, wins: randomNum, losses: randomNum, points: randomNum * 20 },
    })
  }
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect
  })
