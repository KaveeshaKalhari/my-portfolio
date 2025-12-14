"use client"

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: ["React", "TypeScript", "Tailwind CSS v4", "Next.js", "HTML/CSS"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["Springboot", "ASP.NET core", "Python", "SQL", "REST APIs", "GraphQL"],
  },
  {
    name: "Databases",
    icon: "💾",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "MySQL"],
  },
  {
    name: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git", "Docker", "Vercel", "AWS", "Linux", "Swagger", "Postman"],
  },
  {
    name: "Other Skills",
    icon: "🚀",
    skills: ["Problem Solving", "Agile", "UI/UX Design", "Testing", "Web Performance"],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50/50 to-white dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 dark:from-indigo-300 dark:to-blue-300 bg-clip-text text-transparent">
            Skills
          </span>{" "}
          & Expertise
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit built through hands-on projects and continuous learning
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-8 soft-shadow hover:shadow-xl dark:hover:shadow-indigo-900/20 transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30 hover:border-primary/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 text-foreground/80 dark:text-foreground/90 rounded-full text-sm font-medium border border-indigo-200/50 dark:border-indigo-800/50 group-hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
