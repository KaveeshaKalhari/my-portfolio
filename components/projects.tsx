"use client"

import { useState, useEffect } from 'react'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const projects = [
  {
    title: "EVELORA - Recruitment Hiring Management System",
    description: "A comprehensive recruitment platform streamlining the hiring process with efficient candidate management and automated workflows.",
    image: "/evelora.jpg",
    tech: ["React", "Tailwind CSS", "PostgreSQL", "Azure", "ASP.NET", "Swagger", "Google OAuth"],
    github: "https://github.com/sandaru921/EVELORA",
  },
  {
    title: "Smart Planetarium Booking & Experience Platform",
    description: "An innovative digital platform enhancing planetarium visits through seamless online booking and interactive seat selection.",
    image: "/planetarium_image.png",
    tech: ["React", "Tailwind CSS", "PostgreSQL", "Springboot", "Postman", "Google OAuth"],
    github: "https://github.com/KaveeshaKalhari/planetarium-webapp",
  },
  {
    title: "Automobile Service Appointment & Time Tracking System",
    description: "A comprehensive service management platform that streamlines automotive service operations with real-time appointment booking, employee time tracking, and customer communication tools.",
    image: "/revup.png",
    tech: ["React", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/ChamilkaMihiraj2002/RevUp",
  },
  {
    title: "Hotel Booking & Management System",
    description: "Single-user hotel booking web application featuring complete CRUD operations, advanced search capabilities, weekly reporting, and forecasting features for revenue analysis.",
    image: "/hotel_booking_image.png",
    tech: ["ASP.NET Core MVC (Razor views)", "SQL", "Azure", "XML"],
    github: "https://github.com/KaveeshaKalhari/HotelBookingSystem-SingleUser",
  },
  {
    title: "Laptop Marketplace Platform",
    subtitle: "Multi-Vendor Tech Marketplace",
    description: "Modern e-commerce platform supporting multiple vendors with role-based access control, centralized product management, and sophisticated search with dynamic filters.",
    image: "/laptop_marketplace.png",
    tech: ["MongoDB", "React", "Node.js", "Express"],
    github: "https://github.com/KaveeshaKalhari/laptop-marketplace-platform",
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my software development projects, technical skills, and professional experience with an elegant dark/light theme design.",
    image: "/portfolio.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/KaveeshaKalhari/my-portfolio",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = projects.length - itemsPerView
      return prevIndex >= maxIndex ? 0 : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = projects.length - itemsPerView
      return prevIndex <= 0 ? maxIndex : prevIndex - 1
    })
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const maxDots = projects.length - itemsPerView + 1

  return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 dark:from-indigo-300 dark:to-blue-300 bg-clip-text text-transparent">
            Projects
          </span>
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in frontend, backend, and full-stack development
          </p>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white dark:bg-slate-900 p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30 hover:border-primary/50 hover:scale-110 group"
                aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white dark:bg-slate-900 p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30 hover:border-primary/50 hover:scale-110 group"
                aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>

            {/* Projects Carousel */}
            <div className="overflow-hidden px-4 md:px-8">
              <div
                  className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerView + (itemsPerView === 1 ? 0 : itemsPerView === 2 ? 3 : 2.67))}%)`
                  }}
              >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden soft-shadow hover:shadow-xl dark:hover:shadow-indigo-900/20 transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30 hover:border-primary/50 flex flex-col flex-shrink-0"
                        style={{
                          width: itemsPerView === 1 ? 'calc(100%)' : itemsPerView === 2 ? 'calc(50% - 12px)' : 'calc(33.333% - 21.33px)'
                        }}
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
                        {project.subtitle && (
                            <p className="text-sm text-foreground/50 mb-2">{project.subtitle}</p>
                        )}
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
                              asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" /> GitHub
                            </a>
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

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxDots }).map((_, index) => (
                  <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                              ? 'bg-primary w-8'
                              : 'bg-indigo-200 dark:bg-indigo-900/40 hover:bg-indigo-300 dark:hover:bg-indigo-800/60 w-2'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                  />
              ))}
            </div>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6 text-sm text-foreground/60">
            {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, projects.length)} of {projects.length}
          </div>
        </div>
      </section>
  )
}