import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export type Role = {
  title: string;
  name: string;
  photo: string;
  linkedin: string;
  body: string;
  tint: string;
};

const AUTO_MS = 3000;
const RESUME_AFTER_MS = 6000;

export function TeamCarousel({ roles }: { roles: Role[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<number | null>(null);
  const isMobileRef = useRef(true);
  const scrollSyncTimer = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => (isMobileRef.current = mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      if (!isMobileRef.current) return;
      setIndex((i) => (i + 1) % roles.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, roles.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isMobileRef.current) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  }, [index]);

  const handleInteraction = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(
      () => setPaused(false),
      RESUME_AFTER_MS
    );
  }, []);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || !isMobileRef.current) return;
    if (scrollSyncTimer.current) window.clearTimeout(scrollSyncTimer.current);
    scrollSyncTimer.current = window.setTimeout(() => {
      const { scrollLeft, clientWidth } = track;
      let closest = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((el, i) => {
        const c = el as HTMLElement;
        const cardCenter = c.offsetLeft + c.offsetWidth / 2;
        const viewCenter = scrollLeft + clientWidth / 2;
        const dist = Math.abs(cardCenter - viewCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setIndex((i) => (i === closest ? i : closest));
    }, 80);
  }, []);

  const goTo = (i: number) => {
    handleInteraction();
    setIndex(i);
  };

  const goPrev = () => goTo((index - 1 + roles.length) % roles.length);
  const goNext = () => goTo((index + 1) % roles.length);

  const arrowBase =
    "md:hidden absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-ink-gray200 flex items-center justify-center text-ink-gray600 hover:border-brand-pink hover:text-brand-pink transition-all duration-200 hover:scale-110 hover:shadow-lg bg-white/95 backdrop-blur shadow-md";

  return (
    <div className="mb-16">
      <div className="relative">
        {/* Prev arrow — left side */}
        <button
          type="button"
          aria-label="Previous team member"
          onClick={goPrev}
          className={`${arrowBase} left-1 md:-left-4`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Carousel track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onTouchStart={handleInteraction}
          onMouseDown={handleInteraction}
          className="md:grid md:grid-cols-3 md:gap-5 flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide"
        >
          {roles.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 0.08}
              className="snap-center shrink-0 w-full md:w-auto px-10 md:px-0"
            >
              <div className="relative bg-white border border-ink-gray200 rounded-lg p-6 h-full shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-pink/30 group overflow-hidden flex flex-col text-center">
                <span
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, ${r.tint}, #E1306C, #F77737)`,
                  }}
                />
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${r.tint}33, transparent 70%)`,
                  }}
                />

                {/* LinkedIn icon — top right */}
                <a
                  href={r.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${r.name} on LinkedIn`}
                  className="absolute top-4 right-4 z-10 w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all border hover:scale-110 hover:shadow-md"
                  style={{
                    background: "rgba(10, 102, 194, 0.08)",
                    color: "#0a66c2",
                    borderColor: "rgba(10, 102, 194, 0.25)",
                  }}
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                </a>

                <div className="relative w-[96px] h-[96px] mx-auto ring-rotate rounded-full mb-3 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                    loading="lazy"
                  />
                </div>
                <h4 className="relative font-display font-bold text-[15px] -tracking-[0.02em] text-ink mb-0.5">
                  {r.name}
                </h4>
                <p
                  className="relative text-[11px] uppercase tracking-[0.15em] font-semibold mb-3"
                  style={{ color: r.tint }}
                >
                  {r.title}
                </p>
                <p className="relative text-[13.5px] text-ink-gray600 leading-[1.65] flex-1">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Next arrow — right side */}
        <button
          type="button"
          aria-label="Next team member"
          onClick={goNext}
          className={`${arrowBase} right-1 md:-right-4`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
