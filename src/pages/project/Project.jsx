import React from "react";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <div className="h-dvh w-full flex flex-col px-12">
      <div className="h-[70vh] w-full relative overflow-hidden rounded-lg flex gap-4">
        <div className="w-1/3 shrink-0 flex flex-col gap-4">
          <Link
            to={"/"}
            className="bg-stone-800 shrink-0 rounded-lg px-4 py-3 font-bold text-white border-2 border-transparent hover:border-dt-yellow cursor-pointer "
          >
            Back to home
          </Link>
          <div className="size-full rounded-lg overflow-hidden relative">
            <img
              src="https://i.pinimg.com/736x/54/1e/b7/541eb7bfd04ffd74b77066c65f16b41f.jpg"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="size-full rounded-lg overflow-hidden relative ">
            <img
              src="https://i.pinimg.com/736x/54/1e/b7/541eb7bfd04ffd74b77066c65f16b41f.jpg"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="size-full rounded-lg overflow-hidden relative">
            <img
              src="https://i.pinimg.com/736x/54/1e/b7/541eb7bfd04ffd74b77066c65f16b41f.jpg"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex   mt-8">
        <div className="flex flex-col w-1/2 shrink-0">
          <div className="text-2xl font-semibold">
            Corporate Website Redesign
          </div>
          <div className="text-xl font-medium flex gap-2 items-center text-stone-400">
            For Company Name{" "}
            <div className="text-stone-600 text-sm"> | July 12, 2025</div>
          </div>

          <div className="mt-4 text-xl font-semibold">Categories</div>
          <div className="flex flex-col text-stone-400">
            <div>Figma</div>
            <div>Adobe XD</div>
            <div>Adobe Illustrator</div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="text-xl font-semibold">Description</div>
          <div className="text-stone-400">
            This was a project done by us for the company xxx, during the
            creation of this website, we redesigned the website to improve the
            user experience, while also keeping in mind the brand identity and
            user needs.
          </div>
        </div>
      </div>
    </div>
  );
}
