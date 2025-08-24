const logos = [
  "/assets/integrations/verkada.png",
  "/assets/integrations/alarmdotcom.png",
  "/assets/integrations/talkaphone.png",
  "/assets/integrations/rhombus.png",
  "/assets/integrations/securepassage.png",
  "/assets/integrations/meteomatics.png"
];

export default function Integrations() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 text-center font-[var(--font-orbitron)]">Seamless Integrations</h2>
        <p className="muted text-center max-w-3xl mx-auto mt-3">
          Connects effortlessly with leading security, communication, and data platforms to fit into your existing ecosystem.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {logos.map(src => (
            <div key={src} className="card h-36 flex items-center justify-center">
              <img src={src} className="max-h-16 opacity-90" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
