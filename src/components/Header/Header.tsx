"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
  ];

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      // Simulate search functionality
      alert("Search functionality would open here");
    }
  };

  const handleWishlistClick = () => {
    setWishlistCount(prev => prev + 1);
    alert("Added to wishlist!");
  };

  const handleCartClick = () => {
    setCartCount(prev => prev + 1);
    alert("Added to cart!");
  };

  const handleUserClick = () => {
    alert("User account functionality would open here");
  };

  return (
    <header className={styles.header}>
      {/* Top Row */}
      <div className={styles.topRow}>
        <div className={styles.container}>
          <div className={styles.topContent}>
            {/* Left: Hamburger Menu (3 horizontal lines) */}
            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mobile Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {/* Logo Icon with Responsive Styling */}
            <div className={styles.logoIconWrapper} style={{ position: "relative" }}>
              <Image 
              src="/images/Logo.png" 
              alt="mettà muse Brand Logo" 
              fill
              sizes="(max-width: 768px) 20px, 35px"
              style={{ objectFit: "contain" }}
              priority 
              />
            </div>
            {/* Center: Logo Text */}
            <div className={styles.logoText}>LOGO</div>

            {/* Right: Only 3 Icons on Mobile */}
            <div className={styles.icons}>
              {/* Search */}
              <button 
                className={styles.iconBtn} 
                aria-label="Search"
                onClick={handleSearchClick}
              >
                <svg className={styles.desktopIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>

              {/* Wishlist */}
              <button 
                className={styles.iconBtn} 
                aria-label="Wishlist"
                onClick={handleWishlistClick}
              >
                <svg className={styles.desktopIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
              </button>

              {/* Shopping Bag */}
              <button 
                className={styles.iconBtn} 
                aria-label="Shopping Bag"
                onClick={handleCartClick}
              >
                <svg className={styles.desktopIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
              </button>

              {/* Desktop Only: User Account */}
              <button 
                className={styles.iconBtn} 
                aria-label="User Account"
                onClick={handleUserClick}
              >
                <svg className={styles.desktopIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>

              {/* Desktop Only: Language */}
              <div className={styles.langWrapper}>
                <button
                  className={styles.langBtn}
                  onClick={() => setLangOpen(!langOpen)}
                  aria-label="Language Selection"
                >
                  ENG <span className={styles.dropdown}>▼</span>
                </button>
                {langOpen && (
                  <div className={styles.langDropdown}>
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setLangOpen(false);
                        }}
                      >
                        {lang.code}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation (Desktop Only) */}
      <div className={styles.bottomRow}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <a href="#shop">SHOP</a>
            <a href="#skills">SKILLS</a>
            <a href="#stories">STORIES</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT US</a>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileNavContainer}>
            <a href="#shop" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>SHOP</a>
            <a href="#skills" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>SKILLS</a>
            <a href="#stories" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>STORIES</a>
            <a href="#about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
            <a href="#contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>CONTACT US</a>
          </div>
        </div>
      )}
    </header>
  );
}