
import PostHeader from './post-header'
import classes from './post-content.module.css'



function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;


  return (
    <article className={classes.content}>
      <PostHeader title="" image="" />
      CONTENT
    </article>
  )
}

export default PostContent