// HomePage.jsx
import { useState } from 'react';
import HeroSection from '../homepage/hero';
import ManualSection from '../homepage/manual';
import MerchSection from '../homepage/merch';
import CartSteps from '../homepage/cartSteps';
import Receipt from '../homepage/receipt';
import Menu from '../homepage/menu';

function HomePage() {
  const [showReceipt, setShowReceipt] = useState(false);

  const scrollToReceipt = () => {
    const section = document.getElementById("receipt");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Menu/>
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

export default HomePage;
