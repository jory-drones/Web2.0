import Image from "next/image";

export default function Bee() {
  return (
    <section className="py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <img
          src="/assets/drone-alt.png"
          alt="The Bee"
          className="max-h-[350px] w-auto object-contain"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-orbitron mb-4">The Bee</h2>
        <p className="text-gray-300 mb-4">
          Lightweight. Autonomous. Reliable. Designed for safety and performance, 
          The Bee combines advanced autonomous flight technology with high-quality 
          video capture and precision landing.
        </p>

        <div className="grid grid-cols-2 gap-6 text-gray-400 text-sm leading-relaxed">
          <div>
            <p className="font-semibold uppercase">Key Specifications</p>
            <ul className="list-disc pl-5">
              <li>Weight: 3.1 kg, battery included</li>
              <li>Size: 31 × 31 × 8 in</li>
              <li>Cruise Speed: 10 mph</li>
              <li>Flight Time: 15 min (+ safety reserve)</li>
              <li>Battery: 4000mAh (1:1.5 flight-to-recharge ratio)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase">Performance</p>
            <ul className="list-disc pl-5">
              <li>Wind Resistance: 20 mph (gusts: 30 mph)</li>
              <li>Hover Accuracy: within 1 foot</li>
              <li>Operating Temp: -10°C to +40°C (14°F to 104°F)</li>
            </ul>

            <p className="font-semibold uppercase mt-4">Technology</p>
            <ul className="list-disc pl-5">
              <li>GPS: Multi-band RTK</li>
              <li>Camera: Sony IMX385 low-light sensor</li>
              <li>Resolution: 1080p HD @ 25 fps</li>
              <li>FOV: 100° horizontal, 50° vertical</li>
              <li>Video latency: ~250 ms</li>
              <li>Transmission Range: 2,000 ft</li>
              <li>Obstacle Detection: 20 ft</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
