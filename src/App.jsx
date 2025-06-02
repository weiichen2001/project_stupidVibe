import { useState } from 'react'
import Header from "./homepage/header";
import HeroSection from './homepage/hero';
import ManualSection from './homepage/manual';
import MerchSection from './homepage/merch';
import CartSteps from './homepage/cartSteps';
import Receipt from './homepage/receipt';
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
