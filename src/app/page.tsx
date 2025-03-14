"use client";
import LightBeam from "@/components/light_beam/light_beam";
import intro from "@/pics/intro-bg.jpg";
import { TiDownload } from "react-icons/ti";
export default function Home() {
  return (
    <article className="flex flex-col items-center w-full  md:mt-8">
      <section className="w-full grid grid-cols-2  h-[calc(100vh-104px)] ">
        <div className=" flex items-center flex-col justify-center font-dm_sans gap-2 px-16">
          <h1 className="text-6xl w-full text-justify">Hello, I am <span className="text-blue-600">Simón</span>
          </h1>
          <p className="w-full text-justify pl-1">
            <span className="text-blue-600">Systems engineer</span> specialized in web development. This is my
            portfolio built with Next.js, where you can explore the projects I
            have worked on and contributed to.
          </p>
          <div className="flex  w-full justify-center gap-16 mt-8">
          <div className="px-4 pt-1 bg-blue-600 hover:bg-blue-100 hover:text-gray-800 rounded-2xl cursor-pointer transition-all duration-100">
            Ver proyectos
          </div>
          <div className="px-4 flex items-center gap-2 pt-1 pb-1.5 outline hover:bg-blue-600 hover:outline-blue-600 rounded-2xl cursor-pointer outline-[1px] transition-all duration-100">
            Descargar cv <TiDownload className="w-5 h-5 " />
          </div>
        </div>
        </div>
        <div className=" relative flex items-center justify-start pl-16 ">
          <div className="bg-zinc-800 w-128 pt-8 pr-8 pb-8 pl-2">
            <img src={intro.src} alt="" />
          </div>
        </div>
        <LightBeam />
      </section>

      <section className="w-full flex flex-col items-center min-h-screen pt-[104px]">
          <h2 className="text-blue-600 uppercase text-2xl">Mis habilidades</h2>
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] mt-8">
              <section className="flex-1 p-4 flex felx-col bg-zinc-700 min-h-28"></section>
              <section className="flex-1 p-4 flex felx-col bg-zinc-700 min-h-28"></section>
              <section className="flex-1 p-4 flex felx-col bg-zinc-700 min-h-28"></section>
              <section className="flex-1 p-4 flex felx-col bg-zinc-700 min-h-28"></section>
              <section className="flex-1 p-4 flex felx-col bg-zinc-700 min-h-28"></section>
              <section className="flex-1 p-4 flex felx-col bg-zinc-700 min-h-28"></section>
          </article>
      </section>

    </article>
  );
}
