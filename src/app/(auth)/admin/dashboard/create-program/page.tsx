import React from "react";
import { Separator } from "@/components/ui/separator";
import CreateProgramForm from "./CreateProgramForm";

const CreateProgramPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Create a Program</h3>
        <p className="text-sm text-gray-500">
          Create a Single Program for existing workout plan
        </p>
      </div>
      <Separator />
      <CreateProgramForm />
    </div>
  );
};

export default CreateProgramPage;
