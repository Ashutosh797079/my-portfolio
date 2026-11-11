import Image from "next/image";
const skills = [
  "C",
  "Java",
  "Python",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Asha Web Solutions",
    category: "Business Website",
    description:
      "A website development business concept focused on helping businesses build their online presence.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "",
  },
  {
    number: "02",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A responsive personal portfolio to showcase my skills, projects, education and achievements.",
    tech: ["Next.js", "TypeScript", "CSS"],
    link: "",
  },
  {
    number: "03",
    title: "Easy Semester",
    category: "Student Platform",
    description:
      "A concept for helping students discover, organize and share semester notes and study resources.",
    tech: ["React", "JavaScript", "Firebase"],
    link: "",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="text-xl font-black tracking-wide">
            AK<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#skills" className="transition hover:text-cyan-400">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#education" className="transition hover:text-cyan-400">Education</a>
            <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/50 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let&apos;s Talk ↗
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-10"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            B.Tech CSE Student · Aspiring Developer
          </div>

          <p className="mb-3 text-lg text-slate-400">Hello, I&apos;m</p>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Ashutosh
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Kumar.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
            I&apos;m learning to build for the web.
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-slate-400">
            Computer Science Engineering student at Government Engineering
            College, Vaishali. I enjoy exploring web technologies, solving
            problems and turning ideas into useful digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Explore My Work ↗
            </a>
<a
  href="/resume.pdf"
  download
  className="rounded-xl border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
>
  Download Resume ↓
</a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>⌘ Curious Learner</span>
            <span>⌘ Problem Solver</span>
            <span>⌘ Future Developer</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-4 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-cyan-400/25 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-900/20 p-5 shadow-2xl shadow-cyan-950/30">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs tracking-[0.25em] text-slate-400">PROFILE / 001</span>
              <span className="text-xs text-cyan-300">PORTFOLIO</span>
            </div>

            <div className="flex aspect-[4/4.5] items-center justify-center overflow-hidden rounded-2xl py-6">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/50 shadow-[0_0_80px_rgba(34,211,238,0.12)]">
  <Image
    src="/profile.jpg"
    alt="Ashutosh Kumar"
    fill
    priority
    sizes="256px"
    className="object-cover"
  />
</div>
            </div>

            <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-xl font-bold">Ashutosh Kumar</p>
                <p className="mt-1 text-sm text-slate-400">Computer Science & Engineering</p>
              </div>
              <span className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs text-cyan-300">
                India 🇮🇳
              </span>
            </div>
          </div>
          <div className="absolute -right-3 top-16 rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 shadow-xl sm:-right-7">
            <p className="text-xs text-slate-400">CURRENT FOCUS</p>
            <p className="mt-1 font-semibold text-cyan-300">Web Development</p>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/5 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">01 / About Me</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Learning today. <span className="text-slate-500">Building tomorrow.</span>
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            I am a B.Tech Computer Science and Engineering student at Government
            Engineering College, Vaishali, Bihar. I am developing my programming
            and frontend development skills step by step. My goal is to build
            accessible, responsive websites and keep learning through practical
            projects.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Keep Learning", "Building my skills consistently."],
              ["02", "Build Projects", "Turning concepts into practice."],
              ["03", "Grow Together", "Learning from the developer community."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-[#0a1020] p-6 transition hover:border-cyan-400/40">
                <p className="text-sm text-cyan-400">{number}</p>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">02 / My Skills</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Tools I&apos;m learning</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          These are the programming languages and technologies I am exploring
          and using in my learning journey.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill, index) => (
            <div key={skill} className="group rounded-2xl border border-white/10 bg-[#0a1020] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/5">
              <span className="text-xs text-slate-600">0{index + 1}</span>
              <p className="mt-3 font-semibold transition group-hover:text-cyan-300">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/5 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">03 / Selected Work</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Projects & ideas</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A selection of projects and concepts from my web development journey.
            I will add live demos and source code as they become available.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="group flex flex-col rounded-2xl border border-white/10 bg-[#080d1a] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400">{project.number} / PROJECT</span>
                  <span className="text-xl text-slate-500 transition group-hover:text-cyan-300">↗</span>
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-500">{project.category}</p>
                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-200">{tech}</span>
                  ))}
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                    View project ↗
                  </a>
                ) : (
                  <p className="mt-6 text-xs text-slate-500">Demo link to be added</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">04 / Education</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">My learning journey</h2>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#0a1020] p-7 sm:p-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm text-cyan-400">BACHELOR&apos;S DEGREE</p>
              <h3 className="mt-3 text-xl font-bold">B.Tech — Computer Science & Engineering</h3>
              <p className="mt-2 text-slate-300">Government Engineering College, Vaishali</p>
              <p className="mt-1 text-sm text-slate-400">Bihar, India</p>
            </div>
            <span className="w-fit rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300">Currently studying</span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0a1020] p-7 sm:p-9">
          <p className="text-sm text-cyan-400">CERTIFICATE</p>
          <h3 className="mt-3 text-xl font-bold">Roadmap to Forward Deployed Engineer</h3>
          <p className="mt-2 text-slate-300">Scaler · Rohit Jindal, Senior AI Scientist @ Target</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Certificate earned through a learning program. Add the certificate link here when available.
          </p>
        </div>
      </section>

      <section id="contact" className="border-y border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-[#050816] to-blue-500/[0.07] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">05 / Get In Touch</p>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">Let&apos;s connect.</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Have an opportunity, project idea or suggestion? I would be happy
            to connect, learn and discuss it.
          </p>

          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="mt-9 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Send Me an Email ↗
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" className="hover:text-cyan-300">LinkedIn ↗</a>
          </div>
          <p className="mt-5 text-xs text-slate-500">Replace the placeholder email and profile links with your real details.</p>
        </div>
      </section>

      <footer className="px-6 py-7 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Ashutosh Kumar. Built with Next.js.</p>
        <a href="#home" className="mt-3 inline-block text-cyan-400 hover:text-cyan-300">Back to top ↑</a>
      </footer>
    </main>
  );
}
