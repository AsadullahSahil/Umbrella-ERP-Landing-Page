"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
  { label: "Blog", href: "/blog" },
  { label: "Login", href: "/login" },
];

export default function Navbar({
  variant = "light",
  showCta = false,
}: {
  variant?: "light" | "dark";
  showCta?: boolean;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = variant === "dark";

  return (
    <header className="relative z-50 w-full py-4 mt-10">
      {/* Lines */}
      <div className="absolute inset-y-0 left-1/2 -z-10 w-full -translate-x-1/2 pointer-events-none">
        <div
          className={`absolute inset-x-0 top-6 border-t  ${
            isDark ? "border-black/10" : "border-[#ececeb]/10"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 top-8 border-t  ${
            isDark ? "border-black/10" : "border-[#ececeb]/10"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 bottom-6 border-b group-last/row:block ${
            isDark ? "border-black/10" : "border-[#ececeb]/10"
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 bottom-8 border-b group-last/row:block ${
            isDark ? "border-black/10" : "border-[#ececeb]/10"
          }`}
        ></div>
      </div>

      <nav className="relative mx-auto max-w-7xl px-4 py-4">
        <div className="nav-inside relative flex justify-between">
          {/*  Logo & Button Container */}
          <div className="logo-btn-container flex items-center">
            {/* Logo */}
            <div className="relative">
              <Link
                href="/"
                className="flex items-center text-xl font-semibold text-gray-900"
              >
                {/* Logo text */}
                <div className="py-3 group/item">
                  {/* Top-left */}
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className={`absolute -top-3 -left-2 size-[15px]  ${
                      isDark ? "fill-black/10" : "fill-[#ececeb]/10"
                    }`}
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  {/* Top-right */}
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className={`absolute -top-3 -right-2 size-[15px] ${
                      isDark ? "fill-black/10" : "fill-[#ececeb]/10"
                    }`}
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  {/* Bottom-left */}
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className={`absolute -bottom-3 -left-2 size-[15px] ${
                      isDark ? "fill-black/10" : "fill-[#ececeb]/10"
                    }`}
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  {/* Bottom-right */}
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className={`absolute -bottom-3 -right-2 size-[15px] ${
                      isDark ? "fill-black/10" : "fill-[#ececeb]/10"
                    }`}
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <Image
                    src="/logo.webp"
                    alt="Umbrella ERP Logo"
                    width={120}
                    height={40}
                    className="h-auto w-auto"
                  />
                </div>
              </Link>
            </div>

            {/* CTA */}
            {showCta && (
              <div className="hidden md:block ml-8">
                <Link href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures">
                  <button className="flex items-center bg-[#5b22ccd0] hover:bg-[#5b22cceb] text-white px-4 py-2 rounded-full text-sm font-medium transition">
                    Discover Tailored ERP & Business Consulting Solutions
                    <ChevronRight size={16} />
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => {
              const isLast = index === navLinks.length - 1;

              return (
                <div
                  key={link.label}
                  className={`relative group px-4 py-4 transition rounded ${
                    isDark ? "hover:bg-black/5" : "hover:bg-[#ececeb]/5"
                  }`}
                >
                  {/* Top-left */}
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className={`absolute -top-2 -left-2 size-[15px] ${
                      isDark ? "fill-black/10" : "fill-[#ececeb]/10"
                    }`}
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  {/* Top-right (only for last item) */}
                  {isLast && (
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className={`absolute -top-2 -right-2 size-[15px] ${
                        isDark ? "fill-black/10" : "fill-[#ececeb]/10"
                      }`}
                    >
                      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                    </svg>
                  )}

                  {/* Bottom-left */}
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className={`absolute -bottom-2 -left-2 size-[15px] ${
                      isDark ? "fill-black/10" : "fill-[#ececeb]/10"
                    }`}
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  {/* Bottom-right (only for last item) */}
                  {isLast && (
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className={`absolute -bottom-2 -right-2 size-[15px] ${
                        isDark ? "fill-black/10" : "fill-[#ececeb]/10"
                      }`}
                    >
                      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                    </svg>
                  )}

                  <Link
                    href={link.href}
                    className={`relative z-10 font-medium  ${
                      isDark ? "text-black" : "text-[#ececeb]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
