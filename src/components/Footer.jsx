"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  about: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get a Quote", href: "/contact" },
  ],
  categories: [
    { name: 'IFPD 65"', href: "/products" },
    { name: 'IFPD 75"', href: "/products" },
    { name: 'IFPD 86"', href: "/products" },
    { name: 'IFPD 98"', href: "/products" },
  ],
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Footer = () => {
  return (
    <footer
      style={{ background: "var(--bg-footer)" }}
      className="text-white tracking-wide"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-10">
          {/* Logo & About */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-sm"
                style={{ background: "var(--brand-gradient)" }}
              >
                IF
              </div>
              <span className="font-bold text-lg">
                IFPD{" "}
                <span className="font-normal text-white/50">Student Alliance</span>
              </span>
            </Link>

            <p className="text-white/50 leading-relaxed text-sm lg:max-w-sm mt-6">
              Student Alliance is your trusted partner for interactive classroom
              technology. Our Interactive Flat Panel Displays (IFPD) bring
              4K touch-enabled education to schools and enterprises across India.
            </p>

            {/* Contact snippet */}
            <div className="mt-6 space-y-2 text-sm text-white/50">
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@studentalliance.in</p>
              <p>📍 Mumbai, Maharashtra, India</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeUp(0.2)}>
            <h4 className="text-base font-medium mb-6 text-white border-b-2 border-brand-primary inline-block pb-1">
              Quick Links
            </h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.about.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-brand-accent text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div {...fadeUp(0.3)}>
            <h4 className="text-base font-medium mb-6 text-white border-b-2 border-brand-primary inline-block pb-1">
              Products
            </h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.categories.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-brand-accent text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 border-t border-white/10 text-center pt-6 text-white/40 text-sm"
        >
          <p>
            © 2011–{new Date().getFullYear()} Student Alliance LLP. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-white/30">
            Designed with ❤️ by Student Alliance Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
