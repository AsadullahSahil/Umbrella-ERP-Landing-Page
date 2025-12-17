"use client";

const salesCards = [
  {
    subtitle: "Business Analysis & Diagnostics",
    text: "SWOT, PESTEL, Financial Review, Process Mapping, Gap Analysis.",
    image: "/service-1.webp",
  },
  {
    subtitle: "Strategic & Business Planning",
    text: "Vision, Mission, KPIs, Strategic Objectives, Business Plan",
    image: "/service-2.webp",
  },
  {
    subtitle: "Sales, Marketing & Growth Development",
    text: "Market Segmentation, Sales Planning, Branding Strategy",
    image: "/service-3.webp",
  },
  {
    subtitle: "Operations & Process Optimization",
    text: "SOPs, Restructuring, Quality Improvement, Workflow Optimization.",
    image: "/service-4.webp",
  },
  {
    subtitle: "Financial Planning & Analytics",
    text: "Budgeting, Cost Control, Profitability Analysis, Dashboards.",
    image: "/service-5.webp",
  },
  {
    subtitle: "HR & Organizational Development",
    text: "HR Policies, Performance KPIs, Salary Structure, Training.",
    image: "/service-6.webp",
  },
  {
    subtitle: "ERP Readiness & Digital Transformation",
    text: "ERP Needs Assessment, Process Digitization, System Mapping.",
    image: "/service-7.webp",
  },
  {
    subtitle: "Compliance, Governance & Risk Management",
    text: "Governance Structure, Policies, Audit Preparation, Risk Assessment.",
    image: "/service-8.webp",
  },
  {
    subtitle: "Cost Management Strategies",
    text: "Identifying cost-saving opportunities across departments without compromising quality or service levels.",
    image: "/service-9.webp",
  },
];

export default function Sales() {
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

        <div className="mt-16 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h1 className="text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
              The Services Your Business Needs
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              Our Comprehensive Solutions for Business Success
            </p>
            <p className="mt-6 text-sm/6 text-gray-600">
              In today’s fast-paced business world, staying competitive requires
              expert guidance and strategic thinking. Umbrella ERP offers the
              consultancy your business needs to navigate challenges and seize
              new opportunities. Our tailored solutions are designed to help you
              optimize operations, expand into new markets, and enhance overall
              performance. With a focus on global best practices and deep
              industry expertise, we provide actionable insights that align with
              your business goals. Trust Umbrella ERP to deliver the strategic
              advice and support necessary for long-term success, ensuring your
              business stays ahead in a rapidly evolving market.
            </p>

            <section className="overflow-hidden pb-24 bg-linear-to-b from-white from-50% to-gray-100 py-[60px]">
              <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2 ">
                {salesCards.map((card, index) => (
                  <div
                    key={index}
                    className={`group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15 lg:col-span-2 lg:rounded-bl-4xl`}
                  >
                    {/* Image Section */}
                    <div className="relative h-80 shrink-0">
                      <div
                        className="h-80 bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: `url('${card.image}')` }}
                      ></div>
                    </div>

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
          </div>
        </div>
      </div>
    </>
  );
}
