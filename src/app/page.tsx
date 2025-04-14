import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
   Code,
   Server,
   Globe,
   Zap,
   Smartphone,
   MessageSquare,
   ChevronRight,
   Github,
   Linkedin,
   Twitter,
   Mail,
   MailIcon,
   DownloadIcon,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form/contact-form";
import { SkillsSection } from "@/components/skills-section/skills-section";
import LightBeam from "@/components/light_beam/light_beam";
import Link from "next/link";
import ProjectsSection from "@/components/projects-section/projects-section";
import { Tooltip } from "@mui/material";
import { SiWhatsapp } from "react-icons/si";
import imgHero from "@/pics/imgHero.svg";
import me from "@/pics/me.jpg";
import developer from "@/pics/developer.gif";

export default function Home() {
   return (
      <main className="min-h-screen relative">
         <LightBeam />
         {/* Navbar */}
         <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
               <div className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span className="font-bold text-xl">DevSimon</span>
               </div>
               <div className="hidden md:flex items-center gap-8">
                  <a
                     href="#home"
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Home
                  </a>
                  <a
                     href="#about-me"
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     About me
                  </a>
                  <a
                     href="#skills"
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Skills
                  </a>
                  <a
                     href="#projects"
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Projects
                  </a>
                  <a
                     href="#services"
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Services
                  </a>
               </div>
               <Link href={"#contact-me"}>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                     Contact me
                  </Button>
               </Link>
            </div>
         </nav>

         {/* Hero Section */}

         <section className="flex flex-col min-h-screen pt-16" id="home">
            <div className="flex flex-col lg:flex-row flex-1">
               {/* Lado izquierdo (oscuro) - 40% */}
               <div className="w-full lg:w-2/5 bg-[#111827] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                  {/* Elementos decorativos */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                     <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#1e6bff] to-purple-600 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                     <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-[#1e6bff] to-purple-600 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                  </div>

                  {/* Código decorativo */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
                     <pre className="text-xs text-white font-mono leading-tight">
                        {`function createSolution() {
  const creativity = new Creativity();
  const technology = new Technology();
  
  return creativity.combine(technology)
    .then(solution => {
      if (solution.isInnovative()) {
        return deploy(solution);
      }
      return refine(solution);
    });
}

// DevSimon - Transformando ideas en código
createSolution().then(result => {
  console.log("Solución implementada!");
});`}
                     </pre>
                  </div>

                  <div className="relative z-10">
                     <div className="flex items-center gap-2 mb-6">
                        <div className="relative group">
                           <div className="absolute -inset-1 bg-gradient-to-r from-[#1e6bff] to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                           <div className="relative bg-[#1e1e2d] rounded-lg p-2">
                              <Code className="h-6 w-6 text-[#1e6bff]" />
                           </div>
                        </div>
                        <h2 className="text-white text-2xl font-bold">
                           DevSimon
                        </h2>
                     </div>

                     <div className="mt-8 relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#1e6bff] to-purple-600 rounded-xl blur opacity-30"></div>
                        <div className="relative bg-[#ffffff]/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="h-3 w-3 rounded-full bg-red-500"></div>
                              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                              <div className="h-3 w-3 rounded-full bg-green-500"></div>
                           </div>
                           <Image
                              src={imgHero}
                              width={400}
                              height={300}
                              alt="Developer illustration"
                              className="w-full max-w-md mx-auto animate-float"
                           />
                        </div>
                     </div>

                     <div className="mt-12 flex items-center gap-4">
                        <Link
                           href="https://github.com/Dev-Simon20"
                           className="text-white/70 hover:text-white transition-colors"
                        >
                           <Github className="h-6 w-6" />
                        </Link>
                        <Link
                           href="https://linkedin.com"
                           className="text-white/70 hover:text-white transition-colors"
                        >
                           <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link
                           href="https://api.whatsapp.com/send?phone=51922747296&text=Hola%2C%20estuvimos%20revisando%20tu%20portafolio%20y%20nos%20llam%C3%B3%20la%20atenci%C3%B3n%20tu%20trabajo%20como%20desarrollador%20web.%20Nos%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20posible%20colaboraci%C3%B3n%20o%20proyecto.%20%C2%BFTienes%20disponibilidad%20para%20una%20charla%3F"
                           className="text-white/70 hover:text-white transition-colors"
                        >
                           <SiWhatsapp className="h-6 w-6" />
                        </Link>
                     </div>
                  </div>
               </div>

               {/* Lado derecho (azul) - 60% */}
               <div className="w-full lg:w-3/5 bg-gradient-to-br from-[#1e6bff] to-[#1e3a9f] p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden">
                  {/* Patrones decorativos */}
                  <div className="absolute inset-0 opacity-10">
                     <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <defs>
                           <pattern
                              id="grid"
                              width="10"
                              height="10"
                              patternUnits="userSpaceOnUse"
                           >
                              <path
                                 d="M 10 0 L 0 0 0 10"
                                 fill="none"
                                 stroke="white"
                                 strokeWidth="0.5"
                              />
                           </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                     </svg>
                  </div>

                  <div className="relative z-10">
                     <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 self-start animate-fadeIn">
                        <span className="animate-pulse mr-2">👋</span>
                        <span>Full Stack Web Developer</span>
                     </div>

                     <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 animate-slideUp">
                        <span className="relative">
                           Turning ideas <br /> into digital experiences
                        </span>
                     </h1>

                     <p className="text-lg text-white/90 max-w-xl mb-8 animate-slideUp animation-delay-300">
                        Systems Engineer specialized in web development,
                        building functional, efficient, and scalable digital
                        solutions that turn ideas into impactful digital
                        realities.
                     </p>

                     <div className="flex flex-wrap gap-4 mb-8 animate-slideUp animation-delay-400">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                           React
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                           Next.js
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                           TypeScript
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                           Node.js
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                           UI/UX
                        </span>
                     </div>

                     <div className="flex flex-col sm:flex-row gap-4 animate-slideUp animation-delay-500">
                        <Button
                           size="lg"
                           className="bg-white text-[#1e6bff] hover:bg-white/90 shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 group"
                           asChild
                        >
                           <Link href="#projects">
                              View projects
                              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                           </Link>
                        </Button>
                        <Button
                           size="lg"
                           variant="outline"
                           className="border-white text-white bg-blue-600 hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                           asChild
                        >
                           <Link href="#contacto">
                            Let&apos;s talk
                              <MailIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                           </Link>
                        </Button>
                     </div>

                     <div className="mt-12 flex items-center gap-4 animate-fadeIn animation-delay-700">
                        <div className="flex -space-x-2">
                           {[1, 2, 3].map((i) => (
                              <div
                                 key={i}
                                 className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-[#1e6bff] ring-2 ring-white/30"
                              >
                                 <span className="text-xs font-medium">
                                    +{i}
                                 </span>
                              </div>
                           ))}
                        </div>
                        <p className="text-sm">
                           <span className="font-medium">20+ projects</span>{" "}
                           successfully completed
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* About Me Section */}
         <section id="about-me" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1 order-2 md:order-1">
                     <h2 className="text-3xl font-bold mb-6">About me</h2>

                     <p className="text-gray-600 mb-4">
                        I am Hugo J. Simon, a passionate engineer focused on
                        building functional, efficient web solutions with an
                        excellent user experience. I specialize in both frontend
                        and backend development.
                     </p>
                     <p className="text-gray-600 mb-4">
                        My approach centers on creating web applications that
                        are not only visually appealing but also highly
                        functional and performance-optimized. I enjoy solving
                        complex problems and turning ideas into high-quality
                        digital products.
                     </p>

                     <p className="text-gray-600">
                        I constantly stay updated with the latest technologies
                        and best practices in web development to deliver
                        innovative and efficient solutions.
                     </p>

                     <div className="mt-8">
                        <Link
                           href={
                              "https://drive.google.com/file/d/1CtOiDMvajI39V5VQHVZi5K6BLTyI0J9w/view?usp=sharing"
                           }
                           target="_blank"
                        >
                           <Button className="bg-blue-600 hover:bg-blue-700">
                              Download CV
                              <DownloadIcon className="w-5 h-5" />
                           </Button>
                        </Link>
                     </div>
                  </div>
                  <div className="flex-1 order-1 md:order-2 flex justify-center">
                     <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-blue-600/10 rounded-xl transform rotate-6"></div>
                        <div className="absolute inset-0 bg-white rounded-xl overflow-hidden border-2 border-blue-100">
                           <Image
                              src={me.src}
                              alt="Foto profesional"
                              width={400}
                              height={400}
                              className="object-cover"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Skills Section */}
         <section id="skills">
            <SkillsSection />
         </section>

         {/* Projects Section */}
         <ProjectsSection />

         {/* Services Section */}
         <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold">Services I Offer</h2>
                  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                     Professional solutions tailored to your specific needs.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                     {
                        title: "Frontend Development",
                        description:
                           "Modern, responsive interfaces optimized for an excellent user experience.",
                        icon: <Globe className="h-10 w-10 text-blue-600" />,
                     },
                     {
                        title: "Backend Development",
                        description:
                           "Robust, secure, and scalable architectures for optimal application performance.",
                        icon: <Server className="h-10 w-10 text-blue-600" />,
                     },
                     {
                        title: "API Integrations",
                        description:
                           "Connecting and integrating with external services to extend your project’s functionality.",
                        icon: <Code className="h-10 w-10 text-blue-600" />,
                     },
                     {
                        title: "Performance Optimization",
                        description:
                           "Improving speed, efficiency, and user experience in existing applications.",
                        icon: <Zap className="h-10 w-10 text-blue-600" />,
                     },
                     {
                        title: "Responsive Design",
                        description:
                           "Perfect adaptation to all devices, from mobile to desktop screens.",
                        icon: (
                           <Smartphone className="h-10 w-10 text-blue-600" />
                        ),
                     },
                     {
                        title: "Technical Consulting",
                        description:
                           "Expert advice for making technological decisions in your project.",
                        icon: (
                           <MessageSquare className="h-10 w-10 text-blue-600" />
                        ),
                     },
                  ].map((service, index) => (
                     <Card
                        key={index}
                        className="hover:shadow-md transition-shadow"
                     >
                        <CardContent className="p-6">
                           <div className="mb-4">{service.icon}</div>
                           <h3 className="text-xl font-bold mb-2">
                              {service.title}
                           </h3>
                           <p className="text-gray-600">
                              {service.description}
                           </p>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-3xl font-bold mb-4">
                  Got a project idea?   Let&apos;s talk!
               </h2>
               <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  I&apos;m available for new projects and collaborations. Contact me,
                  and let&apos;s discuss how I can help bring your vision to life.
               </p>

               <Link href={"#contact-me"}>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                     Contact Me Now
                  </Button>
               </Link>
            </div>
         </section>

         {/* Contact Form Section */}
         <section id="contact-me" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
               <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold">Contact Me</h2>
                     <p className="text-gray-600 mt-4">
                        Have a project in mind? Send me a message, and let&apos;s
                        talk about how I can help you.
                     </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-8">
                     <ContactForm />
                  </div>
               </div>
            </div>
         </section>

         {/* Footer */}
         <footer className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-6 md:mb-0">
                     <div className="flex items-center gap-2">
                        <Code className="h-6 w-6 text-blue-400" />
                        <span className="font-bold text-xl">DevSimon</span>
                     </div>
                     <p className="text-gray-400 mt-2">
                        © {new Date().getFullYear()} All rights reserved.
                     </p>
                  </div>

                  <div className="flex gap-4">
                     <Tooltip title="Github" placement="top">
                        <a
                           href="https://github.com/Dev-Simon20"
                           target="_blank"
                           className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                        >
                           <Github className="h-5 w-5" />
                        </a>
                     </Tooltip>

                     <Tooltip title="Linkedin" placement="top">
                        <a
                           href="#"
                           className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                        >
                           <Linkedin className="h-5 w-5" />
                        </a>
                     </Tooltip>
                     <Tooltip title="Whatsapp" placement="top">
                        <a
                           href="https://api.whatsapp.com/send?phone=51922747296&text=Hola%2C%20estuvimos%20revisando%20tu%20portafolio%20y%20nos%20llam%C3%B3%20la%20atenci%C3%B3n%20tu%20trabajo%20como%20desarrollador%20web.%20Nos%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20posible%20colaboraci%C3%B3n%20o%20proyecto.%20%C2%BFTienes%20disponibilidad%20para%20una%20charla%3F"
                           target="_blank"
                           className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                        >
                           <SiWhatsapp className="h-5 w-5" />
                        </a>
                     </Tooltip>
                     <Tooltip title="Gmail" placement="top">
                        <a
                           target="_blank"
                           href="mailto:jeanpierks6@gmail.com"
                           className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                        >
                           <Mail className="h-5 w-5" />
                        </a>
                     </Tooltip>
                  </div>
               </div>
            </div>
         </footer>
      </main>
   );
}
