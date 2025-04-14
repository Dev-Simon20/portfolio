"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
   SiJavascript,
   SiReact,
   SiNodedotjs,
   SiHtml5,
   SiCss3,
   SiTypescript,
   SiTailwindcss,
   SiGit,
   SiMongodb,
   SiPostgresql,
   SiDocker,
   SiAmazonwebservices,
   SiNextdotjs,
   SiRedux,
   SiGraphql,
   SiExpress,
   SiPrisma,
} from "react-icons/si";

export function SkillsSection() {
   const categories = [
      { id: "all", name: "All" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend" },
      { id: "tools", name: "Tools" },
   ];

   const [activeCategory, setActiveCategory] = useState("all");

   const skills = [
      {
         name: "JavaScript",
         level: 90,
         icon: SiJavascript,
         color: "#F7DF1E",
         bgColor: "#FFFDE7",
         categories: ["frontend", "backend"],
      },
      {
         name: "React",
         level: 85,
         icon: SiReact,
         color: "#61DAFB",
         bgColor: "#E1F5FE",
         categories: ["frontend"],
      },
      {
         name: "Node.js",
         level: 80,
         icon: SiNodedotjs,
         color: "#339933",
         bgColor: "#E8F5E9",
         categories: ["backend"],
      },
      {
         name: "Prisma",
         level: 95,
         icon: SiPrisma,
         color: "#3498DB",
         bgColor: "#C5E1F5",
         categories: ["backend"],
      },
      {
         name: "CSS",
         level: 90,
         icon: SiCss3,
         color: "#1572B6",
         bgColor: "#E3F2FD",
         categories: ["frontend"],
      },
      {
         name: "TypeScript",
         level: 75,
         icon: SiTypescript,
         color: "#3178C6",
         bgColor: "#E8EAF6",
         categories: ["frontend", "backend"],
      },
      {
         name: "Tailwind CSS",
         level: 85,
         icon: SiTailwindcss,
         color: "#06B6D4",
         bgColor: "#E0F7FA",
         categories: ["frontend"],
      },
      {
         name: "Git",
         level: 80,
         icon: SiGit,
         color: "#F05032",
         bgColor: "#FFEBEE",
         categories: ["tools"],
      },
      {
         name: "MongoDB",
         level: 75,
         icon: SiMongodb,
         color: "#47A248",
         bgColor: "#E8F5E9",
         categories: ["backend"],
      },
      {
         name: "PostgreSQL",
         level: 70,
         icon: SiPostgresql,
         color: "#336791",
         bgColor: "#E8EAF6",
         categories: ["backend"],
      },
      {
         name: "Docker",
         level: 65,
         icon: SiDocker,
         color: "#2496ED",
         bgColor: "#E3F2FD",
         categories: ["tools"],
      },
      {
         name: "AWS",
         level: 60,
         icon: SiAmazonwebservices,
         color: "#FF9900",
         bgColor: "#FFF3E0",
         categories: ["tools"],
      },
      {
         name: "Next.js",
         level: 80,
         icon: SiNextdotjs,
         color: "#000000",
         bgColor: "#F5F5F5",
         categories: ["frontend"],
      },
      {
         name: "Redux",
         level: 75,
         icon: SiRedux,
         color: "#764ABC",
         bgColor: "#EDE7F6",
         categories: ["frontend"],
      },
      {
         name: "GraphQL",
         level: 70,
         icon: SiGraphql,
         color: "#E10098",
         bgColor: "#FCE4EC",
         categories: ["frontend", "backend"],
      },
      {
         name: "Express",
         level: 85,
         icon: SiExpress,
         color: "#000000",
         bgColor: "#F5F5F5",
         categories: ["backend"],
      },
   ];

   const filteredSkills =
      activeCategory === "all"
         ? skills
         : skills.filter((skill) => skill.categories.includes(activeCategory));

   return (
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold">Technical Skills</h2>
               <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  Explore my technical knowledge by category
               </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
               {categories.map((category) => (
                  <button
                     key={category.id}
                     onClick={() => setActiveCategory(category.id)}
                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category.id
                           ? "bg-blue-600 text-white"
                           : "bg-white text-gray-700 hover:bg-gray-100"
                     }`}
                  >
                     {category.name}
                  </button>
               ))}
            </div>

            <motion.div
               className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
               layout
            >
               <AnimatePresence>
                  {filteredSkills.map((skill, index) => (
                     <motion.div
                        key={skill.name}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-sm overflow-hidden"
                     >
                        <div className="p-6">
                           <div
                              className="w-full h-24 rounded-lg flex items-center justify-center mb-4"
                              style={{ backgroundColor: skill.bgColor }}
                           >
                              <skill.icon
                                 size={48}
                                 style={{ color: skill.color }}
                              />
                           </div>
                           <h3 className="font-bold text-lg text-center mb-3">
                              {skill.name}
                           </h3>

                           <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-500">
                                 Domain
                              </span>
                              <span className="text-sm font-medium">
                                 {skill.level}%
                              </span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                 className="h-1.5 rounded-full"
                                 style={{
                                    backgroundColor: skill.color,
                                    width: `${skill.level}%`,
                                 }}
                              />
                           </div>

                           <div className="mt-4 flex flex-wrap gap-1">
                              {skill.categories.map((cat) => (
                                 <span
                                    key={cat}
                                    className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700"
                                 >
                                    {categories.find((c) => c.id === cat)?.name}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </motion.div>
         </div>
      </section>
   );
}
