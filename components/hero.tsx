"use client"

import { ArrowRight, Download } from "lucide-react"
import { Button } from "./ui/button"

export default function Hero() {
  return (
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-blue-950/50 to-indigo-950/60 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950"></div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-400/15 dark:bg-indigo-700/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-400/15 dark:bg-blue-700/15 rounded-full blur-3xl animate-float animation-delay-2000"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 mt-8">
            <div className="mb-8 flex justify-center">
              <div className="relative w-56 h-56">
                {/* Animated rotating gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 animate-border blur-sm "></div>
                {/* Inner border with pulse effect */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 p-1 shadow-xl animate-pulse-glow ">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-300 to-blue-300 flex items-center justify-center">
                    <img src="/Kaveesha_Kalhari.png" alt="Kaveesha" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent">
              Kaveesha Kalhari
            </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-foreground/70 mb-8 font-light animate-fade-in-up animation-delay-200">
              IT Undergraduate & Software Engineering Enthusiast
            </p>

            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
              Passionate about full-stack development, problem-solving, and creating elegant solutions. Currently
              exploring opportunities in software engineering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-8 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-xl"
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ArrowRight size={20} />
              </a>
            </Button>
            <Button
                variant="outline"
                size="lg"
                className="border-indigo-300 dark:border-indigo-700/50 text-foreground hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-full px-8 font-semibold flex items-center gap-2 bg-transparent"
            >
              <a href="/Kaveesha_Kalhari.pdf" download rel="noopener" className="flex items-center gap-2">
                <Download size={20} /> Download CV
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
  )
}
