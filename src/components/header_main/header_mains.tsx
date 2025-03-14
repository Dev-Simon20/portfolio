"use client";
import { NavigationMenuDemo } from "../navigation_projects/navigation_projects";

const HeaderMain = () => {
  return (
    <header className="font-poppins w-full sticky top-0  md:top-4 z-50 flex flex-col items-center  ">
      <article className=" flex px-2 justify-center md:justify-between   sm:px-16 py-4 bg-zinc-800 items-center md:rounded-3xl  md:gap-8 w-full md:w-auto">
        <section className="font-medium text-3xl md:text-4xl text-blue-600 cursor-pointer">
          S|D
        </section>
        <section className="hidden md:flex gap-2 md:gap-8 text-sm md:text-normal items-center">
          <ol>
            <a href="/" className="hover:text-blue-600">
              About Me
            </a>
          </ol>
          <ol>
            <NavigationMenuDemo/>
          </ol>
        </section>
        <section className="hidden md:flex">
          <div className="bg-blue-600 hover:bg-slate-200 hover:text-gray-600 text-sm md:text-normal px-2 md:px-4 py-1 rounded-xl cursor-pointer transition  duration-300">
            Contáctame
          </div>
        </section>
      </article>
    </header>
  );
};
export default HeaderMain;
