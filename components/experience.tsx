"use client"

import { Award, Briefcase } from 'lucide-react'

const experiences = [
  {
    type: "volunteer",
    title: "Chief Organizer",
    company: "IEEE WIE Affinity Group",
    period: "Term 2025-2026",
    description:
      "Developed and maintained full-stack features for the company platform using React and Node.js. Collaborated with cross-functional teams and improved application performance by 30%.",
    highlights: ["Full-stack development", "Performance optimization", "Team collaboration"],
  },
  {
    type: "volunteer",
    title: "Director of Program and Events Coornitaion Committee",
    company: "IEEE WIE Affinity Group",
    period: "Term 2024-2025",
    description: "Built and maintained the organization website, improving user engagement and accessibility.",
    highlights: ["Web development", "UI/UX improvement", "Accessibility standards"],
  },
  {
    type: "volunteer",
    title: "Co-Chair of Futuro 3.0 Project",
    company: "IEEE WIE Affinity Group",
    period: "January 2025 - April 2025",
    description:
      "Manage and maintain the chapter website, organize technical events, and coordinate online resources for members.",
    highlights: ["Web management", "Event coordination", "Community engagement"],
  },
]

const achievements = [
  {
    title: "Completed web design for beginners course",
    description: "Open Learning Platform, UOM",
    year: "2024",
  },
  {
    title: "Completed Front-End Web Development course",
    description: "Open Learning Platform, UOM",
    year: "2025",
  },
  {
    title: "Certificate in Spoken English for Professional Excellence",
    description: "Aquinas College of Higher Studies, Colombo Branch",
    year: "2025",
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50/50 to-white dark:from-slate-950 dark:via-indigo-950/10 dark:to-slate-950"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 dark:from-indigo-300 dark:to-blue-300 bg-clip-text text-transparent">
            Experience
          </span>{" "}
          & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Briefcase className="text-primary" size={28} />
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-900/30 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{exp.title}</h4>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-foreground/60 text-sm mb-3">{exp.period}</p>
                  <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Award className="text-accent" size={28} />
              Certificates
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-900/30 hover:border-accent/50 transition-colors relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-full -mr-10 -mt-10"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-lg">{achievement.title}</h4>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
