"use client";

const salesCards = [
  {
    title: "Optimize. Perform. Grow.",
    subtitle: "Business Consultancy",
    text: "Umbrella ERP provides expert consultancy to streamline processes, enhance performance, and drive innovation, empowering businesses to achieve their goals.",
    image: "/business-consultancy.jpg",
    colSpan: "lg:col-span-3",
    rounded: "lg:rounded-tr-4xl",
  },
  {
    title: "Modular & Scalable Systems",
    subtitle: "ERP Solutions",
    text: "Umbrella ERP delivers modular, user-friendly solutions to streamline operations, boost efficiency, and drive growth. Tailored to your needs, our systems empower businesses to excel.",
    image: "/erp-solution.jpg",
    colSpan: "lg:col-span-3",
    rounded: "lg:rounded-tr-4xl",
  },
  {
    title: "Align Strategy with Execution",
    subtitle: "Strategic Management",
    text: "Umbrella ERP provides expert strategic management services, helping businesses align goals, optimize resources, and achieve sustainable growth in a dynamic market.",
    image: "/strategic-management.jpg",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
  {
    title: "Smarter Workflows",
    subtitle: "Process Optimization",
    text: "We analyze and redesign business processes to eliminate inefficiencies, improve productivity, and maximize operational performance.",
    image: "/process-optimization.jpg",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
  {
    title: "Future-Ready Businesses",
    subtitle: "Digital Transformation",
    text: "Umbrella ERP helps organizations embrace digital transformation through modern systems, automation, and data-driven decision-making.",
    image: "/digital-transformation.jpg",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
];

export default function Sales() {
  return (
    <>
      <section className="overflow-hidden mx-auto max-w-2xl lg:max-w-7xl pb-24 px-6 lg:px-8 bg-linear-to-b from-white from-50% to-gray-100 py-[100px]">
        <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          Our Services
        </h2>
        <h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
          Streamlined ERP and consulting for long-term growth.
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {salesCards.map((card, index) => (
            <div
              key={index}
              className={`group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15 ${card.colSpan} ${card.rounded}`}
            >
              {/* Image Section */}
              <div className="relative h-80 shrink-0">
                <div
                  className="h-80 bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url('${card.image}')` }}
                ></div>

                {/* <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-data-dark:from-gray-800/90 rounded-lg"></div> */}
              </div>

              {/* Content Section */}
              <div className="relative p-10 flex flex-col justify-between">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                  {card.title}
                </h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
                  {card.subtitle}
                </p>
                <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
