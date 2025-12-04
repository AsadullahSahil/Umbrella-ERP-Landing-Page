"use client";

import Image from "next/image";

const logos = [
  {
    name: "SavvyCal",
    src: "https://radiant.tailwindui.com/logo-cloud/savvycal.svg",
  },
  {
    name: "Laravel",
    src: "https://radiant.tailwindui.com/logo-cloud/laravel.svg",
  },
  {
    name: "Tuple",
    src: "https://radiant.tailwindui.com/logo-cloud/tuple.svg",
  },
  {
    name: "Transistor",
    src: "https://radiant.tailwindui.com/logo-cloud/transistor.svg",
  },
  {
    name: "Statamic",
    src: "https://radiant.tailwindui.com/logo-cloud/statamic.svg",
  },
];

export default function PartnerLogos() {
  return (
    <section className="px-6 lg:px-8 mt-12">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="flex items-center justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="h-9 sm:h-8 lg:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
