export default function Home() {
  return (
    <div className="min-h-screen bg-[#070B18] text-[#F7F1D6]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 500px at 20% 10%, rgba(212,175,55,0.16), transparent 60%), radial-gradient(800px 520px at 80% 20%, rgba(212,175,55,0.10), transparent 55%), radial-gradient(900px 600px at 40% 90%, rgba(123,92,28,0.18), transparent 60%)",
        }}
      />

      <header className="relative">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
          <a
            href="/"
            className="group inline-flex items-baseline gap-2 font-serif text-xl tracking-wide text-[#F7F1D6]"
          >
            <span className="font-semibold">Inkworld</span>
            <span className="text-sm text-[#D4AF37]/80 group-hover:text-[#D4AF37]">
              writing
            </span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/signin"
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-white/0 px-5 text-sm font-medium text-[#F7F1D6] backdrop-blur transition hover:border-[#D4AF37]/60 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B18]"
            >
              Sign In
            </a>
            <a
              href="/write"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#D4AF37] px-5 text-sm font-semibold text-[#070B18] shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:bg-[#E2C35E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B18]"
            >
              Start Writing
            </a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <section className="mx-auto w-full max-w-6xl px-6 pt-10 pb-14 sm:px-8 sm:pt-16 sm:pb-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-[#F7F1D6]/80 backdrop-blur">
              A place to publish and be read
            </p>

            <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-[#F7F1D6] sm:text-6xl">
              Every word belongs here
            </h1>

            <p className="mt-4 text-base leading-7 text-[#F7F1D6]/75 sm:text-lg">
              A global home for poets, storytellers, novelists and quote writers
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/write"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#070B18] shadow-[0_12px_40px_rgba(212,175,55,0.28)] transition hover:bg-[#E2C35E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B18]"
              >
                Start Writing
              </a>
              <a
                href="/explore"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-white/0 px-6 text-sm font-medium text-[#F7F1D6] backdrop-blur transition hover:border-[#D4AF37]/60 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B18]"
              >
                Explore writing
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: "Poems", value: "lyric & free verse" },
                { label: "Stories", value: "short & long form" },
                { label: "Quotes", value: "bright sparks" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                >
                  <p className="text-sm font-medium text-[#F7F1D6]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-[#F7F1D6]/70">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl tracking-tight text-[#F7F1D6] sm:text-3xl">
                Featured Writing
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#F7F1D6]/70">
                A small window into what’s blooming across Inkworld today.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-[#D4AF37]/35">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#F7F1D6]">
                  Poetry
                </span>
                <span className="text-xs text-[#F7F1D6]/70">♥ 2,418</span>
              </div>
              <h3 className="mt-4 font-serif text-xl text-[#F7F1D6]">
                The Lantern in the Ink
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#F7F1D6]/75">
                {`Tonight the page is a harbor,
and my pen—small, steadfast light.
I write the sea into silence
until the waves learn to be kind.`}
              </p>
              <p className="mt-5 text-sm text-[#F7F1D6]/70">
                by <span className="text-[#F7F1D6]">Mara Ellison</span>
              </p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#D4AF37]/10 blur-2xl transition group-hover:bg-[#D4AF37]/15" />
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-[#D4AF37]/35">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#F7F1D6]">
                  Short Story
                </span>
                <span className="text-xs text-[#F7F1D6]/70">♥ 987</span>
              </div>
              <h3 className="mt-4 font-serif text-xl text-[#F7F1D6]">
                The City That Kept Its Breath
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#F7F1D6]/75">
                The bookstore bell didn’t ring anymore, but Mira still paused at
                the threshold—listening for the old sound. Inside, dust floated
                like slow snow. Each shelf held a silence that felt written on
                purpose.
              </p>
              <p className="mt-5 text-sm text-[#F7F1D6]/70">
                by <span className="text-[#F7F1D6]">Jonah Kade</span>
              </p>
              <div className="pointer-events-none absolute -left-12 -bottom-12 h-44 w-44 rounded-full bg-[#D4AF37]/10 blur-2xl transition group-hover:bg-[#D4AF37]/15" />
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-[#D4AF37]/35">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#F7F1D6]">
                  Quote
                </span>
                <span className="text-xs text-[#F7F1D6]/70">♥ 5,204</span>
              </div>
              <h3 className="mt-4 font-serif text-xl text-[#F7F1D6]">
                A small reminder
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#F7F1D6]/80">
                “Write the sentence you’re afraid of. The rest of the story will
                arrive to keep it company.”
              </p>
              <p className="mt-5 text-sm text-[#F7F1D6]/70">
                by <span className="text-[#F7F1D6]">Asha Verne</span>
              </p>
              <div className="pointer-events-none absolute right-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-2xl transition group-hover:bg-[#D4AF37]/15" />
            </article>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 text-sm text-[#F7F1D6]/70 sm:px-8">
          <p>
            <span className="text-[#F7F1D6]">Inkworld</span> — Every word belongs
            here
          </p>
          <p className="text-[#D4AF37]/80">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
