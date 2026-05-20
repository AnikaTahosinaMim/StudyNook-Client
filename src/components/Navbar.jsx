"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Button, Dropdown, Label, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBookReader } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { LiaCashRegisterSolid } from "react-icons/lia";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  console.log(session, "sessionsssssss");

  const handleSignout = async () => {
    await signOut();
    router.push("/register");
  };
  return (
    <nav className="shadow-2xl border-b rounded-none p-2">
      <div className="flex justify-between   container mx-auto my-5">
        <div className="flex gap-1 items-center">
          <FaBookReader />
          <h1>Study Nook</h1>
        </div>
        <div className="flex gap-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/booking"}>Books</Link>
          {!isPending && session && (
            <>
              <Link href="/add-room">Add Room</Link>
              <Link href="/my-listings">My Listing</Link>
              <Link href="/my-bookings">My Booking</Link>
            </>
          )}
        </div>
        <div className="flex gap-2 items-center">
          {!isPending && !session ? (
            <>
              <Link href={"/login"}>
                <Button
                  className={
                    "rounded-none border border-purple-500 text-purple-500"
                  }
                  variant="ghost"
                >
                  <IoIosLogIn /> Login
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button
                  className={
                    "rounded-none border border-purple-500 text-purple-500"
                  }
                  variant="ghost"
                >
                  <LiaCashRegisterSolid /> Register
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Dropdown>
                <Button aria-label="Menu" variant="secondary">
                  <Image
                    src={
                      session?.user?.image || "/home.jpg"
                    }
                    width={40}
                    height={40}
                    alt="user-image"
                    className="rounded-full"
                  ></Image>
                  <p>{session?.user?.name}</p>
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >
                    <Dropdown.Item id="new-file" textValue="New file">
                      <Button
                        className={
                          "rounded-none border border-purple-500 text-purple-500"
                        }
                        variant="ghost"
                      >
                        My Booking
                      </Button>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="delete-file"
                      textValue="Delete file"
                      variant="danger"
                    >
                      <Button
                        className={
                          "rounded-none border border-purple-500 text-purple-500"
                        }
                        variant="ghost"
                      >
                        My Listing
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                      <Button
                        onClick={handleSignout}
                        className={
                          "rounded-none border border-purple-500 text-purple-500"
                        }
                        variant="ghost"
                      >
                        logout
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
