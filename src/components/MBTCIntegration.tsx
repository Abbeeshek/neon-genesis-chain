const MBTCIntegration = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-primary glow-blue">🔗</span> How It Integrates with MiniBitcoin (MBTC)
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-8 bg-card rounded-xl border border-primary/30 border-glow-blue">
            <h3 className="text-2xl font-semibold text-primary mb-4">1. Native Asset of the Chain</h3>
            <p className="text-muted-foreground mb-4">MBTC is the primary token used for:</p>
            <ul className="grid md:grid-cols-2 gap-3">
              {["transaction fees", "staking", "governance", "smart contract execution", "validator rewards"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-card rounded-xl border border-secondary/30 border-glow-gold">
            <h3 className="text-2xl font-semibold text-secondary mb-4">2. Security Through Staking</h3>
            <p className="text-muted-foreground">
              MBTC holders can participate in securing the network and earn passive rewards.
            </p>
          </div>

          <div className="p-8 bg-card rounded-xl border border-primary/30 border-glow-blue">
            <h3 className="text-2xl font-semibold text-primary mb-4">3. Unified Ecosystem Backbone</h3>
            <p className="text-muted-foreground">
              Every service — banking, exchange, AI modules, gaming, VR, business payments — operates on the MiniBitcoin chain for transparency and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MBTCIntegration;
