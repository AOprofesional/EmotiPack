
import React from 'react';
import Hero from './components/Hero';
const PainPoints = React.lazy(() => import('./components/PainPoints'));
const WhatIsIt = React.lazy(() => import('./components/WhatIsIt'));
const Benefits = React.lazy(() => import('./components/Benefits'));
const ProductInclude = React.lazy(() => import('./components/ProductInclude'));
const NotForYou = React.lazy(() => import('./components/NotForYou'));
const Bonuses = React.lazy(() => import('./components/Bonuses'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const DeliveryInfo = React.lazy(() => import('./components/DeliveryInfo'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const FinalCTA = React.lazy(() => import('./components/FinalCTA'));
const Footer = React.lazy(() => import('./components/Footer'));
const FloatingElements = React.lazy(() => import('./components/FloatingElements'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <React.Suspense fallback={<div className="h-20" />}>
        <PainPoints />
        <WhatIsIt />
        <Benefits />
        <ProductInclude />
        <NotForYou />
        <Bonuses />
        <Pricing />
        <DeliveryInfo />
        <FAQ />
        <FinalCTA />
        <Footer />
        <FloatingElements />
      </React.Suspense>
    </div>
  );
};

export default App;
