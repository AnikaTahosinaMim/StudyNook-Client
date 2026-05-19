import Image from "next/image";
import Link from "next/link";
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
        
        <Link href={`/booking/${nook._id}`}>{nook.roomName}</Link>
      </div>
    </div>
  );
};

export default HomeCard;