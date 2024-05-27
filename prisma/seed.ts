import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * This Script Seeds the database with initial data
 * - Roles (admin, user)
 * - Users (admin, user1, user2, user3, user4)
 *
 * To execute this script, run the following command:
 * npx prisma db seed
 */

async function seedData() {
  await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: { name: "admin" },
  });

  await prisma.role.upsert({
    where: { name: "user" },
    update: {},
    create: { name: "user" },
  });

  for (let i = 0; i < 3; i++) {
    const rolesToCreate = [{ role: { connect: { name: "user" } } }];
    if (i === 0) rolesToCreate.push({ role: { connect: { name: "admin" } } });

    await prisma.user.upsert({
      where: { email: `${i === 0 ? "admin" : "user"}${i === 0 ? "" : i}@example.com` },
      update: {},
      create: {
        email: `${i === 0 ? "admin" : "user"}${i === 0 ? "" : i}@example.com`,
        name: `${i === 0 ? "Admin" : "User"}${i === 0 ? "" : i}`,
        roles: {
          create: rolesToCreate,
        },
      },
    });
  }
}

seedData()
  .catch((error) => {
    console.error("Error seeding data:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
