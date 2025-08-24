import Image from "next/image";
import theSystem from "@/public/assets/thesystem2.png"; // forces inclusion

export default function System() {
  return (
    <section className="py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* IMAGE (left) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={theSystem}
          alt="The System"
          className="max-h-[350px] w-auto h-auto object-contain"
          priority={false}
        />
      </div>

      {/* TEXT (right) */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-orbitron mb-4">The System</h2>
        <p className="text-gray-300">
          A complete software solution to set up, control and overview the system.
          Works on any mobile device or web browser. Embeddable and easy to integrate
          using our open API.
        </p>
      </div>
    </section>
  );
}
