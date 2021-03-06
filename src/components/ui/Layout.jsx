import React from "react";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="md:flex flex-col w-64 min-h-screen px-4 py-8 bg-gray-200 border-r dark:bg-gray-800 dark:border-gray-600 hidden">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Restaurant
      </h2>

      <div className="relative mt-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <Navbar />

        <div className="flex items-center px-4 -mx-2">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9"
            src="https://i.pravatar.cc/300"
            alt="avatar"
          />
          <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
            Allan Sanchez
          </h4>
        </div>
      </div>
    </div>
  );
}
