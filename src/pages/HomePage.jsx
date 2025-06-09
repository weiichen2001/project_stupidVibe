// HomePage.jsx
import { useState } from 'react';
import HeroSection from '../homepage/hero';
import ManualSection from '../homepage/manual';
import MerchSection from '../homepage/merch';
import CartSteps from '../homepage/cartSteps';
import Receipt from '../homepage/receipt';
import Menu from '../homepage/menu';

function HomePage({ heroRef, merchRef, cartBtnRef }) {
  const [showReceipt, setShowReceipt] = useState(false);

  const scrollToReceipt = () => {
    const section = document.getElementById("receipt");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>

      <section id='manual'>
        <ManualSection />
      </section>

      <div ref={merchRef} id='merch'>
        <MerchSection
          onGetReceipt={() => {
            setShowReceipt(true);
            scrollToReceipt();
          }}
          cartBtnRef={cartBtnRef}
        />
      </div>

      <section id="receipt">
        {showReceipt && <Receipt />}
      </section>
    </>
  );
}

export default HomePage;
