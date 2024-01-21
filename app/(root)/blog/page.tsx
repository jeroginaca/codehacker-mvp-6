import React from 'react'
import { readClient } from '@/sanity/lib/client'
import { Post } from '@/sanity/utils';
import Link from 'next/link';

async function getData(){
  const query = `* [_type == "post"]`;
  
  const data = await readClient.fetch(query);

  return data;
}

export const revalidate = 30


const Blog = async() => {

  const data = await getData() as Post[];

  return (
    <div className=' h-full selection:bg-gray-50 py-32'>

        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-gray-200">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight gradient-title-2 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Posts
        </h1>
      </div>

      <ul>
        {data.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <p className="text-base font-medium leading-6  gradient-title-2">
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-100">
                    {post.title}
                  </h3>
                </div>

                <p className="prose max-w-nonetext-gray-400 line-clamp-2">
                  {post.overview}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
    </main>

    </div>
    
  )
}

export default Blog