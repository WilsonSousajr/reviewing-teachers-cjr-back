const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migratePasswords() {
  try {
    const users = await prisma.user.findMany();
    const saltRounds = 10;

    for (const user of users) {
      if (user.password && !user.password.startsWith('$2b$')) { // Verifique se a senha não está hasheada
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        await prisma.user.update({
          where: { id: user.id },
          data: { password: hashedPassword },
        });
        console.log(`Password for user ${user.email} has been hashed and updated.`);
      }
    }

    console.log('Password migration completed.');
  } catch (error) {
    console.error('Error during password migration:', error);
  } finally {
    await prisma.$disconnect();
  }
}

migratePasswords();
