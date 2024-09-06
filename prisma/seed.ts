import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   dummyData.forEach(async (item) => {
  //     await prisma.plan.upsert({
  //       where: {
  //         slug: item.slug,
  //       },
  //       update: {},
  //       create: {
  //         slug: item.slug,
  //         title: item.title,
  //         img: item.img,
  //         desc: item.description,
  //       },
  //     })
  //     item.workouts.forEach(async (workout) => {
  //       await prisma.workout.upsert({
  //         where: {
  //           id: workout.id,
  //         },
  //         update: {},
  //         create: {
  //           slug: workout.slug,
  //           goal: workout.goal,
  //           type: workout.type,
  //           duration: workout.duration,
  //           daysPerWeek: workout.daysPerWeek,
  //           plan: {
  //             connect: {
  //               slug: item.slug,
  //             },
  //           },
  //         },
  //       });
  //     });)
  //   });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
