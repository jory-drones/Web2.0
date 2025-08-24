import Image from "next/image";
export default function System() {
  return (
    <section className="py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <img
          src="/assets/thesystem2.png"
          alt="The System"
          className="max-h-[350px] w-auto object-contain"
        />
      </div>

      {/* Text */}
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
