import React from "react";

const SingleWorkoutPage = ({ params }: { params: { id: number } }) => {
  return <div>id:{params.id}</div>;
};

export default SingleWorkoutPage;
