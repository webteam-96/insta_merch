import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function Team() {
  return (
    <section id="team" className="section-pad bg-white relative overflow-hidden">
      <div className="container-x relative">
        <Reveal>
          {/* Big hero whale graphic (matches viralitymedia.in BOX MIKE TYSON scale) */}
          <div className="flex justify-center -mt-16 sm:-mt-24 lg:-mt-36 mb-4 sm:mb-8">
            <div className="relative w-full max-w-[830px]">
              <div
                aria-hidden
                className="absolute inset-x-10 top-10 bottom-10 rounded-full blur-3xl opacity-70 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(131,58,180,0.28), rgba(225,48,108,0.22) 45%, transparent 75%)",
                }}
              />
              <img
                src="/scale-like-whale.png"
                alt="Scale like a whale guarantee"
                className="relative w-full h-auto object-contain drop-shadow-[0_18px_40px_rgba(131,58,180,0.3)]"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-extrabold text-[clamp(30px,5vw,52px)] -tracking-[0.03em] leading-[1.05] text-ink">
              The{" "}
              <span className="text-ig-gradient">"Scale Like a Whale"</span>{" "}
              Guarantee
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] text-ink-gray600 leading-[1.7] max-w-2xl mx-auto">
              We are so confident that our Insta Merch system is the absolute
              best way to{" "}
              <span className="text-brand-magenta font-bold">
                make a massive splash
              </span>
              , we guarantee that swimming alongside us will be infinitely{" "}
              <b className="text-ink">smoother, faster,</b> and keep way more
              cash in your pocket than trying to brave the open ocean alone.
            </p>
            <p className="mt-4 text-[15px] sm:text-[16px] text-ink-gray600 leading-[1.7] max-w-2xl mx-auto">
              If you try to launch a brand{" "}
              <em className="not-italic text-brand-red font-bold">solo</em>,
              you will just end up <b className="text-ink">anchored down</b>,
              burning WAY MORE TIME and CAPITAL acting as a glorified logistics
              manager instead of doing what you do best:{" "}
              <span className="text-ig-gradient font-bold">
                making waves as a creator!
              </span>
            </p>
          </div>
        </Reveal>

        {/* WIN-WIN callout */}
        {/* <Reveal delay={0.2}>
          <div
            className="mt-12 rounded-xl px-8 py-10 border text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #FCE7F3 0%, #FDEDDC 50%, #FFF8F2 100%)",
              borderColor: "rgba(225, 48, 108, 0.25)",
            }}
          >
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(131,58,180,0.2), transparent 70%)",
              }}
            />
            <p className="relative font-display font-extrabold text-xl sm:text-2xl text-ink mb-2">
              When WE PARTNER, you get a{" "}
              <span className="text-ig-gradient">
                hands-free, cash-flowing asset!
              </span>
            </p>
            <p className="relative font-display font-black text-3xl sm:text-4xl text-brand-magenta tracking-wider mt-3">
              WIN-WIN
            </p>
            <div className="relative mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton>See If I Qualify For Partnership</CTAButton>
              <p className="text-[12.5px] text-ink-gray600">
                Takes 30 minutes · No commitment required
              </p>
            </div>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
