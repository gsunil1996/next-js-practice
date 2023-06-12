import { useRouter } from 'next/router'
import React from 'react'

const BlogPostsPage = () => {
    const router = useRouter();
    console.log("router", router.query);

    return (
        <div>BlogPostsPage</div>
    )
}

export default BlogPostsPage