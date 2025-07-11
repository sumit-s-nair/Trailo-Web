import BackgroundAnimation from "./components/BackgroundAnimation";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import JourneyDemo from "./components/JourneyDemo";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import DownloadSection from "./components/DownloadSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      <BackgroundAnimation />
      <Navigation />
      <HeroSection />
      <JourneyDemo />
      <Features />
      <TechStack />
      <DownloadSection />
    </div>
  );
}
