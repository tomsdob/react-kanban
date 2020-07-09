import React from "react";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import Board from "../components/Board/index";

export default () => {
  const [session] = useSession();
  return (
    <>
      <Navbar></Navbar>
      {session && (
        <>
          <Board></Board>
        </>
      )}
      {!session && <>You must log to access the board</>}
    </>
  );
};
