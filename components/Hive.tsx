import Image from "next/image";

export default function Hive() {
  return (
    <section id="about" className="section">
      <div className="container grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <h3 className="text-2xl md:text-3xl font-semibold font-display">The Hive</h3>
          <p className="mt-4 text-text-muted">
            Brains. Charging. Control. The Hive is more than just a charging station — it’s the command
            center of the system, processing and analyzing data with embedded AI computing. It securely
            houses and recharges The Bee, ensuring continuous operation and reliable performance in the field.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <p className="uppercase text-xs tracking-wide text-text-muted">Key Specifications</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Weight: 35 kg / 77 lb</li>
                <li>Dimensions: 31 x 34 x 35 in</li>
                <li>Power Supply: 110V or 220V AC</li>
              </ul>
            </div>
            <div>
              <p className="uppercase text-xs tracking-wide text-text-muted">Performance</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Backup Battery Runtime: 1 hour</li>
                <li>Connectivity: Ethernet + optional 5G/LTE modem</li>
                <li>Operating Temperature: -20°C to +50°C (-4°F to +122°F)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <Image
            src="/assets/hive.png"
            alt="The Hive"
            width={1600}
            height={900}
            className="w-full max-w-[880px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
