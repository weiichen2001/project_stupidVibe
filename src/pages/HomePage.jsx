import { useState, useRef } from 'react';
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
  const [triggerAnimation, setTriggerAnimation] = useState(0);
  const receiptRef = useRef(null); // 新增 receipt 的 ref

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  const handleScrollToHero = () => {
    heroRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCartClick = () => {
    cartBtnRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 改善的滑動到收據函數
  const scrollToReceipt = () => {
    // 使用 requestAnimationFrame 確保 DOM 更新完成
    requestAnimationFrame(() => {
      if (receiptRef.current) {
        receiptRef.current.scrollIntoView({ 
          behavior: "smooth",
          block: "center", // 滑到螢幕正中間
          inline: "center"
        });
      }
    });
  };

  // 處理收據顯示的函數
  const handleGetReceipt = () => {
    setShowReceipt(true);
    // 使用 setTimeout 確保 Receipt 組件完全渲染後再滑動
    setTimeout(() => {
      scrollToReceipt();
    }, 100); // 給一點時間讓組件渲染
  };

  // 處理 openbox 貼紙點擊
  const handleOpenBoxClick = () => {
    handleScrollToHero();
    setTimeout(() => {
      setIsAnimationComplete(false);
      setTriggerAnimation(prev => prev + 1);
    }, 800);
  };

  return (
    <>
      <Menu
        isVisible={isAnimationComplete}
        onCartClick={handleCartClick}
        onScrollToHero={handleScrollToHero}
      />
      
      <div ref={heroRef}>
        <HeroWithIntro
          onAnimationComplete={handleAnimationComplete}
          triggerKey={triggerAnimation}
        />
      </div>
      
      <section id='manual'>
        <ManualSection onOpenBoxClick={handleOpenBoxClick} />
      </section>
      
      <div ref={merchRef} id='merch'>
        <MerchSection
          onGetReceipt={handleGetReceipt} // 使用新的處理函數
          cartBtnRef={cartBtnRef}
        />
      </div>
      
      <section id="receipt" ref={receiptRef}> {/* 添加 ref */}
        {showReceipt && <Receipt />}
      </section>
      
      <Footer/>
    </>
  );
}

export default HomePage;