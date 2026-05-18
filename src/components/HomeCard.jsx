import Image from "next/image";
import React from "react";

const HomeCard = ({ nook }) => {
  return (
    <div className="relative  shadow-2xl mt-6 p-2">
      <Image
        src={nook.roomImage}
        alt={nook.roomName}
        height={250}
        width={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover group-hover:scale-110  transition-transform duration-700"
      />

      <div className="flex flex-wrap gap-2 mt-2">
        
        <h2>{nook.roomName}</h2>
      </div>
    </div>
  );
};

export default HomeCard;