import Head from 'next/head'
import { PostCard, Categories, PostWidget } from './../components'
import { getPosts } from '../services'
import FeaturedPosts from '../sections/FeaturedPosts.section'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Code With Golf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-8 px-10">
        <FeaturedPosts />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post) => (
              <PostCard post={post.node} key={post.node.title} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}
