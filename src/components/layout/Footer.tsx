export function Footer() {
  return (
    <footer className="bg-white border-t border-ink-gray200 py-6">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-[13px] text-ink-gray400">
          <div className="flex justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="Insta Merch logo"
              className="w-auto"
              style={{ height: "3.02rem" }}
            />
          </div>
          <p className="text-center text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[13px] leading-snug md:whitespace-nowrap">
            © 2025 InstaMerch. All rights reserved. Built for creators who think bigger.
          </p>
          <nav
            aria-label="Legal"
            className="flex gap-5 justify-center md:justify-end"
          >
            <a href="#" className="hover:text-brand-pink transition">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-pink transition">
              Terms
            </a>
            <a href="#" className="hover:text-brand-pink transition">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
