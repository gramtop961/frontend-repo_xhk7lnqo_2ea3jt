import React from 'react';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Hero3D />
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <Features />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
