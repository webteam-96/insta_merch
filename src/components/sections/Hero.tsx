import { Check, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

const valueProps = [
  "Increased Audience Monetization",
  "Increased Average Order Value",
  "Decreased Dependency on Sponsors",
  "Increased Passive Income",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section id="top" ref={ref} className="bg-white relative overflow-hidden">
      {/* SEO H1 — visible to crawlers, hidden from sighted users (the visual hero headline below is design-optimized) */}
      <h1 className="sr-only">
        Insta Merch — Done-For-You Creator Merchandise Brand Launch for
        Instagram Influencers with 100K+ Followers. Add ₹50L+ Revenue Per Year
        in 30 Days. Built by the Team Behind 3 Shark Tank India Brands.
      </h1>

      {/* Animated announcement ribbon */}
      <div
        className="text-white text-center font-semibold text-[12.5px] sm:text-[13px] tracking-[0.02em] px-5 py-2.5 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #833AB4 0%, #C13584 30%, #E1306C 55%, #FD1D1D 75%, #F77737 100%)",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 6s ease infinite",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        <Sparkles className="inline-block h-3.5 w-3.5 mr-2 -mt-0.5 animate-spark-twinkle" />
        We only work with genuine influencers and celebrities with at least{" "}
        <b className="font-bold">2% social media engagement</b>.
        <Sparkles className="inline-block h-3.5 w-3.5 ml-2 -mt-0.5 animate-spark-twinkle" />
      </div>

      {/* Floating gradient blobs backdrop */}
      <div
        aria-hidden
        className="blob"
        style={{
          width: 420,
          height: 420,
          top: -120,
          left: -120,
          background:
            "radial-gradient(circle, rgba(131,58,180,0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="blob"
        style={{
          width: 360,
          height: 360,
          bottom: -120,
          right: -80,
          background:
            "radial-gradient(circle, rgba(247,119,55,0.35), transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        aria-hidden
        className="blob"
        style={{
          width: 260,
          height: 260,
          top: "35%",
          left: "42%",
          background:
            "radial-gradient(circle, rgba(225,48,108,0.25), transparent 70%)",
          animationDelay: "4s",
        }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] items-stretch min-h-[520px]">
          {/* LEFT */}
          <div className="order-2 md:order-1 flex flex-col justify-center py-5 md:pr-14">
            <Reveal>
              <p
                className="font-display font-bold text-[clamp(14px,1.5vw,17px)] -tracking-tight mb-1.5"
                style={{ color: "rgba(20, 23, 24, 0.8)" }}
              >
                Your Personal Brand is{" "}
                <em className="italic font-black text-brand-red animate-bounce-subtle inline-block">
                  LOSING
                </em>
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <p
                className="font-display font-black text-[clamp(38px,5.5vw,64px)] leading-[1] -tracking-[0.04em] text-ink mb-3"
                aria-hidden="true"
              >
                AT LEAST <em className="not-italic text-ig-gradient">₹50L+</em>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="font-display font-bold text-[clamp(13px,1.4vw,16px)] tracking-[0.04em] uppercase mb-5"
                style={{ color: "rgba(20, 23, 24, 0.8)" }}
              >
                Annually Without You Knowing It…….
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-[clamp(14px,1.6vw,16px)] text-ink-gray600 mb-5 leading-[1.65] max-w-[520px]">
                Most creators lose{" "}
                <em className="text-brand-red font-bold not-italic">
                  most of their money
                </em>{" "}
                focusing purely on individual brand deals and algorithm payouts
                instead of{" "}
                <u className="text-brand-pink font-bold no-underline">
                  building lasting LTV
                </u>{" "}
                through their{" "}
                <strong className="text-ink font-bold">
                  own product lines
                </strong>
                .
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="flex flex-col gap-2 mb-7">
                {valueProps.map((vp, i) => (
                  <motion.li
                    key={vp}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-2.5 text-sm font-medium text-ink-gray800"
                  >
                    <span
                      className="h-[22px] w-[22px] rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_2px_6px_rgba(225,48,108,0.4)]"
                      style={{
                        background:
                          "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
                      }}
                    >
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    {vp}
                  </motion.li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col items-start gap-2.5">
                <CTAButton>Show Me How To Add ₹50L/Yr</CTAButton>
                <p className="text-[12.5px] text-ink-gray400 leading-[1.5]">
                  Takes 30 minutes · No commitment required
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT card */}
          <div className="order-1 md:order-2 flex items-start justify-start py-5 md:px-5 relative">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="w-full"
            >
              <Reveal delay={0.1} className="w-full">
                <div className="relative bg-white rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(131,58,180,0.25)] w-full max-w-[440px] mx-auto ring-1 ring-brand-pink/10 hover-lift">
                  {/* Floating gradient accent behind card */}
                  <div
                    aria-hidden
                    className="absolute -z-10 -top-5 -right-5 w-32 h-32 rounded-full blur-2xl opacity-70 animate-float-slow"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(247,119,55,0.5), transparent 70%)",
                    }}
                  />
                  <img
                    src="/main-image.png"
                    alt="Insta Merch — Own a brand that works for you"
                    className="w-full block"
                    loading="eager"
                  />
                  <div
                    className="px-5 py-4 text-left relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #FCE7F3 0%, #FDEDDC 100%)",
                    }}
                  >
                    <div className="font-display font-black text-[clamp(22px,3vw,28px)] -tracking-[0.03em] leading-[1.1] text-ig-gradient">
                      BE A BRAND OWNER
                    </div>
                    <div className="text-[13px] font-semibold text-black tracking-[0.02em]">
                      in{" "}
                      <b className="font-black text-[clamp(22px,3vw,28px)]">
                        30 DAYS
                      </b>
                    </div>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
