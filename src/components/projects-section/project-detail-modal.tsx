"use client"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectDetailModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    longDescription?: string
    images: ProjectImage[]
    tags: string[]
    liveUrl?: string
    repoUrl?: string
  }
}

export function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col">
        <div className="relative w-full aspect-video ">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="h-full rounded-t-xl"
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full ">
                  <img src={image.src} alt=""  className="w-full h-full object-cover"/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-gray-600 mb-6">{project.longDescription || project.description}</p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Sitio Web
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}
