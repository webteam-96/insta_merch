import { Check, X } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const oldWay = [
  "Burning lakhs hiring disconnected designers, developers, and marketers",
  "Wasting months sourcing reliable vendors and testing product quality",
  "Sacrificing content creation to pack boxes and handle shipping delays",
  "No proven system — constant trial, error, and expensive mistakes",
  "Become a logistics manager rather than a creator",
];

const newWay = [
  "Completely streamlined launch handled by industry experts",
  "Zero operational headaches — inventory, fulfilment, and support handled",
  "Brand launches faster with superior conversion rates",
  "Premium brand identity customers are proud to purchase and wear",
  "Hands-free, cash-flowing asset that grows while creating content",
];

export function Comparison() {
  return (
    <section className="section-pad bg-ink-gray50">
      <div className="container-x">
        <Reveal>
          <div className="section-header">
            <span className="badge">The Transformation</span>
            <h2>
              The Old Way <span className="text-ink-gray400">vs</span>{" "}
              <span className="text-ig-gradient">The Insta Merch Way</span>
            </h2>
            <p>
              Two very different paths to the same goal. Only one of them
              actually gets you there.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {/* BAD */}
          <Reveal>
            <div className="rounded-lg overflow-hidden shadow">
              <div
                className="px-6 py-4 font-display font-bold text-sm tracking-[0.02em] text-brand-danger border-b"
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  borderColor: "rgba(239, 68, 68, 0.1)",
                }}
              >
                THE OLD WAY ❌
              </div>
              <ul className="bg-white px-6 py-6 flex flex-col gap-3.5">
                {oldWay.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13.5px] text-ink-gray600 leading-[1.55]"
                  >
                    <X
                      className="h-4 w-4 text-brand-danger shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* GOOD */}
          <Reveal delay={0.1}>
            <div className="rounded-lg overflow-hidden shadow">
              <div
                className="px-6 py-4 font-display font-bold text-sm tracking-[0.02em] text-white border-b"
                style={{
                  background:
                    "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
                  borderColor: "rgba(225, 48, 108, 0.3)",
                }}
              >
                THE INSTA MERCH WAY ✅
              </div>
              <ul className="bg-white px-6 py-6 flex flex-col gap-3.5">
                {newWay.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13.5px] text-ink-gray600 leading-[1.55]"
                  >
                    <Check
                      className="h-4 w-4 text-brand-pink shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-display font-extrabold text-[clamp(18px,2.5vw,26px)] -tracking-[0.02em] text-ink">
            Go Solo — burn time & money.{" "}
            <span className="text-ig-gradient">Partner With Us</span> — get a
            hands-free, cash-flowing asset.{" "}
            <span className="text-brand-magenta">WIN-WIN.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
