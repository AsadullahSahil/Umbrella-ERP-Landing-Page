import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const socialIcons = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100091125690039",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/umbrellaerp?igsh=bnFhOTE3YnlxdXNt",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-2.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/umbrellaerp2023?t=lHkNF7CbadsLpUZlHIUxwg&s=09",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/umbrella-erp-99b44626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <div className="relative bg-gradient-to-tr from-[#3E3E3E] from-[25%] via-[#312E81] via-[60%] to-[#6F2DF7] sm:bg-gradient-to-r overflow-hidden">
        <div className="absolute inset-2 rounded-3xl bg-[#ECECEB]"></div>

        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="relative pt-20 pb-16 text-center sm:py-24">
              <hgroup>
                <h2 className="font-mono text-xs leading-5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                  Get in Touch
                </h2>
                <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
                  Ready to transform your business?
                  <br />
                  Schedule a free consultation today.
                </p>
              </hgroup>
              <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
                Discover how Umbrella ERP helps organizations streamline
                operations, improve efficiency, and drive sustainable growth.
              </p>
              <div className="mt-6">
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white hover:bg-gray-800 disabled:bg-gray-950 disabled:opacity-40"
                  href="/"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>

            <div className="pb-16">
              <div className="group/row relative isolate ">
                <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
                  <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
                  <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
                </div>

                <div
                  className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8
                "
                >
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
                          className="absolute -top-0 -left-2 size-[15px] fill-black/10"
                        >
                          <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                        </svg>
                        {/* Top-right */}
                        <svg
                          viewBox="0 0 15 15"
                          aria-hidden="true"
                          className="absolute -top-0 right-10 size-[15px] fill-black/10"
                        >
                          <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                        </svg>
                        <Image
                          src="/logo.webp"
                          alt="Umbrella ERP Logo"
                          width={120}
                          height={60}
                          className="h-auto w-auto mt-4"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col mt-4 text-[12px] text-gray-700">
                      <div className="flex items-start gap-4">
                        <MapPin size={12} className="text-gray-400 shrink-0 mt-[2px]" />
                        <p>
                          530 Lytton Avenue, 2nd Floor, Palo Alto, California
                          94301
                        </p>
                      </div>

                      <div className="flex items-center gap-4 my-1">
                        <Phone size={12} className="text-gray-400" />
                        <p>+1 254 678 8888</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <Mail size={12} className="text-gray-400" />
                        <p>info@umbrellaerp.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 lg:col-span-4 lg:col-start-3 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:pt-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-950/50">
                        Product
                      </h3>
                      <ul className="mt-6 space-y-4 text-sm">
                        <li>
                          <a
                            href="/pricing"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Analysis
                          </a>
                        </li>
                        <li>
                          <a
                            href="/company"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            About Us
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-950/50">
                        Company
                      </h3>
                      <ul className="mt-6 space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Careers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/blog"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="/company"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Company
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-950/50">
                        Support
                      </h3>
                      <ul className="mt-6 space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Help center
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Community
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-950/50">
                        Company
                      </h3>
                      <ul className="mt-6 space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Terms of service
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Privacy policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between relative isolate py-3">
                {/* Background lines */}
                <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
                  <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 bottom-0 border-b border-black/5"></div>
                  <div className="absolute inset-x-0 bottom-2 border-b border-black/5"></div>
                </div>

                {/* Left Text */}
                <div className="relative py-3">
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -top-3 -left-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -top-3 -right-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -bottom-3 -left-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -bottom-3 -right-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <div className="text-sm text-gray-950">
                    © 2025 Umbrella ERP. All rights reserved.
                  </div>
                </div>

                {/* Right icons */}
                <div className="flex items-center gap-8 py-3 relative">
                  {/* Corner SVGs */}
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -top-3 -left-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -top-3 -right-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -bottom-3 -left-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -bottom-3 -right-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  {/* Social icons */}
                  <div className="flex gap-6">
                    {socialIcons.map((icon) => (
                      <Link
                        key={icon.name}
                        href={icon.href}
                        className="text-gray-950 hover:text-gray-700"
                      >
                        {icon.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
