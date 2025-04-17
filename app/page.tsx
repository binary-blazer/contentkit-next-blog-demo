"use client";

import { allPosts, type Post } from "contentkit/generated";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handlePostClick = (post: Post) => {
    router.push(`/posts/${post.slug}`);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-start justify-start py-24 px-10 md:px-[10rem] lg:px-[12rem] xl:px-[20rem] 2xl:px-[30rem]">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-start justify-center gap-2">
            <img src="/contentkit.svg" alt="ContentKit Logo" className="w-11 h-11" />
            <h1 className="text-5xl font-bold">ContentKit Blog Demo</h1>
          </div>
          <p className="mt-4 text-lg">
            This is a demo blog using{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://contentkitjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ContentKit
            </a>
            ,{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            , and{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col border-t border-neutral-800 mt-8 pt-8 w-full">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {allPosts.map((post: Post) => (
              <div
                key={post.title}
                onClick={() => handlePostClick(post)}
                className="flex flex-col items-center justify-between select-none border border-zinc-800/75 rounded-3xl p-4 cursor-pointer bg-zinc-900/50 backdrop-blur-2xl hover:bg-zinc-900 transition duration-200"
              >
                <div className="flex flex-col items-start justify-center">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      draggable="false"
                      className="w-full h-auto max-h-32 object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-32 bg-zinc-800 rounded-xl border border-zinc-700">
                      <div className="flex items-center justify-center h-full">
                        <p className="text-neutral-300">1920x1080</p>
                      </div>
                    </div>
                  )}
                  <h3 className="mt-4 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-neutral-400">{post.description}</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-4 border-t border-neutral-800 w-full">
                  <p className="mt-4 inline-block text-blue-600">Read more</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
