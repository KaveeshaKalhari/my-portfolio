"use client"

import { Github, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

const projects = [
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/task-management-dashboard.png",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "/ecommerce-platform-shopping-interface.jpg",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with geolocation and detailed forecasts.",
    image: "/weather-dashboard-forecast-app.jpg",
    tech: ["React", "API", "TypeScript", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support and social features.",
    image: "/blog-platform-publishing-interface.jpg",
    tech: ["Next.js", "Supabase", "MDX", "Vercel"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Analytics",
    description: "Analytics dashboard for tracking portfolio performance and investments.",
    image: "/analytics-dashboard-charts-graphs.jpg",
    tech: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Social Chat App",
    description: "Real-time messaging application with group chat and media sharing.",
    image: "/chat-messaging-social-app-interface.jpg",
    tech: ["React", "Firebase", "Socket.io", "Redux"],
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
