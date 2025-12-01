import heroImage from "@/assets/blockchain-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="MiniBitcoin Blockchain Network - Futuristic 3D visualization of interconnected nodes"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-primary glow-blue">MiniBitcoin</span>{" "}
          <span className="text-foreground">Blockchain</span>
        </h1>
        <div className="text-3xl md:text-5xl font-light mb-8 text-secondary glow-gold animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Fast. Secure. Scalable.
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          The next-generation blockchain powering the entire MiniBitcoin ecosystem.
        </p>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default Hero;
