// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import HomePage from './pages/HomePage';
import DecoratePage from './pages/DecoratePage';
import Menu from './homepage/menu';
import './styles/style.scss';

function App() {
  const merchRef = useRef(null);
  const cartBtnRef = useRef(null);
  const heroRef = useRef(null);

  // 按下menu-cart會滑動到merch區並打開cart
  const scrollToCartAndOpen = () => {
    if (merchRef.current) {
      const offset = 70; // 調整你想往上或往下偏移的距離（正值是往下）
      const top = merchRef.current.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top, behavior: 'smooth' });
    }

    setTimeout(() => {
      cartBtnRef.current?.click(); // 自動點擊購物車按鈕
    }, 600);
  };
  // 若在首頁的話按下home會scrollToHero
  const scrollToHero = () => {
    if (heroRef.current) {
      window.scrollTo({ top: heroRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter basename="/project_stupidVibe">
      <Menu
        onCartClick={scrollToCartAndOpen}
        onScrollToHero={scrollToHero} />
      <Routes>
        <Route path="/" element={<HomePage
          heroRef={heroRef}
          merchRef={merchRef}
          cartBtnRef={cartBtnRef} />} />
        <Route path="/decorate" element={<DecoratePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
