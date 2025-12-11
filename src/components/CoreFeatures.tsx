import { Zap, DollarSign, TrendingUp, FileCode, Leaf, Code } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Transactions",
    description: "Designed for speed — enabling thousands of transactions per second with near-zero delay.",
  },
  {
    icon: DollarSign,
    title: "Ultra-Low Gas Fees",
    description: "Even at peak load, transaction costs stay extremely low, making IBTC more usable for daily operations.",
  },
  {
    icon: TrendingUp,
    title: "High Scalability",
    description: "Dynamic architecture that expands as demand grows — perfect for global users and business integrations.",
  },
  {
    icon: FileCode,
    title: "Smart Contract Layer",
    description: "Secure, flexible, and optimized for DeFi, NFTs, cross-chain applications, gaming & metaverse logic, and automated business agreements.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient Consensus",
    description: "Environment-friendly mechanism with low resource usage and high security.",
  },
  {
    icon: Code,
    title: "Developer-Friendly",
    description: "Open SDK, APIs, smart-contract templates, and documentation for easy dApp development.",
  },
];

const CoreFeatures = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-secondary glow-gold">⚙️</span> Core Features of the MiniBitcoin Blockchain
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
