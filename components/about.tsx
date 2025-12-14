export default function About() {
  return (
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent">
            Me
          </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-900/40 dark:to-blue-900/40 p-1 soft-shadow animate-float-slow hover:scale-105 transition-transform duration-300">
                <div className="w-full aspect-square bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/60 dark:to-blue-900/60 rounded-3xl flex items-center justify-center">
                  <span className="text-9xl">👩‍💻</span>
                </div>
              </div>
            </div>

            {/* Right: Bio */}
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-semibold text-foreground mb-3">IT Undergraduate</h3>
                <p className="text-foreground/70 leading-relaxed">
                  I'm an IT undergraduate with a passion for full-stack development and solving complex technical
                  problems. My academic foundation spans both Information Technology and Management, providing me with a
                  unique perspective on building practical, user-centric solutions.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-200">
                <h3 className="text-2xl font-semibold text-foreground mb-3">What Drives Me</h3>
                <p className="text-foreground/70 leading-relaxed">
                  I'm fascinated by the intersection of elegant design and robust engineering. Whether building user
                  interfaces or backend systems, I strive to create applications that are not only functional but also
                  delightful to use. I love collaborating with others and continuously learning new technologies.
                </p>
              </div>

              <div className="pt-4 animate-fade-in-up animation-delay-400">
                <h4 className="font-semibold text-foreground mb-3">Areas of Interest:</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Cloud Technologies & DevOps
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    UI/UX Design & Implementation
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Database Design & Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
