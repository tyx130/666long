import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/ui/ScrollToTop';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page transition
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {isLoading ? (
          <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="relative w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary-600 rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;