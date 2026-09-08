"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Hydraulic Robotic Hand",
    category: "Mechanical Design / Robotics",
    description:
      "A hydraulic-actuated robotic hand designed for hazardous-environment applications.",
    href: "/projects/hydraulic-robotic-hand",
    featured: true,
  },
  {
    number: "02",
    title: "Autonomous Drone Vision",
    category: "Systems Engineering / Autonomous Systems",
    description:
      "An onboard vision system for tracking and engaging aerial targets.",
    href: "/projects/drone-vision",
    featured: false,
    image: "/Images/Camera-Vision/Drone-Testing.jpeg",
  },
  {
    number: "03",
    title: "NASA Micro-Rover",
    category: "Mechanical Design / Space",
    description:
      "Mechanical subsystem design for a conceptual mars micro-rover.",
    href: "/projects/Nasa",
    featured: false,
    image: "/Images/Nasa/Full-Assembly.png",
  },
  {
    number: "04",
    title: "Autonomous Aircraft",
    category: "Systems Engineering / UAV",
    description:
      "Design, testing, and technical documentation for a conceptiual autonomous aircraft system.",
    href: "/projects/Aircraft",
    featured: false,
    image: "/Images/Aircraft/Aircraft.png",
  },
];

export default function Home() {
    const [darkNav, setDarkNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      let currentSection = "light";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 80 && rect.bottom > 80) {
          currentSection = section.classList.contains("bg-[#171717]")
            ? "light"
            : section.classList.contains("bg-white")
              ? "dark"
              : "light";
        }
      });

      setDarkNav(currentSection === "dark");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#171717]">

      {/* NAVIGATION */}
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-gradient-to-b transition-colors duration-300 ${
          darkNav
            ? "from-white/90 via-white/45 to-transparent text-[#171717]"
            : "from-black/15 via-black/5 to-transparent text-white"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

          <Link href="/" className="group flex items-center gap-3">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                darkNav
                  ? "bg-[#171717] text-white"
                  : "bg-white text-[#5A1F2B]"
              }`}
            >
              ACA
            </span>

            <span className="hidden text-sm font-medium sm:block">
              Andy Cano-Avila
            </span>
          </Link>


          <div className="hidden items-center gap-8 text-sm md:flex">

            <a
              href="#work"
              className={`transition-colors duration-300 ${
                darkNav
                  ? "text-black/50 hover:text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Work
            </a>

            <a
              href="#about"
              className={`transition-colors duration-300 ${
                darkNav
                  ? "text-black/50 hover:text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              About
            </a>

            <a
              href="#contact"
              className={`transition-colors duration-300 ${
                darkNav
                  ? "text-black/50 hover:text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Contact
            </a>

          </div>


          <a
            href="#contact"
            className={`text-sm font-medium transition-colors duration-300 ${
              darkNav
                ? "text-[#171717] hover:text-black/60"
                : "text-white hover:text-white/60"
            }`}
          >
            Let's talk →
          </a>

        </nav>
      </header>
      

      {/* HERO */}
      <section className="min-h-screen bg-[#5A1F2B] text-white">

        <div className="mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10 lg:pb-24">

          <div className="w-full">

            <div className="mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6A0AA]" />
              Mechanical Engineering · Texas A&M University
            </div>


            <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">

              <div>

                <h1 className="max-w-5xl text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.02em]">
                  Designing
                  <br />
                  <span className="mt-2 inline-block text-white/35">
                    the "What if...?"
                  </span>
                </h1>

              </div>


              <div className="max-w-xs">

                <p className="text-base leading-7 text-white/65">
                  Mechanical engineer focused on mechanical design, systems
                  engineering, and developing practical solutions to complex
                  problems, with a growing interest in robotics.
                </p>

                <a
                  href="#work"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition group-hover:bg-white group-hover:text-[#5A1F2B]">
                    ↓
                  </span>

                  Explore my work
                </a>

              </div>

            </div>


            <div className="mt-20 flex items-center justify-between border-t border-white/15 pt-5 text-[11px] uppercase tracking-[0.18em] text-white/40">

              <span>Robotics</span>
              <span>Mechanical Design</span>
              <span className="hidden sm:block">Systems Engineering</span>
              <span className="hidden sm:block">2026</span>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section
        id="work"
        className="border-t border-black/10 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">

          <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/55">
                Selected work
              </p>

              <h2 className="mt-5 text-5xl font-medium tracking-[-0.05em] md:text-6xl">
                Projects
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-6 text-black/60">
              Engineering projects spanning mechanical design, robotics,
              aerospace, computer vision, and systems engineering.
            </p>

          </div>


          {/* FEATURED PROJECT */}

          <Link
            href={projects[0].href}
            className="group block"
          >

            <article>

              <div className="relative aspect-[16/8] overflow-hidden bg-[#e7e7e2]">

                <img
                  src="/Images/Robotic-Hand/Combined-Hand.png"
                  alt="CAD model of hydraulic robotic hand"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-medium">
                  01
                </div>

                <div className="absolute bottom-6 right-6 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-[#171717] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </div>

              </div>


              <div className="grid gap-6 border-b border-black/10 py-8 md:grid-cols-[1fr_2fr_auto] md:items-start">

                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/45">
                  Mechanical Design / Robotics
                </p>

                <div>

                  <h3 className="text-3xl font-medium tracking-[-0.04em]">
                    Hydraulic Robotic Hand
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
                    A hydraulic-actuated robotic hand designed for
                    hazardous-environment applications.
                  </p>

                </div>

                <span className="text-sm font-medium">
                  Explore →
                </span>

              </div>

            </article>

          </Link>


          {/* OTHER PROJECTS */}

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            {projects.slice(1).map((project) => (

              <Link
                key={project.number}
                href={project.href}
                className="group"
              >

                <article>

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e7e7e2]">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-medium">
                      {project.number}
                    </div>

                    <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#171717] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </div>

                  </div>


                  <div className="border-b border-black/10 py-6">

                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-black/45">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-xl font-medium tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      {project.description}
                    </p>

                  </div>

                </article>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ENGINEERING PROFILE */}
      <section
        id="about"
        className="bg-[#171717] text-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">

          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

            <div>

              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                Engineering profile
              </p>

            </div>


            <div>

              <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                From concept to analysis, manufacturing, and testing.
              </h2>


              <p className="mt-10 max-w-2xl text-base leading-8 text-white/45">
                I am naturally a curious person. I like to know how everything connects, hence why I 
                enjoy working across the engineering process, expanding my knowledge base. 
                My projects have given me experience designing mechanical systems, analyzing
                components, building prototypes, and validating designs through testing.
              </p>


              <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4">

                <Skill title="CAD" items="SolidWorks · Inventor · Fuaion 360" />
                <Skill title="Analysis" items="FEA · MATLAB" />
                <Skill title="Programming" items="Python · MAVLink" />
                <Skill title="Systems" items="Robotics · Prosthesis · UAVs · Space Systems · Automotive" />
                <Skill title="Protoyping" items="3D Printning · Metal Fabrication · Woodworking" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40"
      >

        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/35">
          Contact
        </p>

        <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

          <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
            Have a project
            <br />
            I can help build?
          </h2>


          <div className="flex gap-3">

            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white transition hover:bg-black/75"
            >
              Email me
            </a>

            <a
              href="#"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition hover:border-black/40"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 py-7 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-[11px] uppercase tracking-[0.15em] text-black/30 sm:flex-row">

          <span>Andy Cano</span>

          <span>Mechanical Engineering · Texas A&M</span>

        </div>

      </footer>

    </main>
  );
}


function Skill({
  title,
  items,
}: {
  title: string;
  items: string;
}) {
  return (
    <div>

      <p className="text-xs font-medium text-white/70">
        {title}
      </p>

      <p className="mt-2 text-xs leading-5 text-white/35">
        {items}
      </p>

    </div>
  );
}