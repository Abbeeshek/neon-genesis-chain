const WTCConnection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-secondary glow-gold">🌍</span> How It Connects with World Trade Coin (WTC)
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-muted-foreground mb-12">
            WTC acts as the global business and settlement layer built on top of the MiniBitcoin Blockchain.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-card rounded-xl border border-border hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold text-secondary mb-3">1. Cross-Border Transaction Rails</h3>
              <p className="text-muted-foreground">
                WTC handles international trade flows and business settlements on-chain.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold text-secondary mb-3">2. Cross-Chain Compatibility</h3>
              <p className="text-muted-foreground">
                Secure bridges enable WTC-based businesses to interact with MBTC and other assets.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold text-secondary mb-3">3. Enterprise Layer</h3>
              <p className="text-muted-foreground">
                WTC allows global merchants, logistics companies, and exporters to plug directly into the MiniBitcoin network.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/30">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-6">
              Together, they create a two-layer blockchain model:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card/50 rounded-lg">
                <div className="text-primary text-4xl font-bold mb-2">MBTC Layer</div>
                <p className="text-muted-foreground">consumer activities, DeFi, payments</p>
              </div>
              <div className="text-center p-6 bg-card/50 rounded-lg">
                <div className="text-secondary text-4xl font-bold mb-2">WTC Layer</div>
                <p className="text-muted-foreground">global business, trade, enterprise operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WTCConnection;
