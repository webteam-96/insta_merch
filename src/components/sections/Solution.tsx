import { Sparkles, MonitorSmartphone, Cog } from "lucide-react";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

const phases = [
  {
    icon: Sparkles,
    title: "Premium Brand Identity",
    body: "We build custom product lines and unique brand identities that perfectly reflect your personality.",
    step: "01",
  },
  {
    icon: MonitorSmartphone,
    title: "High-Converting Web Store",
    body: "We design premium ecommerce websites engineered to turn casual viewers into loyal customers.",
    step: "02",
  },
  {
    icon: Cog,
    title: "Automated Operations",
    body: "We handle all fulfillment, shipping, and customer service so your brand runs on autopilot.",
    step: "03",
  },
];

export function Solution() {
  return (
    <section id="roadmap" className="bg-white relative">
      <div className="container-x">
        <Reveal>
          <div className="text-center pt-16 mb-0">
            <span className="badge">Your 30-Day Roadmap</span>
            <h2 className="font-display font-extrabold text-[clamp(22px,3.5vw,40px)] -tracking-[0.03em] leading-[1.2] max-w-[720px] mx-auto mt-3">
              Here's how Insta Merch drives{" "}
              <em className="not-italic text-ig-gradient">more revenue</em>{" "}
              without stealing hours from your content creation
            </h2>
            {/* <p className="mt-3 text-[15px] text-ink-gray600">
              Three phases. One proven system. Zero guesswork on your end.
            </p> */}
          </div>
        </Reveal>
      </div>

      {/* Gradient cream band with blobs */}
      <div
        className="mt-10 relative overflow-hidden"
        style={{
          paddingTop: "20px",
          paddingBottom: "52px",
          background:
            "linear-gradient(135deg, #FCE7F3 0%, #FDEDDC 50%, #FFF8F2 100%)",
        }}
      >
        <div
          aria-hidden
          className="blob"
          style={{
            width: 300,
            height: 300,
            top: -80,
            left: "8%",
            background:
              "radial-gradient(circle, rgba(131,58,180,0.22), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="blob"
          style={{
            width: 320,
            height: 320,
            bottom: -100,
            right: "10%",
            background:
              "radial-gradient(circle, rgba(247,119,55,0.25), transparent 70%)",
            animationDelay: "3s",
          }}
        />

        <div className="container-x relative">
          <div className="grid grid-cols-1 md:grid-cols-3 relative" style={{ gap: "0.5rem" }}>
            {/* Connector line on desktop */}
            <div
              aria-hidden
              className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[2px] opacity-30"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #833AB4, #E1306C, #F77737, transparent)",
              }}
            />

            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="relative bg-white/80 backdrop-blur rounded-[16px] px-6 flex items-start gap-[18px] transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-lg h-full group overflow-hidden" style={{ paddingTop: "1.05rem", paddingBottom: "1.05rem" }}>
                    {/* Step number watermark */}
                    <span
                      aria-hidden
                      className="absolute right-3 top-2 font-display font-black text-[64px] leading-none text-ig-gradient opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                    >
                      {p.step}
                    </span>
                    <div
                      className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0 text-white shadow-[0_4px_14px_rgba(225,48,108,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background:
                          "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
                      }}
                    >
                      <Icon
                        className="h-[22px] w-[22px]"
                        strokeWidth={2.2}
                      />
                    </div>
                    <div className="relative">
                      <h3 className="font-display text-base font-extrabold -tracking-[0.02em] leading-[1.3] text-ink mb-2">
                        {p.title}
                      </h3>
                      <p className="text-[13.5px] text-ink-gray600 leading-[1.65]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 text-center">
              <CTAButton>Map Out My 30-Day Roadmap</CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
