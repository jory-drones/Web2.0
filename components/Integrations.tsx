const logos = [
  "/assets/integrations/verkada.png",
  "/assets/integrations/alarmdotcom.png",
  "/assets/integrations/talkaphone.png",
  "/assets/integrations/rhombus.png",
  "/assets/integrations/securepassage.png",
  "/assets/integrations/meteomatics.png",
];

export default function Integrations() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 text-center font-display">Seamless Integrations</h2>
        <p className="muted text-center max-w-3xl mx-auto mt-3">
          Connects effortlessly with leading security, communication, and data platforms to fit into your existing ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {logos.map((src) => (
            <div
              key={src}
              className="rounded-2xl border border-[#2A3449] shadow-soft"
              style={{ background: "#B9BEC8" }}  /* light gray tile like the mock */
            >
              <div className="h-44 md:h-52 flex items-center justify-center">
                <img src={src} alt="" className="max-h-20 md:max-h-24 w-auto object-contain opacity-95" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
