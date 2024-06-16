const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const disciplines = [
    { name: "Matemática" },
    { name: "Física" },
    { name: "Química" },
    { name: "Biologia" },
    { name: "História" },
    { name: "Geografia" },
    { name: "Filosofia" },
    { name: "Sociologia" },
    { name: "Educação Física" },
    { name: "Inglês" },
    { name: "Espanhol" },
    { name: "Literatura" },
    { name: "Arte" },
    { name: "Música" },
    { name: "Informática" },
    { name: "Psicologia" },
    { name: "Economia" },
    { name: "Direito" },
    { name: "Engenharia" },
    { name: "Medicina" }
  ];

  for (const discipline of disciplines) {
    await prisma.discipline.create({
      data: discipline
    });
  }

  console.log('Disciplinas adicionadas com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
