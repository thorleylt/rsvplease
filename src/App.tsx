import React from "react";
import { useForm } from "react-hook-form";

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const App = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => console.log(data);

  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  const invitee = queryParams.get("invitee");
  const name = queryParams.get("name");

  return (
    <div className="bg-[url('/public/mermaidPattern.jpg')] h-screen w-screen flex justify-center items-center">
      <div className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col min-w-[400px]">
        <h1 className="mt-6 mx-4 text-center text-2xl font-bold text-purple-500">
          {name ? `${capitalizeFirstLetter(name)}'s Birthday Party` : "RSVP"}
        </h1>
        <form
          className="rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Ariel"
              defaultValue={
                invitee ? capitalizeFirstLetter(invitee) : undefined
              }
              {...register("name")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="mermaid@sparkles.com"
              {...register("email")}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="diet"
            >
              Dietary Requirements
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="diet"
              type="text"
              placeholder="Vegetarian? Vegan? Extra cake?"
              {...register("diet")}
            />
          </div>
          <div className="flex flex-row items-center justify-center content-center">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Confirm attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
