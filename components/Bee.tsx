import Image from "next/image";

export default function Bee() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <Image src="/assets/drone-alt.png" alt="The Bee" width={1400} height={800} className="w-full h-auto" />
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <h3 className="text-2xl md:text-3xl font-semibold font-[var(--font-orbitron)]">The Bee</h3>
          <p className="mt-4 text-text-muted">
            Lightweight. Autonomous. Reliable. Designed for safety and performance, The Bee combines advanced autonomous flight
            technology with high-quality video capture and precision landing.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="uppercase text-xs tracking-wide text-text-muted">Key Specifications</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Weight: 3.1 kg, battery included</li>
                <li>Size: 31 x 31 x 8 in</li>
                <li>Cruise Speed: 10 mph</li>
                <li>Flight Time: 15 minutes (+ safety reserve)</li>
                <li>Battery: 4000mAh (1:1.5 flight-to-recharge ratio)</li>
              </ul>
            </div>
            <div>
              <p className="uppercase text-xs tracking-wide text-text-muted">Performance</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Wind Resistance: 20 mph; Gusts: 30 mph</li>
                <li>Hover Accuracy: Within 1 foot</li>
                <li>Operating Temps: -10°C to +40°C (14°F to 104°F)</li>
              </ul>
              <p className="uppercase text-xs tracking-wide text-text-muted mt-4">Technology</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>GPS: Multi-band RTK</li>
                <li>Camera: Sony IMX385 low-light sensor</li>
                <li>Resolution: 1080p HD @ 25 fps</li>
                <li>FOV: 100° horizontal, 50° vertical</li>
                <li>Video latency: ~250 ms</li>
                <li>Transmission Range: 2,000 ft; Obstacle Detection: 20 ft</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
