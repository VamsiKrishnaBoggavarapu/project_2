"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col gap-4">
        <h1 className="text-xs uppercase font-bold"></h1>
        <h2 className="text-5xl">
          We can not complete your request right now.
        </h2>
        <h3 className="text-xl">
          There was a problem. Please try again later.
        </h3>
        <button
          className="bg-black text-white rounded -8 pt-3 pb-3 pl-6 pr-6 font-bold"
          onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
