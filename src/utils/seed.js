const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const teachers = [
    { name: "Ana Silva", departament: "Matemática" },
    { name: "João Oliveira", departament: "Física" },
    { name: "Maria Santos", departament: "Química" },
    { name: "Pedro Souza", departament: "Biologia" },
    { name: "Lucas Ferreira", departament: "História" },
    { name: "Carla Almeida", departament: "Geografia" },
    { name: "Marcos Lima", departament: "Filosofia" },
    { name: "Fernanda Costa", departament: "Sociologia" },
    { name: "Rafael Rocha", departament: "Educação Física" },
    { name: "Julia Barbosa", departament: "Inglês" },
    { name: "Roberto Cardoso", departament: "Espanhol" },
    { name: "Beatriz Menezes", departament: "Literatura" },
    { name: "Leonardo Mendes", departament: "Arte" },
    { name: "Camila Pinto", departament: "Música" },
    { name: "Bruno Ribeiro", departament: "Informática" },
    { name: "Daniela Azevedo", departament: "Psicologia" },
    { name: "Felipe Gonçalves", departament: "Economia" },
    { name: "Juliana Duarte", departament: "Direito" },
    { name: "André Moreira", departament: "Engenharia" },
    { name: "Mariana Teixeira", departament: "Medicina" }
  ];

  for (const teacher of teachers) {
    await prisma.teacher.create({
      data: teacher
    });
  }

  console.log('Professores adicionados com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
