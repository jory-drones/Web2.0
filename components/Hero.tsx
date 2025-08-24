import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-[88vh] flex items-center" style={{ paddingTop: "84px" }} id="top">
      <Image src="/assets/hero-bg.jpg" alt="" fill className="object-cover -z-10" priority />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-5">
          <div className="bg-section/85 backdrop-blur rounded-[36px] p-8 md:p-10 border border-border shadow-soft">
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-6xl leading-tight">
              Fully Autonomous<br/>Drone Security<br/>System
            </h1>
            <p className="mt-4 text-lg text-text-muted">
              AI security and data insights for large commercial, industrial &amp; residential properties.
            </p>
          </div>
        </div>
        <div className="md:col-span-7 relative">
          <Image src="/assets/drone-hero.png" alt="Drone" width={1400} height={900} className="w-full h-auto md:-mr-20" priority />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <a href="#services" className="flex flex-col items-center gap-2 text-sm font-medium">
          See How It Works
          <img src="/assets/chevron.png" alt="" className="h-5 w-5 opacity-80" />
        </a>
      </div>
    </header>
  );
}
