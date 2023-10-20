"use client";

import Image from "next/image";
import { UserAuth } from "../Auth/auth";
import { useEffect } from "react";

export default function Header() {
  const { user, googleSingIn, logOut } = UserAuth();

  const handleSingIn = async () => {
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };

    checkAuthentication();
  }, [user]);

  const displayNameParts = user?.displayName ? user.displayName.split(" ") : [];
  const firstName = displayNameParts[0] || "Guest";

  return (
    <>
      <div className="header flex justify-between p-6 items-center bg">
        <h1 className="text-3xl">My Site</h1>
        <div className="header-search w-1/2 ml-56">
          <label className="relative block">
            <span className="sr-only">search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Image
                className="h-5 w-5"
                src="./search-icon.svg"
                width={20}
                height={20}
                alt="search-image"
              />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-700 block bg-white w-full border border-black rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search images ..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="header-item flex">
          <button className="text-lg mr-4">About us</button>
          <button className="text-lg mr-4">Images</button>
          {!user ? (
            <button onClick={handleSingIn} className="text-lg mr-4">
              Sign In
            </button>
          ) : (
            <>
              <div>
                <p className="text-lg mr-4">Welcome, {firstName} </p>
              </div>
              <button onClick={handleSingOut} className="text-lg">
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
