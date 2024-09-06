import { Separator } from "@/components/ui/separator";
import React from "react";
import CreateWorkoutForm from "./CreateWorkoutForm";

const CreateWorkoutPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Create a Workout</h3>
        <p className="text-sm text-gray-500">
          Create a new Workout for existing plan
        </p>
      </div>
      <Separator />
      <CreateWorkoutForm />
    </div>
  );
};

export default CreateWorkoutPage;
