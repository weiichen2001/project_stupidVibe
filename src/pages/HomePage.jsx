// HomePage.jsx
import { useState } from 'react';
import ManualSection from '../homepage/manual';
import MerchSection from '../homepage/merch';
import CartSteps from '../homepage/cartSteps';
import Receipt from '../homepage/receipt';
import Menu from '../homepage/menu';
import Footer from '../components/footer';
import HeroWithIntro from '../homepage/heroWithIntro';

function HomePage({ heroRef, merchRef, cartBtnRef }) {
  const [showReceipt, setShowReceipt] = useState(false);

  const scrollToReceipt = () => {
    const section = document.getElementById("receipt");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={heroRef}>
        <HeroWithIntro/>
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

      <Footer/>
    </>
  );
}

export default HomePage;
