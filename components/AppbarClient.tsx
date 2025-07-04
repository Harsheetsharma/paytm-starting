"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "../miniComponents/Appbar";
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const session = useSession();
  const router = useRouter();

  return (
    <div>
      <Appbar
        onSignin={signIn}
        onSignOut={async () => {
          await signOut();
          router.push("/api/auth/signin");
        }}
        user={session.data?.user}
      ></Appbar>
    </div>
  );
}
