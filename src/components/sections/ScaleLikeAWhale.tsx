import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function ScaleLikeAWhale() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        background:
          "linear-gradient(180deg, #EAF6FF 0%, #CFEAFF 45%, #B0D8FA 100%)",
      }}
    >
      {/* Underwater light rays */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% -20%, rgba(255,255,255,0.6), transparent 55%)",
        }}
      />
      {/* Drifting bubbles */}
      {[
        { size: 14, left: "8%", top: "20%", delay: "0s" },
        { size: 10, left: "18%", top: "70%", delay: "1s" },
        { size: 22, left: "78%", top: "15%", delay: "2s" },
        { size: 8, left: "88%", top: "55%", delay: "0.5s" },
        { size: 16, left: "48%", top: "82%", delay: "1.5s" },
        { size: 12, left: "62%", top: "30%", delay: "2.2s" },
      ].map((b, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute rounded-full bg-white/50 backdrop-blur border border-white/60 animate-float-slow"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
            animationDelay: b.delay,
            boxShadow: "inset 2px 2px 6px rgba(255,255,255,0.9)",
          }}
        />
      ))}
      {/* Floating blobs */}
      <div
        aria-hidden
        className="blob"
        style={{
          width: 400,
          height: 400,
          top: -120,
          right: -80,
          background:
            "radial-gradient(circle, rgba(131,58,180,0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="blob"
        style={{
          width: 340,
          height: 340,
          bottom: -140,
          left: -60,
          background:
            "radial-gradient(circle, rgba(247,119,55,0.2), transparent 70%)",
          animationDelay: "3s",
        }}
      />

      <div className="container-x relative">
        <Reveal>
          <div className="text-center mb-12">
            <span className="badge">The Dream Team Guarantee</span>
            <h2 className="font-display font-extrabold text-[clamp(28px,4.5vw,52px)] -tracking-[0.03em] leading-[1.1] text-ink mt-4">
              The{" "}
              <span className="text-ig-gradient">"Scale Like a Whale"</span>{" "}
              Guarantee{" "}
              <span
                className="inline-block align-middle animate-bounce-subtle"
                aria-hidden
              >
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-14 items-center">
          {/* Image card */}
          <Reveal>
            <motion.div style={{ y: imgY }} className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[32px] blur-2xl opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(131,58,180,0.4), rgba(225,48,108,0.35), rgba(247,119,55,0.4))",
                }}
              />
              <div className="relative rounded-[24px] overflow-hidden bg-white/60 backdrop-blur-sm border border-white/70 shadow-[0_30px_60px_-20px_rgba(30,64,120,0.45)]">
                <img
                  src="/scale-like-whale.png"
                  alt="Scale like a whale with Insta Merch"
                  className="w-full block"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </Reveal>

          {/* Copy */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p className="text-[15px] sm:text-[16px] text-ink-gray800 leading-[1.75]">
                We are so confident that our Insta Merch system is the absolute
                best way to{" "}
                <span className="text-brand-magenta font-bold">
                  make a massive splash
                </span>
                , we guarantee that swimming alongside us will be infinitely{" "}
                <b className="text-ink">smoother, faster,</b> and keep way more
                cash in your pocket than trying to brave the open ocean alone.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-[15px] sm:text-[16px] text-ink-gray800 leading-[1.75]">
                If you try to launch a brand{" "}
                <em className="not-italic text-brand-red font-bold">solo</em>,
                you will just end up{" "}
                <b className="text-ink">anchored down</b>, burning WAY MORE TIME
                and CAPITAL acting as a glorified logistics manager instead of
                doing what you do best:{" "}
                <span className="text-ig-gradient font-bold">
                  making waves as a creator!
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div
                className="rounded-xl py-5 border relative overflow-hidden"
                style={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(252,231,243,0.8))",
                  borderColor: "rgba(225, 48, 108, 0.25)",
                }}
              >
                <p className="font-display font-extrabold text-lg sm:text-xl text-ink mb-1">
                  When WE PARTNER, you get a{" "}
                  <span className="text-ig-gradient">
                    hands-free, cash-flowing asset!
                  </span>
                </p>
                <p className="font-display font-black text-2xl sm:text-3xl text-brand-magenta tracking-wide">
                  WIN-WIN
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <CTAButton>See If I Qualify For Partnership</CTAButton>
                <p className="text-[12.5px] text-ink-gray600">
                  Takes 30 minutes · No commitment required
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
