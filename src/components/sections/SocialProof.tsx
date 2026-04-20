import { Reveal } from "../ui/Reveal";
import { useFormModal } from "../form/FormModal";
import { useCountUp } from "../../hooks/useCountUp";
import { TeamCarousel, type Role } from "../ui/TeamCarousel";

const roles: Role[] = [
  {
    title: "The Obsessive Copywriter",
    name: "Yuvraj Thakkar",
    photo: "/yuvraj-thakkar.png",
    linkedin: "https://www.linkedin.com/in/yuvraj-thakkar-7047b4ab",
    body: "Over a decade of advertising expertise. We craft compelling brand stories that connect and convert.",
    tint: "#833AB4",
  },
  {
    title: "The CA Operations Mind",
    name: "Varish Shah",
    photo: "/Varish-Shah.png",
    linkedin: "https://www.linkedin.com/in/varish-shah-4abb55137",
    body: "Proven experience scaling e-commerce brands. We keep your logistics smooth and your finances perfectly balanced.",
    tint: "#E1306C",
  },
  {
    title: "The Shark Tank Marketer",
    name: "Vishnu Chauhan",
    photo: "/Vishnu-Chauhan.jpg",
    linkedin: "https://www.linkedin.com/in/vishnu-chauhan-bb85a1222",
    body: "Guided three brands to Shark Tank India. We turn your campaigns into massive revenue engines.",
    tint: "#F77737",
  },
];

type Stat = {
  value: string;
  label: string;
  to: number;
  prefix?: string;
  suffix: string;
};

const stats: Stat[] = [
  {
    value: "₹100Cr+",
    label: "Online Revenue Generated",
    to: 100,
    prefix: "₹",
    suffix: "Cr+",
  },
  { value: "20+", label: "Top Brands Scaled & Marketed", to: 20, suffix: "+" },
  { value: "3", label: "Brands Featured on Shark Tank India", to: 3, suffix: "" },
  { value: "0%", label: "Operational Effort From You", to: 0, suffix: "%" },
];

function StatCard({ s, index }: { s: Stat; index: number }) {
  const { value, ref } = useCountUp(s.to, 1400 + index * 120);
  const display = s.to === 0 ? "0" : `${s.prefix ?? ""}${value}${s.suffix}`;
  return (
    <div className="relative bg-white text-center px-6 py-9 transition-all duration-300 hover:bg-brand-blush/50 group overflow-hidden">
      <span
        className="absolute left-0 right-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "linear-gradient(90deg, #833AB4, #E1306C, #F77737)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(225,48,108,0.45), transparent 70%)",
        }}
      />
      <span
        ref={ref}
        className="font-display font-black block text-[clamp(28px,4vw,46px)] -tracking-[0.04em] text-ig-gradient leading-none mb-2 transition-transform duration-300 group-hover:scale-110"
      >
        {display}
      </span>
      <p className="text-[13px] text-ink-gray400 font-medium leading-[1.4] relative">
        {s.label}
      </p>
    </div>
  );
}

export function SocialProof() {
  const { open } = useFormModal();
  return (
    <section className="section-pad bg-ink-gray50 relative overflow-hidden">
      <div
        aria-hidden
        className="blob"
        style={{
          width: 380,
          height: 380,
          top: -120,
          right: -80,
          background:
            "radial-gradient(circle, rgba(225,48,108,0.18), transparent 70%)",
          animationDelay: "3s",
        }}
      />
      <div className="container-x relative">
        {/* Proven team intro */}
        <Reveal>
          <div className="section-header">
            <span className="badge">Proven Track Record</span>
            <h2>
              Built by a{" "}
              <span className="text-ig-gradient">PROVEN TEAM</span>
              <br className="hidden sm:block" /> of Industry Experts
            </h2>
            <p>
              Three specialists. One streamlined engine. Everything your
              merchandise brand needs — delivered end-to-end.
            </p>
          </div>
        </Reveal>

        <TeamCarousel roles={roles} />

        {/* Stats */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-ink-gray200 rounded-lg overflow-hidden shadow-lg">
            {stats.map((s, i) => (
              <StatCard key={s.label} s={s} index={i} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="mt-12 text-center px-8 py-10 rounded-lg shadow-sm border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #FCE7F3, #FDEDDC)",
              borderColor: "rgba(225, 48, 108, 0.2)",
            }}
          >
            <h3 className="font-display font-extrabold text-[clamp(20px,2.5vw,26px)] -tracking-[0.02em] text-ink mb-2 relative">
              Let's map your ₹50L growth plan in 30 minutes.
            </h3>
            <p className="text-ink-gray600 mb-5 text-[15px] relative">
              Free strategy call · No commitment · Custom roadmap included.
            </p>
            <button
              type="button"
              onClick={open}
              className="inline-flex items-center gap-2 rounded-pill text-white px-7 py-3.5 font-bold text-sm shadow-brand-cta transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-cta-hover hover:scale-[1.03] relative"
              style={{
                background:
                  "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Book Free Call →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
