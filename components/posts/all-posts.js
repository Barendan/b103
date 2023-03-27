import PostsGrid from './posts-grid'
import classes from './all-posts.module.css'

function AllPosts() {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <Postsgrid posts={props.posts} />
    </section>
  )
}

export default AllPosts