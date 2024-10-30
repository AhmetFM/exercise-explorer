import NotFound from "@/app/not-found";
import prisma from "@/lib/db";
import WorkoutSection from "./workout-section";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const workout = await prisma.plan.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!workout) return {};

  return {
    title: workout.title,
    description: workout.desc,
  };
}

const SingleWorkoutListPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const workout = await prisma.plan.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      workouts: true,
    },
  });

  if (!workout) return <NotFound />;

  return (
    <div className="flex items-center relative p-8">
      {workout && <WorkoutSection workout={workout} />}
    </div>
  );
};

export default SingleWorkoutListPage;
