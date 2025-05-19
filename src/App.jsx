// src/App.jsx
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

import CopyProtected from './components/CopyProtected';

const Loading = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-black via-gray-900 to-black text-yellow-400">
    <div className="relative w-20 h-20 mb-8">
      <div className="absolute border-4 border-yellow-400 rounded-full w-20 h-20 border-t-transparent animate-spin shadow-lg"></div>
      <div
        className="absolute border-4 border-yellow-600 rounded-full w-14 h-14 border-t-transparent top-3 left-3"
        style={{ animation: 'spin 3.5s linear infinite' }}
      ></div>
      <div className="absolute bg-yellow-400 rounded-full w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
    </div>
    <span className="text-4xl font-extrabold tracking-widest animate-pulse select-none">
      Loading...
    </span>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    },3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <CopyProtected>
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
      </CopyProtected>
    </BrowserRouter>
  );
}

export default App;
