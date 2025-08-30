import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <main className="relative z-10">
        <Features />
        <DashboardPreview />
        <CTA />
      </main>
    </div>
  );
}

export default App;
