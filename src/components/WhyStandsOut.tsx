import { CheckCircle } from "lucide-react";

const features = [
  "Instant transaction speed",
  "Affordable fees",
  "Designed for real-world use",
  "Business + consumer unified framework",
  "Full ecosystem support",
  "Developer-friendly",
  "Stable, secure, and future-proof"
];

const WhyStandsOut = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary glow-blue">🚀</span> Why the MiniBitcoin Blockchain Stands Out
        </h2>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStandsOut;
