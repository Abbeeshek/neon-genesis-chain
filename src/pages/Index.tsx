import Hero from "@/components/Hero";
import WhatIsSection from "@/components/WhatIsSection";
import CoreFeatures from "@/components/CoreFeatures";
import IBTCIntegration from "@/components/IBTCIntegration";
import WTCConnection from "@/components/WTCConnection";
import WhyStandsOut from "@/components/WhyStandsOut";
import FutureVision from "@/components/FutureVision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsSection />
      <CoreFeatures />
      <IBTCIntegration />
      <WTCConnection />
      <WhyStandsOut />
      <FutureVision />
      <Footer />
    </div>
  );
};

export default Index;
