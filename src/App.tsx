import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { SocialProof } from "./components/sections/SocialProof";
import { PainPoints } from "./components/sections/PainPoints";
import { Solution } from "./components/sections/Solution";
import { Bonus } from "./components/sections/Bonus";
import { Team } from "./components/sections/Team";
import { Scarcity } from "./components/sections/Scarcity";
import { FinalCTA } from "./components/sections/FinalCTA";
import { FormModalProvider } from "./components/form/FormModal";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Marquee } from "./components/ui/Marquee";
import "./App.css";

function App() {
  return (
    <FormModalProvider>
      <ScrollProgress />
      <div className="min-h-screen bg-white text-ink">
        <Header />
        <main>
          {/* 1 · Hero + eligibility strip */}
          <Hero />
          {/* 2 · Proven team stats (social proof) */}
          <SocialProof />
          {/* 3 · This is WHY — pain points */}
          <PainPoints />
          {/* 4 · 30-day roadmap + bonus stack */}
          <Solution />
          <Bonus />
          {/* transition marquee */}
          <Marquee />
          {/* 5 · "Scale Like a Whale" team guarantee + scarcity */}
          <Team />
          <Scarcity />
          {/* Final closing CTA */}
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </FormModalProvider>
  );
}

export default App;
