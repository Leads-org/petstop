import React from "react";

type Props = {};

const Newsletter = ({}: Props) => {
  return (
    <div className="container mx-auto mt-7 flex flex-col gap-3 items-center ">
      <h3 className="text-2xl font-bold ">Sign Up + Save</h3>
      <p className="text-slate-500">
        Join our mailing list for food pets, pet care, and fun news from us! We
        send out an email once a week.
      </p>
      <form className="pb-12 pt-3">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-96 text-sm text-black bg-gray-50 rounded-lg border border-gray-300   dark:text-black "
            placeholder="Email address"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Me Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
