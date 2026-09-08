import Link from "next/link";

export default function Aircraft() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#171717]">

      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

          <Link href="/" className="group flex items-center gap-3">

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-xs font-semibold text-white">
              ACA
            </span>

            <span className="hidden text-sm font-medium sm:block">
              Andy Cano-Avila
            </span>

          </Link>

          <Link
            href="/#work"
            className="text-sm text-black/55 transition hover:text-black"
          >
            ← Back to work
          </Link>

        </nav>
      </header>


      {/* COMING SOON */}
      <section className="flex min-h-screen items-center justify-center px-6">

        <div className="text-center">

          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
            Project 04
          </p>

          <h1 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
            Information
            <br />
            <span className="text-black/30">
              coming soon.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-base leading-7 text-black/50">
            More details about this project will be added soon.
          </p>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 px-6 pb-8 lg:px-10">

        <div className="mx-auto flex max-w-7xl justify-between border-t border-black/10 pt-7 text-[11px] uppercase tracking-[0.15em] text-black/40">

          <span>Andy Cano-Avila</span>

          <Link
            href="/"
            className="transition hover:text-black"
          >
            Back to portfolio ↑
          </Link>

        </div>

      </footer>

    </main>
  );
}