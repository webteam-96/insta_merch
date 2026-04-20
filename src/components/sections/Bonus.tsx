import { Gift, Sparkles } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { useFormModal } from "../form/FormModal";

const bonuses = [
  {
    value: "₹1,00,000",
    title: "Aggressive Launch Marketing & Paid Ads Funnel Strategy",
  },
  {
    value: "₹1,00,000",
    title: "Complete Ecommerce Website & High-Converting Store Setup",
  },
  {
    value: "₹75,000",
    title: "Complete Operations & Supply Chain Automation Setup",
  },
  {
    value: "₹75,000",
    title: "Custom Brand Identity & Premium Packaging Design",
  },
];

const sparkPositions = [
  { top: "8%", left: "6%", delay: "0s", size: 14 },
  { top: "14%", right: "12%", delay: "0.4s", size: 10 },
  { top: "38%", left: "18%", delay: "0.8s", size: 12 },
  { top: "60%", right: "8%", delay: "1.2s", size: 16 },
  { top: "80%", left: "45%", delay: "1.6s", size: 10 },
  { top: "22%", left: "48%", delay: "2s", size: 12 },
];

export function Bonus() {
  const { open } = useFormModal();
  return (
    <section
      className="section-pad text-white text-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #5B2D91 0%, #833AB4 20%, #C13584 45%, #E1306C 65%, #FD1D1D 80%, #F77737 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 10s ease infinite",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.18), transparent 55%)",
        }}
      />

      {/* Floating sparkles */}
      {sparkPositions.map((p, i) => (
        <Sparkles
          key={i}
          aria-hidden
          className="absolute text-white/70 animate-spark-twinkle pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            right: p.right,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="container-x relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-pill bg-white/15 border border-white/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white mb-5 backdrop-blur">
            100% Free Strategy Session
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-black text-[clamp(28px,4.5vw,52px)] leading-[1.1] -tracking-[0.03em] max-w-3xl mx-auto">
            Exclusive Bonuses Worth{" "}
            <span className="relative inline-block">
              <span
                className="text-brand-yellow drop-shadow-[0_2px_8px_rgba(252,175,69,0.4)]"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 4s ease infinite",
                }}
              >
                ₹3,50,000+
              </span>
              <Sparkles
                aria-hidden
                className="absolute -top-3 -right-6 h-5 w-5 text-brand-yellow animate-spark-twinkle"
              />
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-white/85 max-w-xl mx-auto text-[15px]">
            Included free when you partner with us this month — bundled with
            every brand launch.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
          {bonuses.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="relative bg-white/12 backdrop-blur-sm rounded-lg border border-white/25 p-5 flex items-start gap-4 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] h-full group overflow-hidden">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span
                    className="absolute inset-0 block"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
                      transform: "translateX(-120%) skewX(-20deg)",
                      animation: "shimmer 2s ease-in-out 1",
                    }}
                  />
                </div>
                <div className="relative w-12 h-12 rounded-[12px] bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Gift className="h-6 w-6 text-brand-pink" strokeWidth={2.4} />
                </div>
                <div className="relative">
                  <div className="font-display font-black text-xl text-brand-yellow leading-none">
                    {b.value}
                    <span className="text-white/60 text-xs font-sans font-normal ml-1">
                      Value
                    </span>
                  </div>
                  <p className="mt-2 text-white/95 text-[14px] leading-[1.5]">
                    {b.title}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <button
              type="button"
              onClick={open}
              className="relative inline-flex items-center gap-2 rounded-pill bg-white text-brand-magenta px-9 py-4 font-bold text-sm uppercase tracking-wide shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.03]"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Claim My Spot →
            </button>
            <p className="mt-4 text-white/80 text-sm">
              Only for the next 2 creators this month.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
