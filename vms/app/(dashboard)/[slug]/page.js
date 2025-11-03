import React from "react";

const page = ({ params }) => {
  return (
    <>
      <div className="pt-20 ml-16 md:ml-60 min-h-screen bg-[#F9FAFB] p-6">
        {params.slug}
      </div>
    </>
  );
};

export default page;
