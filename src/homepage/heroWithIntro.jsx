// heroWithIntro.jsx (確保有正確實作)
import React, { useState, useRef, useEffect } from "react";

export default function HeroWithIntro({ onAnimationComplete }) {
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef(null);

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
    console.log('Video ended - calling onAnimationComplete'); // 除錯用
    setShowIntro(false);
    // 重要：呼叫父元件的回調函數
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  const handleSkip = () => {
    console.log('Skip clicked - calling onAnimationComplete'); // 除錯用
    setShowIntro(false);
    // 重要：呼叫父元件的回調函數
    if (onAnimationComplete) {
      onAnimationComplete();
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

      <h1>HAPPY HOSHI DAY</h1>

      {/* CTA 按鈕區塊 */}
      <div className={`cta ${showIntro ? 'cta-hidden' : 'cta-visible'}`}>
        <a href="#" className="merch">VIEW MERCHANDISE</a>
        <a href="#" className="decorate">DECORATE MY ROOM</a>
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