import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-container w-full relative overflow-hidden">
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;