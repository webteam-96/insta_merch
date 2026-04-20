export function Footer() {
  return (
    <footer className="bg-white border-t border-ink-gray200 py-12">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-8 mb-8 text-sm">
          {/* Brand + descriptor */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="Insta Merch logo" className="h-8 w-auto" />
            </div>
            <p className="text-ink-gray600 leading-[1.65] max-w-md">
              Insta Merch is a done-for-you creator merchandise agency that
              launches premium product lines, ecommerce stores, and automated
              fulfilment for Instagram influencers and celebrities with 100K+
              followers. Built by the team behind 3 Shark Tank India brands.
            </p>
          </div>
          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-display font-bold text-[13px] uppercase tracking-[0.1em] text-ink mb-3">
              Explore
            </h2>
            <ul className="space-y-2 text-ink-gray600">
              <li><a href="#top" className="hover:text-brand-pink transition">Home</a></li>
              <li><a href="#roadmap" className="hover:text-brand-pink transition">30-Day Roadmap</a></li>
              <li><a href="#team" className="hover:text-brand-pink transition">Our Team</a></li>
              <li><a href="#book-call" className="hover:text-brand-pink transition">Book Free Call</a></li>
            </ul>
          </nav>
          {/* Legal */}
          <nav aria-label="Legal">
            <h2 className="font-display font-bold text-[13px] uppercase tracking-[0.1em] text-ink mb-3">
              Legal
            </h2>
            <ul className="space-y-2 text-ink-gray600">
              <li><a href="#" className="hover:text-brand-pink transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-pink transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-pink transition">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="pt-6 border-t border-ink-gray200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-ink-gray400">
          <p>© 2025 InstaMerch. All rights reserved. Built for creators who think bigger.</p>
          <p className="text-ink-gray400">Serving creators across India and globally.</p>
        </div>
      </div>
    </footer>
  );
}
