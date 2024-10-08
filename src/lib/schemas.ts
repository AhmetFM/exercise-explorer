import { z } from "zod";

export const initialWorkoutStatesSchema = z.object({
  history: z.string(),
  location: z.string(),
  type: z.string(),
  days: z.string(),
  setHistory: z.function().args(z.string()).returns(z.void()),
  setLocation: z.function().args(z.string()).returns(z.void()),
  setType: z.function().args(z.string()).returns(z.void()),
  setDays: z.function().args(z.string()).returns(z.void()),
});

export type InitialWorkoutStatesType = z.infer<
  typeof initialWorkoutStatesSchema
>;
