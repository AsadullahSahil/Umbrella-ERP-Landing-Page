"use client";
import { useState } from "react";

export default function Sales() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    }
    
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
            <h1 className="text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl text-center">
              Schedule a Consultation
            </h1>
            <p className="mt-6 text-2xl font-medium text-gray-500 text-center">
              Talk with our experts about your business challenges and ERP
              goals.
            </p>

            <section className="relative mx-auto max-w-4xl px-4 py-24">
                {/* Success Message */}
                {submitted ? (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                    <h2 className="text-lg font-medium text-green-800">
                        Thank you for your request
                    </h2>
                    <p className="mt-2 text-sm text-green-700">
                        Our team has received your consultation request and will contact you
                        shortly to confirm the meeting.
                    </p>
                    </div>
                ) : (
                    <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                    >
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                        Full Name
                        </label>
                        <input
                        required
                        type="text"
                        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                        Email Address
                        </label>
                        <input
                        required
                        type="email"
                        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                        Phone Number
                        </label>
                        <input
                        required
                        type="tel"
                        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                        Company Name
                        </label>
                        <input
                        required
                        type="text"
                        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                        <label className="block text-sm font-medium text-slate-700">
                            Preferred Date
                        </label>
                        <input
                            required
                            type="date"
                            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-slate-700">
                            Preferred Time
                        </label>
                        <input
                            required
                            type="time"
                            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                        Message (Optional)
                        </label>
                        <textarea
                        rows={4}
                        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        placeholder="Tell us about your requirements or challenges"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                        Request a Consultation
                    </button>
                    </form>
                )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}