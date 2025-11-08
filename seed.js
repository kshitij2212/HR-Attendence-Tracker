import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.employee.create({
    data: {
      name: "emp1",
      email: "emp1@gmail.com",
      department: { create: { name: "HR" } },
    },
  });

  await prisma.employee.create({
    data: {
      name: "emp2",
      email: "emp2@gmail.com",
      department: { create: { name: "Finance" } },
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
