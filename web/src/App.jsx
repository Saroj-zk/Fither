import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetPlan from './pages/GetPlan';
import Menu from './pages/Menu';
import Experts from './pages/Experts';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';

// ScrollToTop component to handle scroll on route change
const ScrollToTop = () => {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-light font-sans text-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<GetPlan />} />
            <Route path="/plans" element={<GetPlan />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/track-order" element={<OrderTracking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
