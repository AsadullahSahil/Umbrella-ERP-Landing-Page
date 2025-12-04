"use client";

const outreachCards = [
  {
    title: "Networking",
    subtitle: "Sell at the speed of light",
    text: "Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead.",
    image: "/screenshots/networking.png",
    colSpan: "lg:col-span-4",
    rounded: "lg:rounded-tl-4xl",
  },
  {
    title: "Engagement",
    subtitle: "Become a thought leader",
    text: "RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader.",
    image: "/screenshots/engagement.png",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
  {
    title: "Integrations",
    subtitle: "Meet leads where they are",
    text: "With thousands of integrations, no one will be able to escape your cold outreach.",
    image: "/screenshots/engagement.png",
    colSpan: "lg:col-span-2",
    rounded: "lg:rounded-bl-4xl",
  },
  {
    title: "Meetings",
    subtitle: "Smart call scheduling",
    text: "Automatically insert intro calls into your leads' calendars without their consent.",
    image: "/screenshots/engagement.png",
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
            Outreach
          </h2>
          <h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-white sm:text-6xl">
            Customer outreach has never been easier.
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
                    className="h-80 bg-no-repeat bg-[length:851px_344px]"
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
