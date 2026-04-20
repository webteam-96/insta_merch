export function Footer() {
  return (
    <footer className="bg-white border-t border-ink-gray200 py-10">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-ink-gray400">
        <p>
          © 2025 InstaMerch. All rights reserved. Built for creators who think
          bigger.
        </p>
        <nav className="flex gap-5">
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
    </footer>
  );
}
