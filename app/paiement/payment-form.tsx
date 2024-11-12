"use client";

import { fedaserver } from "@/action/feda";
import { useState } from "react";

export default function Paymentform({ type }: { type: string}) {
  const [loadingImmediate, setLoadingImmediate] = useState(false);

  const onSubmit = async () => {
    setLoadingImmediate(true);
    const url = await fedaserver(type);
    if (url) {
      window.location.href = url;
    }
    setLoadingImmediate(false);
  };
  return (
    <button
      onClick={onSubmit}
      className={`w-full md:w-40 text-sm rounded-full border-2 border-blue-600 text-blue-600 py-2 hover:bg-blue-600 hover:text-white transition duration-200 ${
        loadingImmediate ? "cursor-not-allowed opacity-70" : ""
      }`}
      disabled={loadingImmediate}
    >
      {loadingImmediate ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          En cours...
        </span>
      ) : (
        "Payer Maintenant"
      )}
    </button>
  );
}
