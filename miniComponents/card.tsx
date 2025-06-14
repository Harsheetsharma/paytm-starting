import React, { JSX } from "react";
export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="p-6 bg-white rounded-xl  shadow-xl ">
      <h1 className="text-xl pb-2">{title}</h1>

      <div className="text-sm">{children}</div>
    </div>
  );
}
