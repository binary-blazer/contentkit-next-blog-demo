"use client";

import { allPosts, type Post } from "contentkit/generated";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const [post, setPost] = useState<Post | null>(null);

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const foundPost = allPosts.find((post) => post.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      router.push("/404");
    }
  }, [slug, router]);

  return (
    <>
      <div className="flex items-center justify-between pt-24 px-10 md:px-[10rem] lg:px-[12rem] xl:px-[20rem] 2xl:px-[30rem]">
        <button
          onClick={handleBack}
          className="bg-zinc-800 text-neutral-200 rounded-full p-4 cursor-pointer hover:bg-zinc-700 transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
      </div>
      {post && (
        <div className="flex min-h-screen flex-col items-start justify-start mt-8 px-10 md:px-[10rem] lg:px-[12rem] xl:px-[20rem] 2xl:px-[30rem]">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-5xl font-bold">{post.title}</h1>
            <p className="mt-4 text-lg">{post.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags
                ? post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="cursor-default hover:bg-zinc-700 bg-zinc-800 text-neutral-200 rounded-full px-3 py-1 text-sm font-semibold transition duration-300 ease-in-out"
                    >
                      {tag}
                    </span>
                  ))
                : null}
            </div>
          </div>
          <div className="select-none flex flex-col border-t border-neutral-800 mt-8 pt-8 w-full">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                draggable="false"
                className="w-full h-auto max-h-96 object-cover rounded-3xl"
              />
            ) : (
              <div className="w-full h-96 bg-zinc-800 rounded-xl border border-zinc-700">
                <div className="flex items-center justify-center h-full">
                  <p className="text-neutral-300">1920x1080</p>
                </div>
              </div>
            )}
            <div
              className="prose lg:prose-xl prose-invert mt-4"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      )}
      {!post && (
        <div className="flex min-h-screen flex-col items-start justify-center py-24 px-[30rem]">
          <h1 className="text-5xl font-bold">Loading...</h1>
        </div>
      )}
    </>
  );
}
