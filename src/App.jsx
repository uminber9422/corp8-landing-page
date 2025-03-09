import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
// import Assistants from './components/Assistants/Assistants';
// import SecurityPrivacy from './components/SecurityPrivacy/SecurityPrivacy';
/* import Pricing from './components/Pricing/Pricing'; */
// import Testimonials from './components/Testimonials/Testimonials';
// import FAQ from './components/FAQ/FAQ';
// import Footer from './components/Footer/Footer';
// import N8nChat from './components/chat/N8nChat';
import VoiceBot from './components/voicebot/VoiceBot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Assistants /> */}
      {/* <SecurityPrivacy /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
      {/* <N8nChat /> */}
      <VoiceBot />
    </div>
  );
}

export default App;
