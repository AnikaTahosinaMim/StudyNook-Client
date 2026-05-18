import Image from "next/image";
import React from "react";
import HomeCard from "./HomeCard";

const Homepages = async () => {
  const res = await fetch("http://localhost:8000/featured", {
    cache: "no-store",
  });

  const nooks = await res.json();
  console.log(nooks, "nookss");
  console.log("Total featured rooms:", nooks.length);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
        {nooks.map((nook) => (
          <HomeCard key={nook._id} nook={nook}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Homepages;
