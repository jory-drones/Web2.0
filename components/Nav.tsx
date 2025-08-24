"use client";
export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-section/90 backdrop-blur supports-[backdrop-filter]:bg-section/70 shadow-soft">
      <div className="container mx-auto flex items-center justify-between py-3">
        <img src="/assets/logo-wordmark.png" alt="SecurityDrones.ai" className="h-6 md:h-7 select-none" />
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
          <a href="#demo" className="rounded-full bg-primary px-4 py-2 text-sm font-medium hover:bg-primary-hover transition">
            Book a demo
          </a>
        </div>
      </div>
    </nav>
  );
}
