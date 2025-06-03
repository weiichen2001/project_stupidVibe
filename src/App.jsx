// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DecoratePage from './pages/DecoratePage';
import './styles/style.scss';

function App() {
  return (
    <BrowserRouter basename="/project_stupidVibe">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decorate" element={<DecoratePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
