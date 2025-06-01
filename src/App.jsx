import { useState } from 'react'
import Header from "./components/header";
import HeroSection from './components/hero';
import ManualSection from './components/manual';
import MerchSection from './components/merch';
import CartSteps from './components/cartSteps';
import Receipt from './components/receipt';
import './styles/style.scss';

function App() {
  const [showReceipt, setShowReceipt] = useState(false);

  const scrollToReceipt = () => {
    const section = document.getElementById("receipt");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <HeroSection />
      <ManualSection />
      <MerchSection
        onGetReceipt={() => {
          setShowReceipt(true);
          scrollToReceipt();
        }}
      />

      <section id="receipt">
        {showReceipt && <Receipt />}
      </section>
    </>
  );
}


export default App;
