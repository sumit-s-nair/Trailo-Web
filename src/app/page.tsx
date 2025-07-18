import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import JourneyDemo from "./components/JourneyDemo";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import DownloadSection from "./components/DownloadSection";
import WaitlistSection from "./components/WaitlistSection";

export default function Home() {
  const isDev = true; // change to false when our app has finished testing cause im too lazy to change whole code again
  // also remind me to add waitlist join link

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      <Navigation isDev={isDev} />
      <HeroSection isDev={isDev} />
      <JourneyDemo />
      <Features />
      <TechStack />
      {/* change the download section to join waitlist section */}
      {isDev ? (
        <WaitlistSection />
      ) : (
        <DownloadSection />
      )}
    </div>
  );
}
