import './index.css';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import PlansSection from './components/PlansSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServiceSection />
      <PlansSection />
      </div>
      <Footer />
      </>
  );
}

export default App;
