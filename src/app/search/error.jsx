"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="">Something went Wrong!</h1>
      <button className="text-blue-500">Try Again</button>
    </div>
  );
}
