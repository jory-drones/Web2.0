export default function Footer() {
  return (
    <footer id="contact" className="section pt-16 pb-20">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img src="/assets/logo-wordmark.png" alt="SecurityDrones.ai" className="h-7" />
          <p className="muted mt-3">Next-generation autonomous security</p>

          <div className="mt-6 text-sm text-text-muted">Powered By:</div>
          <div className="mt-2 flex items-center gap-3 opacity-80">
            <img src="/assets/sunflower.png.png" alt="Sunflower Labs" className="h-8 w-auto" />
            <span className="sr-only">Sunflower Labs</span>
          </div>
        </div>

        <div className="md:text-right">
          <h3 className="text-2xl font-display">Contact Us</h3>
          <p className="mt-2">San Francisco, CA</p>
          <p className="mt-1">(424) 241-2216</p>
        </div>
      </div>
    </footer>
  );
}
