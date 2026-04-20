import { Calendar, Users, Zap } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { useFormModal } from "../form/FormModal";

const highlights = [
  { icon: Users, label: "Just 2 slots / month" },
  { icon: Calendar, label: "Brand live in 30 days" },
  { icon: Zap, label: "Full done-for-you system" },
];

export function Scarcity() {
  const { open } = useFormModal();
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 10% 0%, #2b0b3e 0%, #13071f 55%, #080311 100%)",
      }}
    >
      {/* subtle grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* floating blobs */}
      <div
        aria-hidden
        className="blob"
        style={{
          width: 420,
          height: 420,
          top: -150,
          right: -100,
          background:
            "radial-gradient(circle, rgba(225,48,108,0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="blob"
        style={{
          width: 380,
          height: 380,
          bottom: -160,
          left: -80,
          background:
            "radial-gradient(circle, rgba(247,119,55,0.25), transparent 70%)",
          animationDelay: "3s",
        }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-10 lg:gap-16 items-center">
          {/* Big "2" focal number with pulse rings */}
          <Reveal>
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] mx-auto">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full animate-pulse-ring"
                style={{
                  background:
                    "radial-gradient(circle, rgba(225,48,108,0.25), transparent 70%)",
                }}
              />
              <span
                aria-hidden
                className="absolute inset-6 rounded-full border border-white/15"
              />
              <span
                aria-hidden
                className="absolute inset-12 rounded-full border border-white/10"
              />
              <div
                className="absolute inset-0 flex items-center justify-center font-display font-black text-[160px] sm:text-[200px] leading-none -tracking-[0.06em]"
                style={{
                  background:
                    "linear-gradient(135deg, #C13584 0%, #E1306C 50%, #F77737 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(225,48,108,0.45))",
                }}
              >
                2
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <span
                className="inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-red-400 animate-pulse"
                />
                Limited Availability
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display font-black text-[clamp(30px,5vw,54px)] -tracking-[0.03em] leading-[1.02] text-white">
                Only{" "}
                <span className="text-ig-gradient">2 New Creators</span>{" "}
                <span className="text-white/70">per Month.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-white/75 leading-[1.7] max-w-2xl text-[15px] sm:text-[16px]">
                Because we manage your entire operation from strategy to daily
                fulfillment, we limit ourselves to just{" "}
                <b className="text-white">2 new creators</b> monthly.{" "}
                <b className="text-white">Spots fill fast.</b> Secure yours
                today, claim your bonuses, and let's get your brand live in 30
                days.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-7 flex flex-wrap gap-3">
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <li
                      key={h.label}
                      className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 py-2 text-[13px] text-white/90 backdrop-blur"
                    >
                      <Icon className="h-4 w-4 text-brand-pink" />
                      {h.label}
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="button"
                  onClick={open}
                  className="relative inline-flex items-center gap-2.5 rounded-pill bg-white text-ink-gray800 px-9 py-4 font-bold text-sm uppercase tracking-wide shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-brand-magenta"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Book My 1-on-1 Brand Launch Call →
                </button>
                <p className="text-[12.5px] text-white/60">
                  30 minutes · Let's discuss your brand vision
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
