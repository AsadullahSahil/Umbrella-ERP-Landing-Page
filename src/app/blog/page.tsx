"use client";

import Image from "next/image";
import Link from "next/link";
import { blogCards } from "./data";
import { useSearchParams } from "next/navigation";

export default function BlogPage() {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentCategory = searchParams.get("category") || "all";

  // ------------------- POSTS -------------------
  const featuredPosts = blogCards.slice(0, 3);
  const allCategoryPosts = blogCards.slice(3);

  // ------------------- FILTER ----------------
  const filteredPosts =
    currentCategory === "all"
      ? allCategoryPosts
      : allCategoryPosts.filter((post) => {
          const cat = post.category;

          // Always convert to lowercase for perfect matching
          if (Array.isArray(cat)) {
            return cat
              .map((c) => c.toLowerCase())
              .includes(currentCategory.toLowerCase());
          }

          return String(cat).toLowerCase() === currentCategory.toLowerCase();
        });


  // ------------------- PAGINATION -------------------
  const perPage = 5;
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / perPage));

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedCategories = filteredPosts.slice(start, end);

  return (
    <>
      <div className="relative">
        <div
          className="absolute -top-[350px] -right-[300px] h-[240px] w-[600px] transform-gpu md:right-0 rotate-[-10deg] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(115deg, #fff1be 28%, #ee87cb 70%, #b060ff)",
          }}
        ></div>
        
        {/* Heading */}
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="mt-16 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
              Blog
            </h2>
            <h1 className="mt-2 text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
              What’s happening at Radiant.
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              Stay informed with product updates, company news, and insights on
              how to sell smarter at your company.
            </p>
          </div>
        </div>

        {/* Featured (ONLY WHEN category = all AND page = 1) */}
        {currentCategory === "all" && currentPage === 1 && (
          <div className="mt-16 bg-linear-to-t from-gray-100 pb-14">
            <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <h2 className="text-2xl font-medium tracking-tight">
                  Featured
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {featuredPosts.map((post) => (
                    <div
                      key={post.slug}
                      className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="aspect-3/2 w-full rounded-2xl object-cover"
                      />

                      <div className="flex flex-1 flex-col p-8">
                        <div className="text-sm text-gray-700">{post.date}</div>

                        <div className="mt-2 text-base font-medium">
                          <Link href={`/blog/${post.slug}`}>
                            <span className="absolute inset-0"></span>
                            {post.title}
                          </Link>
                        </div>

                        <div className="mt-2 flex-1 text-sm text-gray-500">
                          {post.description}
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                          <img
                            src={post.authorImg}
                            alt={post.author}
                            className="size-6 rounded-full object-cover"
                          />
                          <div className="text-sm text-gray-700">
                            {post.author}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mt-16 pb-24 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <button className="flex items-center gap-2 font-medium capitalize">
                {currentCategory === "all"
                  ? "All categories"
                  : currentCategory.replace("-", " ")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4 fill-gray-900"
                >
                  <path d="M5 6l3 3 3-3" strokeWidth="2" />
                </svg>
              </button>

              <a
                href="/blog/feed.xml"
                className="inline-flex items-center px-2 py-1 rounded-lg ring-1 ring-black/10 text-sm font-medium"
              >
                RSS Feed
              </a>
            </div>

            {/* Category Posts */}
            <div className="mt-6">
              {paginatedCategories.map((post) => (
                <div
                  key={post.slug}
                  className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
                >
                  <div>
                    <div className="text-sm text-gray-700">{post.date}</div>

                    <div className="mt-2.5 flex items-center gap-3">
                      <img
                        src={post.authorImg}
                        alt={post.author}
                        className="size-6 rounded-full object-cover"
                      />
                      <div className="text-sm text-gray-700">{post.author}</div>
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:max-w-2xl">
                    <h2 className="text-sm font-medium">{post.title}</h2>

                    <p className="mt-3 text-sm text-gray-500">
                      {post.description}
                    </p>

                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-sm font-medium"
                      >
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="size-4 fill-gray-400"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 4l4 4-4 4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Show a "no posts" message if nothing to show */}
              {paginatedCategories.length === 0 && (
                <div className="py-12 text-center text-gray-500">
                  No posts found for “{currentCategory}”.
                </div>
              )}
            </div>

            {/* Pagination - show only if filteredPosts > perPage */}
            {filteredPosts.length > perPage && (
              <div className="mt-6 flex items-center justify-between">
                {/* Previous */}
                <a
                  href={`/blog?category=${currentCategory}&page=${Math.max(
                    1,
                    currentPage - 1
                  )}`}
                  className={`px-2 py-1 rounded-lg ring-1 ring-black/10 text-sm font-medium ${
                    currentPage === 1 ? "opacity-40 pointer-events-none" : ""
                  }`}
                >
                  Previous
                </a>

                {/* Page Numbers */}
                <div className="flex gap-2 max-sm:hidden">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <a
                      key={i}
                      href={`/blog?category=${currentCategory}&page=${i + 1}`}
                      className={`size-7 rounded-lg text-center flex items-center justify-center text-sm font-medium ${
                        currentPage === i + 1
                          ? "ring-1 ring-black/10 shadow-sm"
                          : ""
                      }`}
                    >
                      {i + 1}
                    </a>
                  ))}
                </div>

                {/* Next */}
                <a
                  href={`/blog?category=${currentCategory}&page=${Math.min(
                    totalPages,
                    currentPage + 1
                  )}`}
                  className={`px-2 py-1 rounded-lg ring-1 ring-black/10 text-sm font-medium ${
                    currentPage === totalPages
                      ? "opacity-40 pointer-events-none"
                      : ""
                  }`}
                >
                  Next
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
