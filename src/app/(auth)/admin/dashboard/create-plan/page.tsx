import { Separator } from "@/components/ui/separator";
import CreatePlanForm from "./CreatePlanForm";

const CreateWorkoutPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Create</h3>
        <p className="text-sm text-gray-500">
          Create a new plan, workout and days{" "}
        </p>
      </div>
      <Separator />
      <CreatePlanForm />
    </div>
  );
};

export default CreateWorkoutPage;
