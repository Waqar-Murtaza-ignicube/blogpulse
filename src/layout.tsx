import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { HorizontalLine } from './components/ui';

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
