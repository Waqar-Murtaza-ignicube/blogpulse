import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HorizontalLine from './components/ui/HorizontalLine';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='mx-8'>
        <HorizontalLine />
      </div>
      
      <main className="main-content">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;
