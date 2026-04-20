import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  return (
    <section id="book-call" className="section-pad bg-ink-gray50">
      <div className="container-x">
        <Reveal>
          <div
            className="rounded-xl border p-10 sm:p-14 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #FCE7F3 0%, #FDEDDC 50%, #FFF8F2 100%)",
              borderColor: "rgba(225, 48, 108, 0.2)",
            }}
          >
            <span className="badge">Your Brand Awaits</span>
            <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] -tracking-[0.03em] leading-[1.15] text-ink mt-5 max-w-3xl mx-auto">
              Ready To Own A Brand That{" "}
              <span className="text-ig-gradient">
                Works While You Sleep?
              </span>
            </h2>
            <p className="mt-4 text-ink-gray600 text-[15px] leading-[1.65] max-w-xl mx-auto">
              Let's discuss your brand vision. 30 minutes. No commitment. Pure
              clarity.
            </p>

            <ul className="mt-8 inline-grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-ink-gray800 text-[14px] text-left">
              <li className="flex gap-3">
                <span className="text-brand-pink font-bold">✓</span>
                Personalised ₹50L roadmap
              </li>
              <li className="flex gap-3">
                <span className="text-brand-pink font-bold">✓</span>
                ₹3.5L launch bonuses unlocked
              </li>
              <li className="flex gap-3">
                <span className="text-brand-pink font-bold">✓</span>
                Zero obligation, zero pressure
              </li>
              <li className="flex gap-3">
                <span className="text-brand-pink font-bold">✓</span>
                Brand live in 30 days if we partner
              </li>
            </ul>

            <div className="mt-10">
              <CTAButton>Book My Free Strategy Session</CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
