import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OurFood from './pages/OurFood';
import Terms from './components/term/Terms';
import PrivacyPolicy from './components/privacy/PrivacyPolicy';
import OurStores from './pages/OurStores';
import OurFlaoures from './pages/OurFlaoures';
import OurApp from './pages/OurApp';
import ContactSection from './components/contact/Contact';


const Loading = () => (
 <div className="flex justify-center items-center h-screen bg-black text-white text-2xl font-bold">
  <div className="flex items-center space-x-3">
    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-white"></div>
    <span>Loading...</span>
  </div>
</div>

);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="food" element={<OurFood />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="stores" element={<OurStores />} />
          <Route path="flavours" element={<OurFlaoures />} />
          <Route path="app" element={<OurApp />} />
          <Route path="contact" element={<ContactSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
