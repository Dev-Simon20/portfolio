"use client";

import { Button } from "@/components/ui/button";

import { ProjectCard } from "./project-card";

import mmc from "@/public/pics/mmc.png";
import mmcAdmin from "@/public/pics/mmcAdmin.png";
import mlDash from "@/public/pics/dashboard.png";
import editEvent from "@/pics/edit-event.png";
import views from "@/pics/views.png";
import tableIns from "@/pics/table-ins.png";
import table from "@/pics/table.png";
import stadistics from "@/pics/stadisticAll.png";

// Sample project data
const projects = [
   {
      title: "Mi marinera.com",
      description:
         "MiMarinera.com is  a modern and dynamic web platform developed to centralize events and content related to marinera, the traditional dance of Peru.",
      longDescription: `
        MiMarinera.com is a digital platform I developed with the aim of strengthening the diffusion and organization of marinera events, one of the most emblematic dances of Peru. The site offers a dynamic calendar of contests, organization profiles, multimedia coverage, and filtering tools to facilitate event searches by city, type, and date.
        From design to development, I worked on the site architecture prioritizing user experience, performance, and scalability. I implemented modern technologies like Next.js, Tailwind CSS, and Firebase, ensuring fast loading, smooth navigation, and easy content management.
        This project not only reflects my technical skills in modern web development but also my commitment to cultural initiatives that promote Peruvian art and identity.
        `,
      thumbnail: mmc.src,
      images: [],
      tags: ["Next.js", "TypeScript", "Node.js", "MySql"],
      liveUrl: "https://mimarinera.com/",
      repoUrl: "https://github.com/username/ecommerce-project",
   },
   {
      title: "MiMarinera.com Admin Panel",
      description:
         "The MiMarinera.com admin panel allows for efficient management of events, users, organizations, multimedia content, and covers within a centralized platform.",
      longDescription: `
       I worked on the development of the MiMarinera.com admin panel, a platform to promote marinera, a traditional Peruvian dance. My work included managing events, organizations, users, and multimedia content, allowing admins to create, edit, and delete records. I implemented a panel with technologies such as React, Tailwind CSS, Redux, Node.js, Firebase, and MySQL, prioritizing usability and security. I also developed an authentication and authorization system, and a responsive design for both mobile and desktop access. This project improved my full-stack development skills, database management, and interface design.
        `,
      thumbnail: mmcAdmin.src,
      images: [
         {
            src: mmcAdmin.src,
            alt: "Main dashboard view",
         },
         {
            src: table.src,
            alt: "Interactive charts",
         },
         {
            src: views.src,
            alt: "Report configuration",
         },
         {
            src: editEvent.src,
            alt: "Event configuration",
         },
         {
            src: tableIns.src,
            alt: "Reports settings",
         },
         {
            src: stadistics.src,
            alt: "Statistics settings",
         },
      ],
      tags: ["React", "Chart.js", "Firebase", "Node.js"],
      repoUrl: "https://github.com/username/analytics-dashboard",
   },
   {
      title: "Management Application",
      description:
         "My Little Shop is a web platform for managing sales, products, customers, and inventory in an easy and efficient way. Ideal for entrepreneurs looking to optimize their online business.",
      longDescription:
         "My Little Shop is a web platform designed to facilitate comprehensive management of online businesses. Users can manage their sales, products, customers, inventory, and more from an intuitive and easy-to-use interface. Developed with a focus on simplicity and efficiency, My Little Shop allows entrepreneurs to effectively manage their stores, optimizing processes and improving the experience for both owners and customers. As a developer, I created this platform using modern technologies to provide a robust, secure, and scalable solution for any business.",
      thumbnail: mlDash.src,
      images: [],
      tags: ["Next.js", "TypeScript", "Prisna", "Tailwind CSS"],
      liveUrl: "https://devsimon20.netlify.app/projects/my-little-shop",
      repoUrl: "https://github.com/username/task-management-app",
   },
];

export default function ProjectsSection() {
   return (
      <section
         id="projects"
         className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold">Featured Projects</h2>
               <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  A selection of my most recent and relevant work.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
               ))}
            </div>
         </div>
      </section>
   );
}
