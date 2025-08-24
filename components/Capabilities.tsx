const items = [
  { title: "Perimeter Patrol", desc: "Autonomous patrols cover vast perimeters with 360° vision, reducing blind spots and human error.", icon: "🛡️" },
  { title: "Thermal Vision", desc: "Built-in thermal sensors detect intrusions and fire hazards day or night, even in zero-light conditions.", icon: "🔥" },
  { title: "Incident Recording", desc: "Capture high-definition video clips of every event and integrate with your existing security systems.", icon: "🎥" },
  { title: "Real-Time Alerts", desc: "Instant notifications are pushed to your phone or SOC the moment a perimeter breach is detected.", icon: "🔔" }
];

export default function Capabilities() {
  return (
    <section className="section bg-section">
      <div className="container">
        <h2 className="h2 text-center font-[var(--font-orbitron)]">Key Capabilities</h2>
        <p className="muted text-center max-w-3xl mx-auto mt-3">
          SecurityDrones.ai combines advanced autonomy, smart sensors and cloud intelligence into one seamless solution.
        </p>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {items.map(it => (
            <div key={it.title} className="card p-6 hover:shadow-glow transition">
              <div className="text-2xl">{it.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
