
'use client';
// components/Hero.jsx
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Close every deal.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Radiant helps you sell more by revealing sensitive information about
            your customers.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 hover:bg-gray-800"
              href="/"
            >
              Get started
            </Link>
            <Link
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base font-medium whitespace-nowrap text-gray-950 data-disabled:bg-white/15 data-disabled:opacity-40 hover:bg-white/20"
              href="/pricing"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
