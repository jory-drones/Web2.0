import Image from "next/image";

export default function Hero() {
  return (
    <header id="top" className="relative min-h-[88vh] flex items-center" style={{ paddingTop: "84px" }}>
      {/* Background image (.jpeg) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* optional soft vignette to match figma */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,17,32,0.2)_0%,rgba(11,17,32,0.6)_100%)]" />
      </div>

      {/* content above background */}
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-5">
          <div className="bg-section/85 backdrop-blur rounded-[36px] p-8 md:p-10 border border-border shadow-soft">
            <h1 className="font-display text-4xl md:text-6xl leading-tight">
              Fully Autonomous<br/>Drone Security<br/>System
            </h1>
            <p className="mt-4 text-lg text-text-muted">
              AI security and data insights for large commercial, industrial &amp; residential properties.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 relative">
          <Image
            src="/assets/drone-hero.png"
            alt="Drone"
            width={1400}
            height={900}
            className="w-full h-auto md:-mr-20"
            priority
          />
        </div>
      </div>

      {/* CTA */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10">
        <a href="#services" className="flex flex-col items-center gap-2 text-base md:text-lg font-semibold">
          See How It Works
          <img src="/assets/chevron.png" alt="" className="h-5 w-5 opacity-80" />
        </a>
      </div>
    </header>
  );
}
