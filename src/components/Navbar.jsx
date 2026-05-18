import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaBookReader } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { LiaCashRegisterSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto my-5">
      <div className="flex gap-1 items-center">
        <FaBookReader />
        <h1>Study Nook</h1>
      </div>
      <div className="flex gap-1">
        <Link href={"/"}>Home</Link>
        <Link href={"/booking"}>Books</Link>
      </div>
      <div className="flex gap-1 items-center">
        <Button
          className={"rounded-none border border-purple-500 text-purple-500"}
          variant="ghost"
        >
          <IoIosLogIn /> Login
        </Button>
        <Button
          className={"rounded-none border border-purple-500 text-purple-500"}
          variant="ghost"
        >
          <LiaCashRegisterSolid /> Register
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
