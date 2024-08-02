import Link from "next/link";
import React from "react";

const DownloadButton = () => {
  return (
    <Link
      href="/workouts/advancedstrengthbuildingworkout.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="px-4 py-3 bg-zinc-600 text-white dark:bg-zinc-100 dark:text-zinc-950 font-medium text-sm rounded-lg w-36 md:w-40 text-center self-center"
    >
      Download PDF
    </Link>
  );
};

export default DownloadButton;
