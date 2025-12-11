const WhatIsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-primary glow-blue">🧩</span> What Is the MiniBitcoin Blockchain?
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
          <p>
            The MiniBitcoin Blockchain is our custom-built, next-generation blockchain network designed to power the entire MiniBitcoin ecosystem.
            Unlike traditional blockchains that struggle with slow transactions, high fees, and scalability limits, the MiniBitcoin Blockchain delivers high performance, ultra-low costs, and instant settlement.
          </p>

          <div className="my-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">It is the foundation layer for:</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "the MiniBitcoin token (IBTC)",
                "our CryptoBank",
                "cross-border payments",
                "decentralized storage",
                "smart contracts",
                "metaverse and gaming integrations",
                "merchant and business services",
                "WTC global partnership rails"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-xl font-medium text-foreground pt-6">
            Everything in the ecosystem is secured, validated, and operated on this chain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
