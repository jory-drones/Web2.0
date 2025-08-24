import Image from "next/image";

export default function Hive() {
  return (
    <section className="py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-orbitron mb-4">The Hive</h2>
        <p className="text-gray-300 mb-4">
          Brains. Charging. Control. The Hive is more than just a charging station — 
          it’s the command center of the system, processing and analyzing data with 
          embedded AI computing. It securely houses and recharges The Bee, ensuring 
          continuous operation and reliable performance in the field.
        </p>

        <div className="text-gray-400 text-sm leading-relaxed space-y-2">
          <p className="font-semibold uppercase">Key Specifications</p>
          <ul className="list-disc pl-5">
            <li>Weight: 35 kg / 77 lb</li>
            <li>Dimensions: 31 × 34 × 35 in</li>
            <li>Power Supply: 110V or 220V AC</li>
          </ul>

          <p className="font-semibold uppercase mt-4">Performance</p>
          <ul className="list-disc pl-5">
            <li>Backup Battery Runtime: 1 hour</li>
            <li>Connectivity: Ethernet + optional 5G/LTE modem</li>
            <li>Operating Temp: -20°C to +50°C (-4°F to +122°F)</li>
          </ul>
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <img
          src="/assets/thehive2.png"
          alt="The Hive"
          className="max-h-[350px] w-auto object-contain"
        />
      </div>
    </section>
  );
}
