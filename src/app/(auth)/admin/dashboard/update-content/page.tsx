import React from "react";
import { Separator } from "@/components/ui/separator";
import UpdateContentForm from "./UpdateContentForm";

const UpdateContentPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Update Content</h3>
        <p className="text-sm text-gray-500">
          Select a content to update from the list of content.
        </p>
      </div>
      <Separator />
      <UpdateContentForm />
    </div>
  );
};

export default UpdateContentPage;
