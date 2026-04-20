import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

const pains = [
  {
    title: "Poor Monetization Channels",
    body: "Creators leave money on the table by not giving their audience a way to buy directly from them.",
    image: "/01.png",
  },
  {
    title: "Operational Headaches",
    body: "You don't have the time to source products, pack boxes, or manage logistics, so you just don't do it.",
    image: "/02.png",
  },
  {
    title: "Poor Brand Experience",
    body: "Selling cheap, generic print-on-demand tees damages your premium image and trust.",
    image: "/03.png",
  },
  {
    title: "High Setup Costs",
    body: "Hiring a separate designer, developer, marketer, and operations team drains your capital and takes months to coordinate.",
    image: "/04.png",
  },
];

export function PainPoints() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="section-header">
            <span className="badge">Why Most Creators Fail</span>
            <h2>
              <span className="text-ig-gradient italic">THIS IS WHY</span>{" "}
              Your Influence Struggles To Scale Profitably
            </h2>
            <p>
              These four pain points are silently destroying your earning
              potential every single day.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="relative bg-white rounded-lg px-4 sm:px-5 py-6 shadow-sm border border-brand-red/[0.12] overflow-hidden h-full hover-glow group text-center sm:text-left">
                <span
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: "linear-gradient(90deg, #ef4444, #f97316)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute -right-12 -top-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(239,68,68,0.25), transparent 70%)",
                  }}
                />
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-[16px] overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 mx-auto sm:mx-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-[15px] sm:text-base lg:text-lg font-bold -tracking-[0.02em] mb-2 text-ink">
                  {p.title}
                </h3>
                <p className="text-[13px] text-ink-gray400 leading-[1.6]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <CTAButton>Still Stuck In This Loop? Fix My Revenue</CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
