import { useFormModal } from "../form/FormModal";

export function Header() {
  const { open } = useFormModal();
  return (
    <>
      {/* Sticky white header */}
      <header className="sticky top-0 z-[100] bg-white/[0.92] backdrop-blur-2xl border-b border-ink-gray200">
        <div className="container-x">
          <div className="flex items-center justify-between h-16">
            <a href="#top" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Insta Merch"
                className="h-9 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={open}
              className="rounded-pill px-[22px] py-2.5 text-[13px] font-bold text-white whitespace-nowrap shadow-[0_2px_10px_rgba(225,48,108,0.35)] transition hover:-translate-y-px hover:shadow-brand"
              style={{
                background:
                  "linear-gradient(135deg, #833AB4 0%, #C13584 30%, #E1306C 55%, #FD1D1D 75%, #F77737 100%)",
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Book Free Call
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
