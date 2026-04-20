const items = [
  "₹100Cr+ Revenue Generated",
  "Shark Tank India Brands",
  "Zero Operational Effort",
  "30-Day Brand Launch",
  "Done-For-You System",
  "Premium Brand Identity",
  "White-Glove Fulfilment",
  "Only 2 Creators Per Month",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden py-4 border-y border-white/10"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 50%, #0a0a0a 100%)",
      }}
    >
      <div className="marquee-track whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="shrink-0 inline-flex items-center gap-6 mr-10 font-display font-black uppercase tracking-[0.12em] text-[clamp(18px,2.4vw,32px)]"
          >
            <span className="text-ig-gradient">{t}</span>
            <span className="text-white/25 text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
