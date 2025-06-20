import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HeroWithIntro({ onAnimationComplete, triggerKey = 0, onMerchClick }) {
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef(null);

  // 當 triggerKey 改變時，重新開始動畫
  useEffect(() => {
    if (triggerKey > 0) {
      setShowIntro(true);
      // 重新播放影片
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(console.error);
      }
    }
  }, [triggerKey]);

  // 控制頁面滾動
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [showIntro]);

  const handleVideoEnd = () => {
    setShowIntro(false);
    // 重要：呼叫父元件的回調函數
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  const handleSkip = () => {
    setShowIntro(false);
    // 重要：呼叫父元件的回調函數
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  const handleMerchClick = (e) => {
    e.preventDefault();
    if (onMerchClick) {
      onMerchClick();
    }
  };

  return (
    <section id="hero" className={!showIntro ? 'video-ended' : ''}>
      {/* 開場動畫層 */}
      <div className={`intro-overlay ${showIntro ? 'show' : 'hide'}`}>
        <video
          ref={videoRef}
          className="intro-video"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src="./videos/open_box_animation.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="all-title">
        <div className="date">
          <img src="./images/hero/date.png" alt="date" className="date-img" />
        </div>
        <div className="title">
          <img src="./images/hero/happyHoshiDay.png" alt="happyHoshiDay" className="event-name" />
        </div>
        <h1>HAPPY HOSHI DAY</h1>

      </div>
      <div className="photos">
        <img src="./images/hero/hoshi-lying.png" alt="hoshi-lying" className="hoshi-lying" />
        <img src="./images/hero/latte.png" alt="latte" className="latte" />
      </div>


      {/* CTA 按鈕區塊 */}
      <div className={`cta ${showIntro ? 'cta-hidden' : 'cta-visible'}`}>
        <a href="#" className="merch cta-btn" onClick={handleMerchClick}>VIEW MERCHANDISE</a>
        <Link to="/decorate" className="decorate cta-btn">DECORATE MY ROOM</Link>
      </div>

      {/* 跳過按鈕 */}
      {showIntro && (
        <button onClick={handleSkip} className="skip-button">
          SKIP
        </button>
      )}
    </section>
  );
}