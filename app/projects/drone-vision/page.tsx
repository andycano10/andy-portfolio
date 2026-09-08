"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DroneVision() {
  const [lightNav, setLightNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom > 100) {
          setLightNav(section.getAttribute("data-nav") === "light");
          break;
        }
      }
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
          lightNav
            ? "from-black/10 via-black/5 to-transparent text-white"
            : "from-white/80 via-white/40 to-transparent text-[#171717]"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

          <Link href="/" className="group flex items-center gap-3">

            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                lightNav
                  ? "bg-white text-[#5A1F2B]"
                  : "bg-[#171717] text-white"
              }`}
            >
              ACA
            </span>

            <span className="hidden text-sm font-medium sm:block">
              Andy Cano-Avila
            </span>

          </Link>

          <Link
            href="/#work"
            className={`text-sm transition-colors duration-300 ${
              lightNav
                ? "text-white/60 hover:text-white"
                : "text-black/55 hover:text-black"
            }`}
          >
            ← Back to work
          </Link>

        </nav>
      </header>


      {/* HERO */}
      <section
        data-nav="dark"
        className="mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10"
      >

        <div className="max-w-4xl">

          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/50">
            Systems Engineering · Autonomous Systems · Computer Vision
          </p>

          <h1 className="mt-6 text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Drone
            <br />
            <span className="text-black/30">
              Vision
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-black/60">
            An autonomous aerial tracking system combining computer vision,
            onboard computing, flight controls, drone technology, and mechanical integration.
          </p>

        </div>


        {/* HERO PLACEHOLDER */}
        <div className="mt-20 aspect-[3.5/2] overflow-hidden bg-white">

          <img
            src="/Images/Camera-Vision/Drone-Testing.jpeg"
            alt="Drone Vision project"
            className="h-full w-full object-cover"
          />

        </div>

      </section>


      {/* OVERVIEW */}
      <section
        data-nav="dark"
        className="border-y border-black/10 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">

            <div>

              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/50">
                Overview
              </p>

            </div>


            <div>

              <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
                Building an integrated system capable of seeing,
                tracking, and responding to an aerial target.
              </h2>

              <div className="mt-10 grid gap-8 text-sm leading-7 text-black/60 md:grid-cols-2">

                <p>
                  The project focused on developing an autonomous aerial
                  tracking system capable of detecting and engaging another
                  aircraft using onboard hardware and AI software.
                </p>

                <p>
                  My work involved flight testing and integrating computer vision, embedded
                  hardware, flight-control interfaces, and system-level
                  engineering into a functioning platform.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* REQUIREMENTS */}
      <section
        data-nav="dark"
        className="mx-auto max-w-7xl px-8 py-24 lg:px-10"
      >

        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/55">
          Engineering requirements
        </p>

        <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          Major system targets
        </h2>

        <div className="mt-8 grid border-l border-t border-black/10 md:grid-cols-4">

          {[
            ["AI Vision", "Onboard target detection and tracking"],
            ["400 ft", "Target operating distance"],
            ["Ease of Launch", "Operational by anyone"],
            ["2K", "Target imaging resolution"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="border-b border-r border-black/10 p-6 lg:p-7"
            >

              <p className="text-4xl font-medium tracking-tight">
                {value}
              </p>

              <p className="mt-3 text-sm leading-6 text-black/60">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* PROBLEM */}
      <section
        data-nav="light"
        className="bg-[#171717] text-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">

            <div>

              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                01 — The problem
              </p>

            </div>


            <div>

              <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
                How do you turn what a camera sees into a response from an aircraft?
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55">
                The system needed to detect an aerial target, determine its
                position relative to the ground, and translate that
                information into meaningful vehicle behavior.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
                The challenge extended beyond individual components. Camera
                hardware, onboard computing, vision software, controls, and
                flight systems all needed to operate together reliably.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SYSTEM DESIGN */}
      <section
        data-nav="dark"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">

          <div>

            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/60">
              02 — System design
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">
              Connecting the system.
            </h2>

          </div>


          <div>

            <div className="border border-black/10 bg-white">

              <div className="grid md:grid-cols-4">

                {[
                  ["01", "Camera", "Captures the environment."],
                  ["02", "Jetson (Onboard AI)", "Processes data and ID's target."],
                  ["03", "Jetson (Computer)", "Determines target position within flight coordinates from ground and throughout flight."],
                  ["04", "Flight Controller", "Responds to the target's continous position with flight commands."],
                ].map(([number, title, description]) => (

                  <div
                    key={number}
                    className="border-b border-black/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                  >

                    <p className="text-xs text-black/40">
                      {number}
                    </p>

                    <h3 className="mt-10 text-xl font-medium">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      {description}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
              The system connects sensing, onboard processing, target
              tracking, and vehicle control into a single autonomous workflow.
            </p>

          </div>

        </div>

      </section>


      {/* ENGINEERING APPROACH */}
      <section
        data-nav="dark"
        className="border-y border-black/10 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/60">
            03 — Engineering approach
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            Working across disciplines.
          </h2>


          <div className="mt-16 grid gap-6 md:grid-cols-4">

            {[
              ["01", "Computer Vision", "Processing image data to detect and track the target."],
              ["02", "Embedded Systems", "Integrating onboard computing and sensing hardware."],
              ["03", "Controls", "Developing tracking behavior and vehicle response."],
              ["04", "Systems Integration", "Connecting individual subsystems into one platform."],
            ].map(([number, title, description]) => (

              <div
                key={number}
                className="border border-black/10 p-7"
              >

                <p className="text-xs text-black/50">
                  {number}
                </p>

                <h3 className="mt-8 text-xl font-medium">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* TESTING */}
      <section
        data-nav="dark"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <div className="grid gap-16 md:grid-cols-2">

          <div>

            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/60">
              04 — Testing
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">
              From development to flight.
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-black/70">
              Testing was used to evaluate the integrated system and identify
              areas where sensing, tracking, and vehicle response could be
              improved.
            </p>

          </div>


          <div className="aspect-[4/3] overflow-hidden bg-white">

            <img
              src="/Images/Camera-Vision/Drone-Structure.png"
              alt="Drone Vision project"
              className="h-full w-full object-cover object-[center_20%]"
            />

          </div>

        </div>

      </section>


      {/* TAKEAWAY */}
      <section
        data-nav="light"
        className="border-t border-black/10 bg-[#5A1F2B] text-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">
            Takeaway
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
            I learned how various disciplines and hardware/software interact to develop an autonomous system.
          </h2>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#5A1F2B] px-6 pb-8 text-white lg:px-10">

        <div className="mx-auto flex max-w-7xl justify-between border-t border-white/15 pt-7 text-[11px] uppercase tracking-[0.15em] text-white/40">

          <span>Andy Cano-Avila</span>

          <Link href="/" className="transition hover:text-white">
            Back to portfolio ↑
          </Link>

        </div>

      </footer>

    </main>
  );
}