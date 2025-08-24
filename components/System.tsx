import Image from "next/image";

export default function System() {
  return (
    <section id="services" className="section">
      <div className="container grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex justify-center">
          <div className="relative rounded-[28px] overflow-hidden border border-border shadow-soft px-4 pt-4 pb-12 w-full max-w-[860px]">
            <Image
              src="/assets/ui-mock.png"
              alt="Control UI"
              width={1300}
              height={800}
              className="w-full h-auto"
              priority
            />
            <div className="absolute -bottom-6 left-6">
              <div
                className="rounded-full px-4 py-2 text-sm font-medium text-black shadow-soft"
                style={{ background: "linear-gradient(90deg, #FF7A59, #FEC85A)" }}
              >
                Supported on iPhone, iPad, Android and any web browser
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <h2 className="h2 font-display">The System</h2>
          <p className="mt-4 text-text-muted">
            A complete software solution to set up, control and overview the system. Works on any
            mobile device or web browser. Embeddable and easy to integrate using our open API.
          </p>
        </div>
      </div>
    </section>
  );
}
