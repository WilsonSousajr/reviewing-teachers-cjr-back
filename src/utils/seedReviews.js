const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({ select: { id: true } });
  const teachers = await prisma.teacher.findMany({ select: { id: true } });
  const disciplines = await prisma.discipline.findMany({ select: { id: true } });

  const userIds = users.map(user => user.id);
  const teacherIds = teachers.map(teacher => teacher.id);
  const disciplineIds = disciplines.map(discipline => discipline.id);

  const reviews = [
    {
      title: "Ótimo professor",
      content: "A aula foi excelente, aprendi muito!",
    },
    {
      title: "Muito bom",
      content: "O professor é muito dedicado e explica bem.",
    },
    {
      title: "Recomendo",
      content: "Ótimo professor, recomendo para todos.",
    },
    {
      title: "Gostei da aula",
      content: "O conteúdo foi bem abordado e compreensível.",
    },
    {
      title: "Excelente",
      content: "A melhor aula que já tive!",
    },
    {
      title: "Muito bom",
      content: "Explicações claras e objetivas.",
    },
    {
      title: "Professor dedicado",
      content: "O professor se preocupa com os alunos.",
    },
    {
      title: "Aula divertida",
      content: "Aprendi bastante e me diverti ao mesmo tempo.",
    },
    {
      title: "Conteúdo relevante",
      content: "O professor trouxe conteúdos atuais e relevantes.",
    },
    {
      title: "Muito profissional",
      content: "O professor é muito profissional e organizado.",
    },
    {
      title: "Bom desempenho",
      content: "O professor tem um bom domínio da disciplina.",
    },
    {
      title: "Altamente qualificado",
      content: "Professor com muita experiência e qualificação.",
    },
    {
      title: "Bom professor",
      content: "As aulas são bem estruturadas.",
    },
    {
      title: "Muito atencioso",
      content: "O professor é muito atencioso com os alunos.",
    },
    {
      title: "Aula dinâmica",
      content: "As aulas são dinâmicas e interessantes.",
    },
  ];

  for (const userId of userIds) {
    for (let i = 0; i < 15; i++) {
      const teacherId = teacherIds[Math.floor(Math.random() * teacherIds.length)];
      const disciplineId = disciplineIds[Math.floor(Math.random() * disciplineIds.length)];
      const review = reviews[Math.floor(Math.random() * reviews.length)];

      await prisma.review.create({
        data: {
          userId: userId,
          teacherId: teacherId,
          disciplineId: disciplineId,
          title: review.title,
          content: review.content,
        }
      });
    }
  }

  console.log('Reviews adicionadas com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
