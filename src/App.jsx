import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import HomePage from './pages/HomePage';
import DecoratePage from './pages/DecoratePage';
import Menu from './homepage/menu';
import './styles/style.scss';

// ⭐ 加入 LayoutProvider：讓貼紙畫布功能能用 context 管理
import { LayoutProvider } from './decoratePage/context';

function App() {
  const merchRef = useRef(null);
  const cartBtnRef = useRef(null);
  const heroRef = useRef(null);

  // 按下 menu-cart 按鈕時，會滑動到 merch 區並自動打開購物車
  const scrollToCartAndOpen = () => {
    if (merchRef.current) {
      const offset = 70;
      const top = merchRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setTimeout(() => {
      cartBtnRef.current?.click();
    }, 600);
  };

  // 若在首頁按下 menu-home，會滑動到 hero 區塊
  const scrollToHero = () => {
    if (heroRef.current) {
      window.scrollTo({ top: heroRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter basename="/project_stupidVibe">
      <Menu onCartClick={scrollToCartAndOpen} onScrollToHero={scrollToHero} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              heroRef={heroRef}
              merchRef={merchRef}
              cartBtnRef={cartBtnRef}
            />
          }
        />
        <Route
          path="/decorate"
          element={
            // 在這裡包住 LayoutProvider，讓 decorate 頁面可以共用貼紙資料
            <LayoutProvider>
              <DecoratePage />
            </LayoutProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
