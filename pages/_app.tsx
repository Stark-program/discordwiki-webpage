import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/navbar/Nav';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMobileMenuOpen() {
    return setMenuOpen(true);
  }
  function toggleMobileMenuClose() {
    return setMenuOpen(false);
  }
  return (
    <div className="flex flex-col">
      <Nav
        toggleMobileMenu={toggleMobileMenuOpen}
        mobileMenu={menuOpen}
        toggleMobileMenuClose={toggleMobileMenuClose}
      />
      <Component
        {...pageProps}
        toggleMobileMenu={toggleMobileMenuOpen}
        mobileMenu={menuOpen}
        toggleMobileMenuClose={toggleMobileMenuClose}
      />
    </div>
  );
}

export default MyApp;
