import prisma from "./db";
import { verifySession } from "./session";

export const AdminUsers = [
  {
    username: "admin",
    password: "admin",
    isAdmin: "true",
  },
];

// export const dummyData = [
//   {
//     id: 1,
//     slug: "men",
//     title: "Workout For Men",
//     img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     workouts: [
//       {
//         id: 11,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "3 Day Push/Pull/Legs (PPL) Workout for Beginners",
//         img: "https://images.pexels.com/photos/4944432/pexels-photo-4944432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "This push/pull/legs routine is a simple, yet effective workout split that hits the whole body in just 3 daysPerWeek a week, and helps you increase strength and build muscle.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 12,
//         slug: "5-day-dumble",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "Dumbbell Only Workout: 5 Day Dumbbell Workout Split",
//         img: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "This 5 day dumbbell only workout program only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 13,
//         slug: "5-day-strength",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "5 Day Muscle & Strength Building Workout Split",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "Build muscle and strength with this workout program that combines two strength based weekly workouts with three hypertrophy size building weekly workouts.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     slug: "women",
//     title: "Workout For Women",
//     img: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     workouts: [
//       {
//         id: 21,
//         slug: "8-week-advanced",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "8 Week Advanced Strength Building Workout",
//         img: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "Unlock unmatched strength with this 5-day strength-building workout. This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 22,
//         slug: "dumbell-split",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "Dumbbell Only Workout: 5 Day Dumbbell Workout Split",
//         img: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "This 5 day dumbbell only workout program only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 23,
//         slug: "muscle-and-strength",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "5 Day Muscle & Strength Building Workout Split",
//         img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "Build muscle and strength with this workout program that combines two strength based weekly workouts with three hypertrophy size building weekly workouts.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     slug: "muscle-building",
//     title: "Muscle Building",
//     img: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     workouts: [
//       {
//         id: 31,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "Upper/Lower 4 Day Bodybuilding Workout",
//         img: "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "Reach your muscle building goals with this balanced 4 day training split that mixes heavy compound exercises, machines, cables and incorporates 3 second negatives.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 32,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "8 Week Advanced Strength Building Workout",
//         img: "https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "Unlock unmatched strength with this 5-day strength-building workout. This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 33,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "5 Day Muscle & Strength Building Workout Split",
//         img: "https://images.pexels.com/photos/896058/pexels-photo-896058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "Build muscle and strength with this workout program that combines two strength based weekly workouts with three hypertrophy size building weekly workouts.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 4,
//     slug: "fat-loss",
//     title: "Fat Loss",
//     img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     workouts: [
//       {
//         id: 41,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "8 Week Beginner Fat Loss Workout for Women",
//         img: "https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "This 4-day workout plan combines weight training and cardio to help you get leaner! Each day is separated into upper and lower body sessions with core work mixed into both.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 42,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "45-Minute Kettlebell and Bodyweight Workout for Fat Loss",
//         img: "https://images.pexels.com/photos/3837474/pexels-photo-3837474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "This simple, yet effective full body workout maximizes fat loss and overall fitness performance. With very minimal equipment you can burn calories and start moving better.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 43,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "20 Minute HIIT Workout You Can Do Anywhere",
//         img: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "This 20-minute workout will help you burn calories, increase endurance, improve athleticism, and even challenge you mentally. All you need is just your bodyweight!",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     slug: "strength",
//     title: "Increase Strength",
//     img: "https://images.pexels.com/photos/9329966/pexels-photo-9329966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     workouts: [
//       {
//         id: 51,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "Big and Strong: 8 Week Advanced Strength Building Workout",
//         img: "https://images.pexels.com/photos/812746/pexels-photo-812746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "Unlock unmatched strength with this 5-day strength-building workout. This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 52,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title:
//           "6 Day Push/Pull/Legs (PPL) Powerbuilding Workout Split & Meal Plan",
//         img: "https://images.pexels.com/photos/1865131/pexels-photo-1865131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "This 6 day push/pull/legs workout routine split is a high volume, rest-pause system designed for intermediate lifters looking to gain muscle and strength.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 53,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "Muscle & Strength Full Body Workout Routine",
//         img: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description:
//           "This M&S mass building routine is perfect for lifters who want to give full body workouts a try. All major muscle groups are trained, and the program includes a 20 rep set of squats.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 6,
//     slug: "full-body",
//     title: "Full Body",
//     img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     workouts: [
//       {
//         id: 61,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "3 Day Push/Pull/Legs (PPL) Workout for Beginners",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "This push/pull/legs routine is a simple, yet effective workout split that hits the whole body in just 3 daysPerWeek a week, and helps you increase strength and build muscle.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 62,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "8 Week Advanced Strength Building Workout",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "Unlock unmatched strength with this 5-day strength-building workout. This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 63,
//         slug: "ppl",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "5 Day Muscle & Strength Building Workout Split",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "Build muscle and strength with this workout program that combines two strength based weekly workouts with three hypertrophy size building weekly workouts.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 7,
//     slug: "bodyweight",
//     title: "Bodyweight",
//     img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     workouts: [
//       {
//         id: 71,
//         slug: "workout-for-beginners",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "3 Day Push/Pull/Legs (PPL) Workout for Beginners",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "This push/pull/legs routine is a simple, yet effective workout split that hits the whole body in just 3 daysPerWeek a week, and helps you increase strength and build muscle.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 72,
//         slug: "advanced-workout-8-week",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "8 Week Advanced Strength Building Workout",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "Unlock unmatched strength with this 5-day strength-building workout. This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 73,
//         slug: "split-muscle-workout",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "5 Day Muscle & Strength Building Workout Split",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "Build muscle and strength with this workout program that combines two strength based weekly workouts with three hypertrophy size building weekly workouts.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 8,
//     slug: "sport",
//     title: "Sport Performance",
//     img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     workouts: [
//       {
//         id: 81,
//         slug: "push-pull-leg-workout",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "3 Day Push/Pull/Legs (PPL) Workout for Beginners",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "This push/pull/legs routine is a simple, yet effective workout split that hits the whole body in just 3 daysPerWeek a week, and helps you increase strength and build muscle.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 82,
//         slug: "advanced-str-building",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "8 Week Advanced Strength Building Workout",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "Unlock unmatched strength with this 5-day strength-building workout. This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//       {
//         id: 83,
//         slug: "5-day-muscle-strength",
//         goal: "Build Muscle",
//         type: "Split",
//         duration: "12 Weeks",
//         daysPerWeek: "5",
//         title: "5 Day Muscle & Strength Building Workout Split",
//         img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description:
//           "Build muscle and strength with this workout program that combines two strength based weekly workouts with three hypertrophy size building weekly workouts.",
//         shortTitle: "3 Day PPL Workout",
//         days: [
//           {
//             title: "Workout 1: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 2: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//           {
//             title: "Workout 3: Push day",
//             headers: ["Exercise", "Sets", "Reps", "Rest"],
//             exercises: [
//               ["Military Press (AKA Overhead Press)", "5", "5", "1-2 min"],
//               ["Dumbbell Bench Press", "3", "5", "1-2 min"],
//               ["Lateral Raise", "3", "8", "1-2 min"],
//               ["Lying Dumbbell Extension", "3", "8", "1-2 min"],
//               ["Tricep Pushdown", "3", "8", "1-2 min"],
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

export const getUser = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  return user;
};

export const getUserByToken = async (id: any) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};
