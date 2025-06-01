import { useState } from 'react'
import Header from "./components/header";
import HeroSection from './components/hero';
import './styles/style.scss';
import ManualSection from './components/manual';
import MerchSection from './components/merch';
import CartSteps from './components/cartSteps';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection/>
        <ManualSection/>
        <MerchSection/>
        <CartSteps/>
      </main>
    </>
  );
}

export default App;
