"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Programs", href: "#programs" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Facility", href: "#facility" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pickle-green rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🏓</span>
            </div>
            <div>
              <span className="font-bold text-pickle-dark text-lg leading-tight block">
                Mile High Pickle
              </span>
              <span className="text-xs text-pickle-light font-medium -mt-1 block">
                ACADEMY
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-pickle-green transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="bg-pickle-green text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-pickle-dark transition-colors"
            >
              Join Waitlist
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-600 font-medium hover:text-pickle-green"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-pickle-green text-white px-5 py-3 rounded-full text-center font-semibold"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </header>
  );
}
