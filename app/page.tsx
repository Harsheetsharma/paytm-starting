"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "../miniComponents/Appbar";
import { JSX } from "react";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
    <div>
      {/* <Appbar onSignin={signIn} onSignOut={signOut} user={session.data?.user} /> */}
    </div>
  );
}
