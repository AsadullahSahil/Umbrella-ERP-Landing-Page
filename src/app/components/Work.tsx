"use client";

const salesCards = [
  {
    subtitle: "Expertise and Tailored Solutions",
    text: "At Umbrella ERP, we bring decades of experience in ERP consultancy and strategic management, helping businesses streamline their operations with customized solutions. Our team understands the unique challenges of different industries, ensuring that each ERP system we implement is designed to fit the specific needs and goals of our clients, enhancing efficiency and driving measurable growth.",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
  {
    subtitle: "Support for Seamless Integration",
    text: "We believe that successful ERP implementation goes beyond just technology. Umbrella ERP offers comprehensive support from the initial consultation to post-implementation follow-up. Our strategic management services ensure that your business not only adopts the right ERP system but also integrates it seamlessly with your overall business strategy, aligning processes for long-term success.",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
  {
    subtitle: "Data-Driven Growth & Decision-Making",
    text: "Working with Umbrella ERP empowers your business to make smarter, data-driven decisions. Our ERP consultancy is focused on improving operational visibility, while our strategic management services guide your business planning and execution. With our expertise, you can unlock new growth opportunities, optimize resources, and gain a competitive edge in your market.",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
];

export default function Sales() {
  return (
    <>
      <section className="overflow-hidden mx-auto max-w-2xl lg:max-w-7xl pb-24 px-6 lg:px-8 bg-linear-to-b from-white from-50% to-gray-100 py-[100px]">
        <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          Expertise. Partnership. Results.
        </h2>
        <h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
          Why work with us?
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
          {salesCards.map((card, index) => (
            <div
              key={index}
              className={`group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15 ${card.colSpan} ${card.rounded}`}
            >
              {/* Content Section */}
              <div className="relative p-10 flex flex-col justify-between">
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
