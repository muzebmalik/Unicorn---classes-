import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash('cyr123', 10);
  const studentPassword = await bcrypt.hash('student123', 10);

  await prisma.user.upsert({
    where: { email: 'sir@unicorn.com' },
    update: {},
    create: {
      email: 'sir@unicorn.com',
      name: 'Sir Unicorn',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  await prisma.user.upsert({
    where: { email: 'student@unicorn.com' },
    update: {},
    create: {
      email: 'student@unicorn.com',
      name: 'Student User',
      password: studentPassword,
      role: 'STUDENT',
    },
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