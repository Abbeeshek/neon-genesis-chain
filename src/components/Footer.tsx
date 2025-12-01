const Footer = () => {
  const links = ["Home", "Ecosystem", "Blockchain", "MBTC", "WTC", "Contact"];

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <span className="text-primary glow-blue">MiniBitcoin</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} MiniBitcoin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
