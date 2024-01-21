import Link from 'next/link'
import React from 'react'

const BlogNav = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
            <div className="flex justify-between items-center w-full">
                <Link href="/blog">
                    <h1 className="text-2xl font-medium">
                        <span className=" gradient-title-2">All Posts</span>
                    </h1>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogNav