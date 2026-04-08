"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  // { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  const isActive = (path) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass py-2"
          : "bg-bg-navbar/95 py-4 border-b border-border-primary"
        }`}
      style={scrolled ? { boxShadow: "0 4px 30px rgba(0,0,0,0.08)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="IFPD Logo"
              width={90}
              height={90}
              className="object-cover"
            />
            
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`nav-link px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(href)
                    ? "text-brand-primary bg-brand-primary/10 active"
                    : "text-text-secondary hover:text-brand-primary hover:bg-bg-hover"
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-xl bg-bg-hover/80 text-text-secondary hover:text-brand-primary border border-transparent hover:border-border-primary transition-all duration-300"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -12, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 12, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            )}

            {/* Get a Quote CTA */}
            <Link href="/contact" className="hidden sm:block">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-xl transition-all"
                style={{ background: "var(--brand-gradient)" }}
              >
                Get a Quote
              </motion.span>
            </Link>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2.5 rounded-xl bg-bg-hover/80 text-text-secondary hover:text-brand-primary border border-transparent hover:border-border-primary transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-border-primary mt-3"
            >
              <nav className="flex flex-col gap-1 py-3">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive(href)
                        ? "text-brand-primary bg-brand-primary/10"
                        : "text-text-secondary hover:text-brand-primary hover:bg-bg-hover"
                      }`}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-2 mx-1 px-4 py-3 text-sm font-semibold text-white rounded-xl text-center transition-all hover:opacity-90"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}


