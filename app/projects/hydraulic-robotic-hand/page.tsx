"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HydraulicRoboticHand() {
  const [showRight, setShowRight] = useState(false);
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
            Mechanical Design · Robotics · Capstone
          </p>

          <h1 className="mt-6 text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Hydraulic
            <br />
            <span className="text-black/30">
              Robotic Hand
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-black/60">
            A hydraulic-actuated robotic hand designed to manipulate objects and operate power tools
            in hazardous environments where human intervention presents significant risk.
          </p>

        </div>


        {/* HERO IMAGE */}
        <div className="mt-20 aspect-[3.5/3] overflow-hidden bg-white">

          <img
            src="/Images/Robotic-Hand/Combined-Hand.png"
            alt="CAD assembly of hydraulic robotic hand"
            className="h-full w-full object-contain"
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
                Designing a compact mechanical system capable of producing
                controlled gripping forces.
              </h2>

              <div className="mt-10 grid gap-8 text-sm leading-7 text-black/60 md:grid-cols-2">

                <p>
                  The project focused on developing a hydraulic-actuated
                  robotic hand intended for hazardous-environment
                  applications. The hand needed to provide independent
                  control of four fingers while maintaining a compact and
                  mechanically robust architecture.
                </p>

                <p>
                  I was responsible for designing and prototyping the mechanical hand subsystem,
                  including the finger mechanism, shaft support, chain and
                  sprocket transmission, component selection, tolerancing, fabrication, assembly,
                  analysis, and physical testing.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* REQUIREMENTS */}
      <section
        data-nav="dark"
        className="mx-auto max-w-7xl px-8 py-17 lg:px-10"
      >

        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/55">
          Engineering requirements
        </p>

        <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          Major design targets
        </h2>


        <div className="mt-8 grid border-l border-t border-black/10 md:grid-cols-4">

          {[
            ["4+1", "Independently actuated fingers and thumb"],
            ["100 lb", "Target load"],
            ["0.5 sec", "Open-to-close time"],
            ["400 PSI", "Hydraulic operating pressure"],
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
                How do you create a strong, controllable grip without making
                the mechanism unnecessarily complex?
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55">
                The hand needed to transmit actuator force through a compact
                mechanism while allowing the fingers and thumb to move independently.
                The design also needed to withstand significant loading while
                minimizing shaft deflection and maintaining reliable
                mechanical connections.
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
              From actuator force to finger motion.
            </h2>

          </div>


          <div>

            <div className="aspect-[16/7.7] overflow-hidden bg-white">

              <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-black/20">
                <img
                  src="/Images/Robotic-Hand/Force-Transmission.png"
                  alt="CAD assembly of Force Transmission of fingers"
                  className="h-full w-full object-contain"
                />
              </div>

            </div>


            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
              Each finger rotates around a fixed shaft mounted to the palm.
              A sprocket rigidly attached to the finger converts chain tension into
              rotational torque, which is transferred through the finger
              linkage mechanism.
            </p>

          </div>

        </div>

      </section>


      {/* FORCE TRANSMISSION */}
      <section
        data-nav="dark"
        className="border-y border-black/10 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/60">
            03 — Force transmission
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            Chain → sprocket → linkage → finger
          </h2>


          <div className="mt-16 grid gap-6 md:grid-cols-4">

            {[
              ["01", "Hydraulic actuator", "Produces the input force."],
              ["02", "Chain", "Transfers actuator force through the hand."],
              ["03", "Sprocket", "Converts chain tension into torque."],
              ["04", "Finger linkage", "Converts rotation into gripping motion."],
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


      {/* MECHANISM */}
      <section
        data-nav="dark"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">

          <div>

            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/60">
              04 — Finger mechanism
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">
              Converting rotation into controlled motion.
            </h2>

          </div>


          <div>

            <div className="aspect-[4/2] overflow-hidden bg-white">

              <img
                  src="/Images/Robotic-Hand/Finger-Mechanism.png"
                  alt="CAD assembly of Force Transmission of fingers"
                  className="h-full w-full object-contain"
                />

            </div>


            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
              The finger mechanism uses 2 bar-linkages, 6 pivot points, and 2 passive joints
              to convert sprocket rotation into the desired gripping motion.
              Component geometry was developed to introduce appropriate clearances
              within joint types while supporting the required loading conditions.
            </p>

          </div>

        </div>

      </section>


      {/* ANALYSIS */}
      <section
        data-nav="light"
        className="bg-[#171717] text-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">

            <div>

              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                05 — Analysis
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">
                Designing for the load.
              </h2>

            </div>


            <div>

              <p className="max-w-2xl text-lg leading-8 text-white/55">
                Mechanical analysis was used to evaluate finger loading,
                shaft loading, chain tension, component strength, and
                potential sources of deflection. FEA was also used to
                identify high-stress regions and guide design decisions.
              </p>


              <div className="relative mt-12 w-full overflow-hidden">

                <div
                  className={`grid w-[calc(100%+150px)] items-start gap-6 transition-transform duration-500 md:grid-cols-[1.15fr_1fr] ${
                    showRight ? "-translate-x-[150px]" : "translate-x-0"
                  }`}
                >

                  {/* LEFT IMAGE */}
                  <div className="h-[460px]">
                    <img
                      src="/Images/Robotic-Hand/Stress-Analysis.png"
                      alt="Stress analysis of the robotic hand"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="h-[460px]">
                    <img
                      src="/Images/Robotic-Hand/Chain-Calc.png"
                      alt="Chain tension calculations for the robotic hand"
                      className="h-full w-full object-contain"
                    />
                  </div>

                </div>

                {/* ARROW */}
                <button
                  onClick={() => setShowRight(!showRight)}
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-lg text-white transition hover:bg-white hover:text-black"
                  aria-label={showRight ? "Show previous image" : "Show next image"}
                >
                  {showRight ? "←" : "→"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* MANUFACTURING & TESTING */}
      <section
        data-nav="dark"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <div className="grid gap-16 md:grid-cols-2">

          {/* MANUFACTURING */}
          <div>

            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/60">
              06 — Manufacturing
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">
              From CAD to hardware.
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-black/70">
              Manufacturing constraints influenced material selection,
              component geometry, fabrication methods, and the final
              architecture of the hand.
            </p>

            <div className="mt-10 aspect-[4/3] overflow-hidden bg-black/5">
              <img
                src="/Images/Robotic-Hand/Manufacturing.jpeg"
                alt="Manufacturing of the robotic hand"
                className="h-full w-full object-cover"
              />
            </div>

          </div>


          {/* TESTING */}
          <div>

            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/60">
              07 — Testing
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">
              Build. Test. Refine.
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-black/70">
              Physical testing was used to validate the mechanical design
              and evaluate the hand's ability to withstand the required
              loading conditions.
            </p>

            <div className="mt-10 aspect-[4/3] overflow-hidden bg-white/5">
              <video
                src="/Images/Robotic-Hand/Testing.mov"
                className="h-full w-full object-cotain"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

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
            Understanding how the various subsystems interact together is the toughest, yet most intrusting engineering.
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