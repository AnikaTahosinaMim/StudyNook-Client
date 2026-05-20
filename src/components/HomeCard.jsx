import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCard = ({ nook }) => {
  return (
    <div className="relative overflow-hidden shadow-2xl mt-6 p-2 rounded-xl bg-white">
      <div className="relative h-56 w-full overflow-hidden rounded-xl">
        <Image
          src={nook.roomImage}
          alt={nook.roomName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <Link href={`/booking/${nook._id}`} className="text-lg font-semibold hover:text-purple-600">
          {nook.roomName}
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;