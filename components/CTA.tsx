"use client";
import Script from "next/script";

export default function CTA() {
  return (
    <section id="demo" className="section bg-section">
      <div className="container">
        <h2 className="h2 text-center font-[var(--font-orbitron)]">Ready to secure your property?</h2>
        <p className="muted text-center max-w-3xl mx-auto mt-3">
          See how SecurityDrones.ai can reduce costs and increase safety with a live product demonstration tailored to your needs.
        </p>
        <div className="card mt-10 p-4 md:p-6 rounded-xl2">
          <div className="calendly-inline-widget" data-url="https://calendly.com/securitydrones-ai-demo/demo" style={{ minWidth: 320, height: 700 }} />
        </div>
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </section>
  );
}
