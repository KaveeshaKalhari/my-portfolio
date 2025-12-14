"use client"

import { Github, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

const projects = [
  {
    title: "EVELORA - Recruitment Hiring Management System",
    description: "A comprehensive recruitment platform streamlining the hiring process with efficient candidate management and automated workflows.",
    image: "/evelora.jpg",
    tech: ["React", "Tailwind CSS", "PostgreSQL", "Azure", "ASP.NET Core", "Swagger", "Google OAuth"],
    github: "#",
    live: "#",
  },
  {
    title: "Smart Planetarium Booking & Experience Platform",
    description: "An innovative digital platform enhancing planetarium visits through seamless online booking and interactive seat selection..",
    image: "/planetarium_image.png",
    tech: ["React", "Tailwind CSS", "PostgreSQL", "Springboot", "Postman", "Google OAuth"],
    github: "#",
    live: "#",
  },
  {
    title: "Hotel Booking & Management System",
    description: "A robust single-user hotel management solution with comprehensive booking operations and business intelligence features.",
    image: "/hotel_booking_image.png",
    tech: ["Blazor", "ASP.NET Core", "SQL", "Azure", "XML" ],
    github: "#",
    live: "#",
  },
  {
    title: "My Portfolio",
    description: "Modern blogging platform with markdown support and social features.",
    image: "/portfolio.png",
    tech: ["Next.js", "React", "Tailwnd CSS", "Vercel" ],
    github: "#",
    live: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 dark:from-indigo-300 dark:to-blue-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my skills in frontend, backend, and full-stack development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden soft-shadow hover:shadow-xl dark:hover:shadow-indigo-900/20 transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30 hover:border-primary/50 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-900/40 dark:to-blue-900/40">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 flex-1">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 text-foreground/70 dark:text-foreground/80 rounded-full text-xs font-medium border border-indigo-200/50 dark:border-indigo-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-indigo-100 dark:border-indigo-900/30">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                  >
                    <Github size={16} className="mr-2" /> GitHub
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                  >
                    <ExternalLink size={16} className="mr-2" /> Live
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
