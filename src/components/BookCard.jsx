"use client";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiBookOpen } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";

const BookCard = ({ nook }) => {
  const {
    roomImage,
    roomName,
    floor,
    seatCapacity,
    amenities,
    hourlyRate,
    totalCost,
    _id,
    shortDescription,
  } = nook;
  return (
    <div className="container mx-auto">
      <div className="group flex flex-col container mx-auto bg-white  p-3 shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative overflow-hidden aspect-16/10 ">
          <Image
            alt="Course Image"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            src={roomImage}
            fill
          />
          <div className="absolute top-4 right-4">
            <Chip
              color="primary"
              variant="solid"
              className="font-bold shadow-lg shadow-blue-600/20"
            >
              {seatCapacity}
            </Chip>
          </div>
        </div>
        <div className="p-8 flex flex-col grow space-y-4 text-center ">
          <div className="space-y-2">
            <Link href={`/booking/${_id}`}>
              <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-purple-600 transition-colors">
                {roomName}
              </h3>
            </Link>
               <span className="text-center flex mt-2 items-center">
              <FaStar className="text-purple-500 text-center"></FaStar>
              <FaStar className="text-purple-500 text-center"></FaStar>
              <FaStar className="text-purple-500 text-center"></FaStar>
              <FaStar className="text-purple-500 text-center"></FaStar>
            </span>
            <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
              <span className="text-slate-900">{floor}</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1">{hourlyRate}</span>
          </div>

          <div className="pt-6 mt-auto border-t border-slate-100 flex justify-between items-center">
            <span className="text-2xl font-black text-blue-600">
              ${totalCost}
            </span>
         

            <Button
              variant="flat"
              color="primary"
              className="font-bold rounded-xl px-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
