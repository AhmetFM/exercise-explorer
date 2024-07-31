import { InitialWorkoutStatesType } from "@/lib/schemas";
import React, { createContext, useState } from "react";

const initialWorkoutState: InitialWorkoutStatesType = {
  history: "",
  location: "",
  type: "",
  days: "",
  setHistory: () => {},
  setLocation: () => {},
  setType: () => {},
  setDays: () => {},
};

export const WorkoutContext =
  createContext<InitialWorkoutStatesType>(initialWorkoutState);

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [history, setHistory] = useState<string>(initialWorkoutState.history);
  const [location, setLocation] = useState<string>(initialWorkoutState.history);
  const [type, setType] = useState<string>(initialWorkoutState.type);
  const [days, setDays] = useState<string>(initialWorkoutState.days);

  return (
    <WorkoutContext.Provider
      value={{
        history,
        location,
        type,
        days,
        setHistory,
        setLocation,
        setType,
        setDays,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
