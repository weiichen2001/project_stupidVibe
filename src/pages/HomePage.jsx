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
  const receiptRef = useRef(null);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  const handleScrollToHero = () => {
    heroRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCartClick = () => {
    cartBtnRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 新增：滑動到 merch 區塊中間的函數
  const handleScrollToMerch = () => {
    merchRef?.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  };

  const scrollToReceipt = () => {
    requestAnimationFrame(() => {
      if (receiptRef.current) {
        receiptRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
      }
    });
  };

  // 修改處理收據顯示的函數，加入購物車收回功能
  const handleGetReceipt = (hideCartCallback) => {
    // 先觸發購物車收回動畫
    if (hideCartCallback) {
      hideCartCallback();
    }

    // 延遲顯示收據和滑動，等購物車收回完成
    setTimeout(() => {
      setShowReceipt(true);
      setTimeout(() => {
        scrollToReceipt();
      }, 100);
    }, 600); // 等待購物車收回動畫完成（與 slide-out 動畫時間一致）
  };

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
          onMerchClick={handleScrollToMerch}
        />
      </div>

      <section id='manual'>
        <ManualSection onOpenBoxClick={handleOpenBoxClick} />
      </section>

      <div ref={merchRef} id='merch'>
        <MerchSection
          onGetReceipt={handleGetReceipt}
          cartBtnRef={cartBtnRef}
        />
      </div>

      <section id="receipt" ref={receiptRef}>
        {showReceipt && <Receipt />}
      </section>

      <Footer/>
    </>
  );
}

export default HomePage;