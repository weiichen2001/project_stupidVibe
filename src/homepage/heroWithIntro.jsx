import React, { useState, useRef, useEffect } from "react";

export default function HeroWithIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef(null);

  // 控制頁面滾動
  useEffect(() => {
    if (showIntro) {
      // 播放影片時禁用滾動
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      // 影片結束後恢復滾動
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    // 清理函數：組件卸載時恢復滾動
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [showIntro]);

  const handleVideoEnd = () => {
    // 影片結束後開始淡出
    setShowIntro(false);
  };

  const handleSkip = () => {
    setShowIntro(false);
  };

  return (
    <section id="hero" className={!showIntro ? 'video-ended' : ''}>
      {/* 開場動畫層 */}
      <div 
        className={`intro-overlay ${showIntro ? 'show' : 'hide'}`}
      >
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

      {/* 隱藏的主標題（輔助 SEO / 無障礙） */}
      <h1>HAPPY HOSHI DAY</h1>
      
      {/* CTA 按鈕區塊 */}
      <div className={`cta ${showIntro ? 'cta-hidden' : 'cta-visible'}`}>
        <a href="#" className="merch">VIEW MERCHANDISE</a>
        <a href="#" className="decorate">DECORATE MY ROOM</a>
      </div>

      {/* 可選：跳過按鈕 */}
      {showIntro && (
        <button
          onClick={handleSkip}
          className="skip-button"
        >
          SKIP
        </button>
      )}
    </section>
  );
}