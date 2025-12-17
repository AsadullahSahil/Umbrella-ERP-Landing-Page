'use client';

import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-[#fefefe] sm:text-7xl/[0.8] md:text-8xl/[0.8]">
            Smart ERP & Business Consulting Solutions
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-[#fefefe] sm:text-2xl/8">
            Empowering Growth with Smart ERP Solutions and Expert Business
            Consulting
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 bg-[#6F2DF7] hover:bg-[#5A22CC]"
              href="/get-consultation"
            >
              Get a Consultation
            </Link>
            <Link
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-[#ECECEB] shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base font-medium whitespace-nowrap text-gray-950 data-disabled:bg-white/15 data-disabled:opacity-40 hover:bg-[#ecececec]"
              href="/services"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
