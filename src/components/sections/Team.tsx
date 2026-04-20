import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

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

const team = [
  {
    name: "Yuvraj Thakkar",
    role: "The Obsessive Copywriter",
    bio: "Over a decade of advertising expertise. We craft compelling brand stories that connect and convert.",
    photo: "/yuvraj-thakkar.png",
    linkedin: "https://www.linkedin.com/in/yuvraj-thakkar-7047b4ab",
  },
  {
    name: "Varish Shah",
    role: "The CA Operations Mind",
    bio: "Proven experience scaling e-commerce brands. We keep your logistics smooth and your finances perfectly balanced.",
    photo: "/Varish-Shah.png",
    linkedin: "https://www.linkedin.com/in/varish-shah-4abb55137",
  },
  {
    name: "Vishnu Chauhan",
    role: "The Shark Tank Marketer",
    bio: "Guided three brands to Shark Tank India. We turn your campaigns into massive revenue engines.",
    photo: "/Vishnu-Chauhan.jpg",
    linkedin: "https://www.linkedin.com/in/vishnu-chauhan-bb85a1222",
  },
];

export function Team() {
  return (
    <section id="team" className="section-pad bg-white relative overflow-hidden">
      <div className="container-x relative">
        {/* Centered header */}
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

        {/* Team cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="relative bg-white border border-ink-gray200 rounded-lg p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-brand-pink/30 h-full group overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(225,48,108,0.25), transparent 70%)",
                  }}
                />
                <div className="relative w-[92px] h-[92px] mx-auto mb-4 ring-rotate rounded-full">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full rounded-full object-cover bg-white transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="relative text-[17px] font-bold -tracking-[0.02em] mb-2 text-ink">
                  {m.name}
                </h3>
                <p className="relative text-xs uppercase tracking-[0.15em] font-semibold text-brand-magenta mb-2.5">
                  {m.role}
                </p>
                <p className="relative text-[13px] text-ink-gray600 leading-[1.6] mb-4">
                  {m.bio}
                </p>
                <div className="relative flex justify-center gap-2.5">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[34px] h-[34px] rounded-full flex items-center justify-center transition-all border hover:scale-110 hover:shadow-md"
                    style={{
                      background: "rgba(10, 102, 194, 0.08)",
                      color: "#0a66c2",
                      borderColor: "rgba(10, 102, 194, 0.15)",
                    }}
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* WIN-WIN callout */}
        <Reveal delay={0.2}>
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
        </Reveal>
      </div>
    </section>
  );
}
