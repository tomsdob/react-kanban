import React from "react";
import { useSession } from "next-auth/client";
// Icons
import { FiLogOut } from "react-icons/fi";
import { FiTrello } from "react-icons/fi";

const Navbar = () => {
  const [session] = useSession();
  return (
    <nav className="px-8 py-4 inline-flex justify-between items-center w-full bg-white border-b">
      {!session && (
        <>
          Not signed in <br />
          <a href="/api/auth/signin">Sign in</a>
        </>
      )}
      {session && (
        <>
          <div>
            <FiTrello className="w-10 h-10 text-primary"></FiTrello>
          </div>
          <div className="space-x-4 inline-flex justify-end items-center">
            <span className="text-base font-medium text-gray-900 leading-tight">
              {session.user.name}
            </span>
            <img
              src={session.user.image}
              className="w-8 h-8 rounded-full"
            ></img>

            <a href="/api/auth/signout">
              <FiLogOut className="w-5 h-5 text-gray-900 hover:text-gray-600 transition-all duration-200"></FiLogOut>
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
