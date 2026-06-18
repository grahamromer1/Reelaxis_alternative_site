// Hero media slot — placeholder for a short founder video on practical AI for SMBs.
// TODO: Replace this placeholder with the real founder video. Drop in a <video>
// (poster + mp4/webm) or an embed (YouTube/Vimeo/Mux) inside the aspect-video frame.
export function HeroVideo() {
  return (
    <figure className="relative">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-ink shadow-xl shadow-brand/10">
        {/* Subtle backdrop so the placeholder reads as "video coming soon," not broken */}
        <div className="absolute inset-0 bg-grid opacity-[0.12]" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 35%, rgba(47,111,179,0.35), transparent 60%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <button
            type="button"
            aria-label="Founder video coming soon"
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-brand" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </button>
          <p className="mt-5 text-sm font-semibold text-white">
            A quick hello from the founders
          </p>
          <p className="mt-1 text-xs text-white/60">
            Video coming soon — real operators on practical AI for SMBs
          </p>
        </div>

        {/* Label band */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-sm">
          <span className="text-xs font-medium text-white/80">
            Reel Axis — founder intro
          </span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-white/70">
            Placeholder
          </span>
        </div>
      </div>
      <figcaption className="sr-only">
        Placeholder for a founder introduction video.
      </figcaption>
    </figure>
  );
}
