import { InitialWorkoutStatesType } from "@/lib/schemas";
import React, { createContext, useState } from "react";

const initialWorkoutState: InitialWorkoutStatesType = {
  history: "",
  location: "",
  type: "",
  date: "",
  setHistory: () => {},
  setLocation: () => {},
  setType: () => {},
  setDate: () => {},
};

export const WorkoutContext =
  createContext<InitialWorkoutStatesType>(initialWorkoutState);

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [history, setHistory] = useState<string>(initialWorkoutState.history);
  const [location, setLocation] = useState<string>(initialWorkoutState.history);
  const [type, setType] = useState<string>(initialWorkoutState.type);
  const [date, setDate] = useState<string>(initialWorkoutState.date);

  return (
    <WorkoutContext.Provider
      value={{
        history,
        location,
        type,
        date,
        setHistory,
        setLocation,
        setType,
        setDate,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
