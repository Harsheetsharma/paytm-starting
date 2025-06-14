"use client";

import { ReactHTMLElement } from "react";
import { Button } from "./button";
interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: any;
  onSignOut: any;
}

export const Appbar = ({ user, onSignin, onSignOut }: AppbarProps) => {
  return (
    <div className="flex justify-between border-b border-gray-400 px-4">
      <div className="text-lg flex flex-col justify-center font-medium">
        PayTM
      </div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignOut : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
