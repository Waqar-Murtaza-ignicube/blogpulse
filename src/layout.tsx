import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='border border-[#333] mx-8'></div>
      
      <main className="main-content">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;
