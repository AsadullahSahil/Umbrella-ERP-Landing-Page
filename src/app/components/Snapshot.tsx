"use client";
import Image from "next/image";

export default function Snapshot() {
  return (
    <>
      <section className="overflow-hidden mx-auto max-w-2xl lg:max-w-7xl pb-24 px-6 lg:px-8 bg-linear-to-b from-white from-50% to-gray-100 py-[100px]">
        <h2 className="max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
          Unlock Growth and Solve Challenges with Expert Business Consultancy
        </h2>
        <p className="mt-4">
          Umbrella ERP helps businesses make better decisions and drive growth
          by providing real-time data visibility and seamless integration across
          departments. With streamlined processes and actionable insights,
          companies can optimize resources, track performance, and adapt to
          market changes. Our tailored ERP solutions and expert consultancy
          empower businesses to enhance efficiency, improve productivity, and
          achieve strategic goals.
        </p>
        <p>
          Umbrella’s business consultancy helps companies grow by providing
          expert guidance to solve complex problems and enhance operational
          effectiveness. We analyze business environments, identify challenges,
          and develop tailored strategies for improvement. Our solutions focus
          on optimizing workflows, increasing efficiency, and driving
          sustainable growth, ensuring businesses can adapt to market demands
          and achieve their long-term objectives.
        </p>
        <div className="mt-16 w-[1216px] h-[768px] relative aspect-[1218/768]">
          <div className="absolute -inset-2 rounded-lg shadow-xs ring-1 ring-black/5 p-4 "></div>

          <Image
            src="/unlock-growth.jpg"
            alt="Snapshot of sales pipeline dashboard"
            fill
            className="h-full rounded-lg shadow-2xl ring-1 ring-black/10"
            priority
          />
        </div>
      </section>
    </>
  );
}
