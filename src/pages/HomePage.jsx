// HomePage.jsx (加入除錯)
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
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed in HomePage'); // 除錯用
    setIsAnimationComplete(true);
  };

  const handleScrollToHero = () => {
    heroRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCartClick = () => {
    cartBtnRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReceipt = () => {
    const section = document.getElementById("receipt");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // 除錯用 - 檢查狀態
  console.log('isAnimationComplete:', isAnimationComplete);

  return (
    <>
      <Menu
        isVisible={isAnimationComplete}
        onCartClick={handleCartClick}
        onScrollToHero={handleScrollToHero}
      />
      
      <div ref={heroRef}>
        <HeroWithIntro onAnimationComplete={handleAnimationComplete} />
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
