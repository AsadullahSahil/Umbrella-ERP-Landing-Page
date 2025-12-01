"use client";

export default function Sales() {
  return (
    <>
      <section className="overflow-hidden mx-auto max-w-2xl lg:max-w-7xl pb-24 px-6 lg:px-8 bg-linear-to-b from-white from-50% to-gray-100 py-[100px]">
        <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          Sales
        </h2>
        <h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
          Know more about your customers than they do.
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* First Card */}
          <div className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15">
            {/* Image Section */}
            <div className="relative h-80 shrink-0">
              <div className="h-80 bg-[url(/screenshots/profile.png)] [background-size:1000px_560px] [background-position:left_-109px_top_-112px] bg-no-repeat"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-data-dark:from-gray-800/90"></div>
            </div>

            {/* Content Section */}
            <div className="relative p-10 flex flex-col justify-between">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                Insight
              </h3>
              <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
                Get perfect clarity
              </p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
                Radiant uses social engineering to build a detailed financial
                picture of your leads. Know their budget, compensation package,
                social security number, and more.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="lg:col-span-3 lg:rounded-tr-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15">
            {/* Image Section */}
            <div className="relative h-80 shrink-0">
              <div className="h-80 bg-[url(/screenshots/competitors.png)] [background-size:1100px_650px] [background-position:left_-38px_top_-73px] bg-no-repeat"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-data-dark:from-gray-800/90"></div>
            </div>

            {/* Content Section */}
            <div className="relative p-10 flex flex-col justify-between">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                Analysis
              </h3>
              <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
                Undercut your competitors
              </p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
                With our advanced data mining, you’ll know which companies your
                leads are talking to and exactly how much they’re being charged.
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="lg:col-span-2 lg:rounded-bl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15">
            {/* Image Section */}
            <div className="relative h-80 shrink-0">
              <div className="h-80 bg-[url(/screenshots/competitors.png)] [background-size:1100px_650px] [background-position:left_-38px_top_-73px] bg-no-repeat"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-data-dark:from-gray-800/90"></div>
            </div>

            {/* Content Section */}
            <div className="relative p-10 flex flex-col justify-between">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                Speed
              </h3>
              <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
                Built for power users
              </p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
                It’s never been faster to cold email your entire contact list
                using our streamlined keyboard shortcuts.
              </p>
            </div>
          </div>

          {/* Fifth Card */}
          <div className="lg:col-span-2 lg:rounded-bl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15">
            {/* Image Section */}
            <div className="relative h-80 shrink-0">
              <div className="h-80 bg-[url(/screenshots/competitors.png)] [background-size:1100px_650px] [background-position:left_-38px_top_-73px] bg-no-repeat"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-data-dark:from-gray-800/90"></div>
            </div>

            {/* Content Section */}
            <div className="relative p-10 flex flex-col justify-between">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                Speed
              </h3>
              <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
                Built for power users
              </p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
                It’s never been faster to cold email your entire contact list
                using our streamlined keyboard shortcuts.
              </p>
            </div>
          </div>

          {/* Sixth Card */}
          <div className="lg:col-span-2 lg:rounded-bl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15">
            {/* Image Section */}
            <div className="relative h-80 shrink-0">
              <div className="h-80 bg-[url(/screenshots/competitors.png)] [background-size:1100px_650px] [background-position:left_-38px_top_-73px] bg-no-repeat"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent group-data-dark:from-gray-800/90"></div>
            </div>

            {/* Content Section */}
            <div className="relative p-10 flex flex-col justify-between">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                Speed
              </h3>
              <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
                Built for power users
              </p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
                It’s never been faster to cold email your entire contact list
                using our streamlined keyboard shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
