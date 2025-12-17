"use client";

const outreachCards = [
  {
    title: "Innovation",
    subtitle: "Always Moving Forward",
    text: "We embrace a culture of constant innovation, staying ahead in technology to provide cutting-edge solutions that anticipate and meet businesses' evolving needs.",
    image: "/innovation.jpg",
    colSpan: "lg:col-span-4",
    rounded: "lg:rounded-tl-4xl",
  },
  {
    title: "Empowerment",
    subtitle: "Enabling Better Decisions",
    text: "We empower organizations to achieve their full potential by delivering user-friendly, intuitive software that enhances efficiency, productivity, and informed decision-making at every level.",
    image: "/empowerment.jpg",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
  {
    title: "Integrity",
    subtitle: "Trust at the Core",
    text: "Upholding the highest standards of integrity, we prioritize transparency, honesty, and ethical practices in all our interactions, ensuring trust and reliability in our solutions and partnerships.",
    image: "/integrity.jpg",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
  {
    title: "Client Partnership",
    subtitle: "Built for Long-Term Success",
    text: "We work closely with our clients as long-term partners, ensuring solutions are aligned with business objectives and deliver measurable value.",
    image: "/client-partnership.jpg",
    colSpan: "lg:col-span-4",
    rounded: "lg:rounded-tl-4xl",
  },
];

export default function Outreach() {
  return (
    <>
      <section className="mt-2 rounded-3xl bg-gray-900">
        <article className="py-32 px-6 lg:px-8 mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            Our Approach
          </h2>
          <h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-white sm:text-6xl">
            Innovation, integrity, and partnership - driving long-term value.
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            {outreachCards.map((card, idx) => (
              <div
                key={idx}
                className={`group relative flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-xs ring-1 ring-black/5 ${card.colSpan} ${card.rounded}`}
              >
                {/* Image */}
                <div className="relative h-80 shrink-0">
                  <div
                    className="h-80 bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />

                  <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]" />
                </div>

                {/* Content */}
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold tracking-widest uppercase text-gray-400">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-white">
                    {card.subtitle}
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-gray-400">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
