// prisma/seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const user1 =  await prisma.user.create({
    data: {
      userId: 1,
      userName: "Jack",
      userImg: "/block.gif"
    }
  });

  const user2 = await prisma.user.create({
    data: {
      userId: 2,
      userName: "Nana",
      userImg: "/hero.gif"
    }
  });

  await prisma.post.create({
    data: {
      id:1,
      userId: user1.userId,
      title: 'My first Post',
      body: 'This is the body of my 1 post',
      postTime: "2024.07.07",
      postImg: "/about.jpg"
    }
  });
  await prisma.post.create({
    data: {
      id:2,
      userId: user2.userId,
      title: 'My second Post',
      body: 'This is the body of my 2 post',
      postTime: "2024.07.07",
      postImg: "/contact.png"
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
