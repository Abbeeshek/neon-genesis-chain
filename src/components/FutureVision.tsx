const FutureVision = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-secondary glow-gold">🌟</span> Future Vision
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-muted-foreground mb-12">
            The MiniBitcoin Blockchain aims to become:
          </p>

          <div className="space-y-6">
            {[
              "The primary chain for decentralized business solutions",
              "A global payment and settlement network",
              "A platform for next-gen apps (AI, VR, gaming, DeFi)",
              "A bridge between everyday users and enterprise operations"
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all duration-300 transform hover:translate-x-2"
              >
                <div className="flex items-start gap-4">
                  <span className="text-secondary text-2xl font-bold">{index + 1}.</span>
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-semibold text-primary glow-blue">
              This chain is the heart of the entire MiniBitcoin universe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
