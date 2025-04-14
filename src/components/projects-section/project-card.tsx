"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectDetailModal } from "./project-detail-modal";

interface ProjectImage {
   src: string;
   alt: string;
}

interface ProjectCardProps {
   project: {
      title: string;
      description: string;
      longDescription?: string;
      thumbnail: string;
      images: ProjectImage[];
      tags: string[];
      liveUrl?: string;
      repoUrl?: string;
   };
}

export function ProjectCard({ project }: ProjectCardProps) {
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <>
         <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video w-full overflow-hidden">
               <img src={project.thumbnail} alt="" className="w-full h-full" />
            </div>
            <CardContent className="p-6">
               <h3 className="text-xl font-bold mb-2">{project.title}</h3>
               <p className="text-gray-600 mb-4">{project.description}</p>
               <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                     <Badge key={tagIndex} variant="secondary">
                        {tag}
                     </Badge>
                  ))}
               </div>
               <div className="flex gap-2">
                  {!project.liveUrl && (
                     <Button
                        variant="outline"
                        className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                        onClick={() => setIsModalOpen(true)}
                     >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                     </Button>
                  )}
                  {project.liveUrl && (
                     <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                     >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                           <ExternalLink className="h-4 w-4 mr-2" />
                           Visit
                        </Button>
                     </a>
                  )}
               </div>
            </CardContent>
         </Card>

         <ProjectDetailModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            project={project}
         />
      </>
   );
}
