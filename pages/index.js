import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const DUMMY_POSTS = {

}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}
