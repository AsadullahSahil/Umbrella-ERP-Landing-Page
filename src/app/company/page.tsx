import CountUp from "../components/CountUp";
import { teamMembers, individualInvestors } from "./data";
import Image from "next/image";
import Link from "next/link";

export default function Company() {
  return (
    <>
      <div className="relative">
        <div
          className="absolute -top-[350px] -right-[300px] h-[240px] w-[600px] transform-gpu md:right-0 rotate-[-10deg] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(115deg, #fff1be 28%, #6F2DF7 70%, #3E3E3E)",
          }}
        ></div>

        {/* Hero */}
        <div className="mt-16 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h1 className="text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
              Powerful Solution For Everyone In The Business Management
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              Scalable ERP and strategic consulting that aligns people,
              processes, and performance.
            </p>

            <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
              <div className="max-w-lg">
                <h2 className="text-2xl font-medium tracking-tight">
                  Our mission
                </h2>
                <p className="mt-6 text-sm/6 text-gray-600">
                  Umbrella transforms business potential into performance with
                  cutting-edge ERP solutions and expert consultancy, driving
                  operational excellence and strategic growth.
                </p>
                <h2 className="text-2xl font-medium tracking-tight mt-6">
                  Our vision
                </h2>
                <p className="mt-8 text-sm/6 text-gray-600">
                  To be the global leader in empowering businesses to excel
                  through integrated technology and strategic insights.
                </p>
              </div>

              <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                  {/* image 1 */}
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                    <Image
                      alt=""
                      fill
                      className="object-cover"
                      src="https://radiant.tailwindui.com/company/1.jpg"
                    />
                  </div>
                  {/* image 2 */}
                  <div className="relative -mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                    <Image
                      alt=""
                      fill
                      className="object-cover"
                      src="https://radiant.tailwindui.com/company/2.jpg"
                    />
                  </div>
                  {/* image 3 */}
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                    <Image
                      alt=""
                      fill
                      className="object-cover"
                      src="https://radiant.tailwindui.com/company/3.jpg"
                    />
                  </div>
                  {/* image 4 */}
                  <div className="relative -mt-8 aspect-square min-h-[260px] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                    <Image
                      alt=""
                      fill
                      className="object-cover"
                      src="https://radiant.tailwindui.com/company/4.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="max-lg:mt-16 lg:col-span-1">
                <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                  The Numbers
                </h2>
                <hr className="mt-6 border-t border-gray-200"></hr>
                <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                    <dt className="text-sm/6 text-gray-600">Raised</dt>
                    <dd className="order-first text-6xl font-medium tracking-tight">
                      $
                      <CountUp
                        start={100_000_000}
                        end={150_000_000}
                        duration={3}
                      />
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                    <dt className="text-sm/6 text-gray-600">Companies</dt>
                    <dd className="order-first text-6xl font-medium tracking-tight">
                      <CountUp start={15_000} end={30_000} duration={3} />
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                    <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
                    <dd className="order-first text-6xl font-medium tracking-tight">
                      <CountUp
                        start={1000000}
                        end={1500000}
                        allowDecimal={true}
                      />
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
                    <dd className="order-first text-6xl font-medium tracking-tight">
                      <CountUp
                        start={150_000_000}
                        end={200_000_000}
                        duration={3}
                      />
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
          </div>
        </div>

        {/* Meet The Team */}
        <div className="mt-32 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
              Who We Are
            </h2>
            <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
              Your trusted partner in ERP and business transformation.
            </h3>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              Umbrella ERP delivers integrated, user-friendly ERP systems and
              expert business consultancy to streamline operations, enhance
              performance, and support sustainable growth.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="max-w-lg">
                <h2 className="text-2xl font-medium tracking-tight">
                  Company Overview
                </h2>
                <p className="mt-6 text-sm/6 text-gray-600">
                  Umbrella ERP, headquartered in Palo Alto, California, is at
                  the forefront of software development, providing innovative
                  solutions to meet the evolving needs of the market. Located at
                  530 Lytton Avenue, 2nd Floor, our USA-based company
                  specializes in creating cutting-edge ERP systems designed to
                  enhance business operations across various industries. Our
                  commitment to excellence and innovation drives us to deliver
                  tailored software solutions that address the unique challenges
                  faced by modern enterprises. With a focus on efficiency and
                  effectiveness, Umbrella ERP is dedicated to helping businesses
                  achieve their goals and stay ahead in a competitive landscape.
                </p>
                <h2 className="text-2xl font-medium tracking-tight mt-6">
                  Our Company
                </h2>
                <p className="mt-8 text-sm/6 text-gray-600">
                  Umbrella ERP is a Silicon Valley-based company that delivers
                  cutting-edge enterprise resource planning (ERP) software and
                  comprehensive business consultancy services. Our innovative
                  solutions are designed to streamline operations, enhance
                  efficiency, and drive sustainable growth for businesses across
                  various industries. With a strong commitment to quality and
                  customer satisfaction, we provide tailored ERP systems that
                  help organizations optimize their processes, improve
                  decision-making, and achieve their strategic goals.
                </p>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 hover:bg-gray-800"
                  >
                    Join us
                  </Link>
                </div>
              </div>

              <div className="max-lg:order-first max-lg:max-w-lg">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt=""
                    fill
                    className="object-cover"
                    src="/company.webp"
                  />
                </div>
              </div>
            </div>

            <h3 className="mt-24 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
              Meet The team
            </h3>
            <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
              People Powering Your Success
            </h3>

            <p className="text-sm/6 text-gray-600 mt-6">
              Founded by a team of industry experts, Umbrella ERP brings decades
              of experience in business strategy, technology, and operational
              excellence. Our software is designed to be scalable, flexible, and
              user-friendly, ensuring that it meets the needs of businesses both
              large and small. Whether you are looking to automate financial
              management, streamline supply chains, or improve customer
              relations, we have the expertise and tools to make it happen.
            </p>
            <hr className="mt-6 border-t border-gray-200"></hr>

            <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <li key={index} className="flex items-center gap-4">
                  <img
                    alt={member.name}
                    src={member.image}
                    className="size-12 rounded-full"
                  />
                  <div className="text-sm/6">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Investors */}
        <div className="mt-32 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
              Investors
            </h2>
            <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
              Funded by industry-leaders.
            </h3>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              We are fortunate to be backed by the best investors in the
              industry — both literal and metaphorical partners in crime.
            </p>
            <h3 className="mt-24 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
              Venture Capital
            </h3>
            <hr className="mt-6 border-t border-gray-200"></hr>
            <ul
              role="list"
              className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
            >
              <li>
                <Image
                  src="https://radiant.tailwindui.com/investors/remington-schwartz.svg"
                  alt="Remington Schwartz"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                />
                <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
                  Remington Schwartz has been a driving force in the tech
                  industry, backing bold entrepreneurs who explore grey areas in
                  financial and privacy law. Their deep industry expertise and
                  extensive political lobbying provide their portfolio companies
                  with favorable regulation and direct access to lawmakers.
                </p>
              </li>
              <li>
                <Image
                  alt="Deccel"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                  src="https://radiant.tailwindui.com/investors/deccel.svg"
                />
                <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
                  Deccel has been at the forefront of innovation, investing in
                  pioneering companies across various sectors, including
                  technology, consumer goods, and healthcare. Their philosophy
                  of ‘plausible deniability’ and dedication to looking the other
                  way have helped produce some of the world’s most controversial
                  companies.
                </p>
              </li>
            </ul>
            <h3 className="mt-24 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
              Individual investors
            </h3>
            <hr className="mt-6 border-t border-gray-200"></hr>

            <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {individualInvestors.map((member, index) => (
                <li key={index} className="flex items-center gap-4">
                  <img
                    alt={member.name}
                    src={member.image}
                    className="size-12 rounded-full"
                  />
                  <div className="text-sm/6">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Careers */}
        <div className="my-32 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
              Careers
            </h2>
            <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
              Join our fully remote team.
            </h3>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              We work together from all over the world, mainly from locations
              without extradition agreements.
            </p>

            <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
              <div className="lg:max-w-2xl">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                  Open positions
                </h3>
                <div>
                  <table className="w-full text-left">
                    <colgroup>
                      <col className="w-2/3" />
                      <col className="w-1/3" />
                      <col className="w-0" />
                    </colgroup>
                    <thead className="sr-only">
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Location</th>
                        <th scope="col">Read more</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Engineering */}
                      <tr>
                        <th
                          scope="colgroup"
                          colSpan={3}
                          className="px-0 pt-10 pb-0"
                        >
                          <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                            Engineering
                          </div>
                        </th>
                      </tr>
                      <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                        <td className="px-0 py-4">iOS Developer</td>
                        <td className="px-0 py-4 text-gray-600">Remote</td>
                        <td className="px-0 py-4 text-right">
                          <Link
                            href="#"
                            className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          >
                            View listing
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                        <td className="px-0 py-4">Backend Engineer</td>
                        <td className="px-0 py-4 text-gray-600">Remote</td>
                        <td className="px-0 py-4 text-right">
                          <Link
                            href="#"
                            className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          >
                            View listing
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                        <td className="px-0 py-4">Product Engineer</td>
                        <td className="px-0 py-4 text-gray-600">Remote</td>
                        <td className="px-0 py-4 text-right">
                          <Link
                            href="#"
                            className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          >
                            View listing
                          </Link>
                        </td>
                      </tr>

                      {/* Design */}
                      <tr>
                        <th
                          scope="colgroup"
                          colSpan={3}
                          className="px-0 pt-5 pb-0"
                        >
                          <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                            Design
                          </div>
                        </th>
                      </tr>
                      <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                        <td className="px-0 py-4">Principal Designer</td>
                        <td className="px-0 py-4 text-gray-600">Remote</td>
                        <td className="px-0 py-4 text-right">
                          <Link
                            href="#"
                            className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          >
                            View listing
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                        <td className="px-0 py-4">Designer</td>
                        <td className="px-0 py-4 text-gray-600">Remote</td>
                        <td className="px-0 py-4 text-right">
                          <Link
                            href="#"
                            className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          >
                            View listing
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                        <td className="px-0 py-4">Senior Designer</td>
                        <td className="px-0 py-4 text-gray-600">Remote</td>
                        <td className="px-0 py-4 text-right">
                          <Link
                            href="#"
                            className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          >
                            View listing
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
                <Image
                  alt=""
                  fill
                  className="absolute inset-0 object-cover"
                  src="https://radiant.tailwindui.com/testimonials/veronica-winton.jpg"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-transparent to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"></div>
                <figure className="relative p-10">
                  <blockquote>
                    <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
                      We've managed to put two of our main competitors out of
                      business in 6 months.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/20 pt-6">
                    <p className="text-sm/6 font-medium text-white">
                      Veronica Winton
                    </p>
                    <p className="text-sm/6 font-medium">
                      <span className="bg-gradient-to-r from-[#fff1be] via-[#5A22CC] to-[#E5E7EB] bg-clip-text text-transparent">
                        CSO, Planeteria
                      </span>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
