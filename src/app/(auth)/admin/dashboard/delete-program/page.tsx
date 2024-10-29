import { Separator } from "@/components/ui/separator";
import React from "react";

const DeleteProgramPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Delete a Workout Program</h3>
        <p className="text-sm text-gray-500">
          Delete a Workout Program from the database
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default DeleteProgramPage;