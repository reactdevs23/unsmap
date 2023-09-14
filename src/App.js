import ParticleComponent from "./Components/Particles/Particles";
import Header from "./Components/Header/Header";

import FixedSocialBar from "./Components/FixedSocialBar/FixedSocialBar";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div>
      <ParticleComponent />
      <FixedSocialBar />
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
