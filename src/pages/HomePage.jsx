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
  const [triggerAnimation, setTriggerAnimation] = useState(0); // 用來觸發重新播放

  const handleAnimationComplete = () => {
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

  // 處理 openbox 貼紙點擊
  const handleOpenBoxClick = () => {
    
    // 1. 先滑到 hero 區域
    handleScrollToHero();
    
    // 2. 等滑動完成後重新觸發動畫
    setTimeout(() => {
      setIsAnimationComplete(false); // 重置動畫狀態
      setTriggerAnimation(prev => prev + 1); // 觸發重新播放
    }, 800); // 等待滑動動畫完成
  };

  return (
    <>
      {/* Menu 傳入 isVisible prop 來控制顯示/隱藏 */}
      <Menu
        isVisible={isAnimationComplete}
        onCartClick={handleCartClick}
        onScrollToHero={handleScrollToHero}
      />
      
      <div ref={heroRef}>
        <HeroWithIntro 
          onAnimationComplete={handleAnimationComplete}
          triggerKey={triggerAnimation} // 傳遞觸發鍵
        />
      </div>
      
      <section id='manual'>
        <ManualSection onOpenBoxClick={handleOpenBoxClick} />
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