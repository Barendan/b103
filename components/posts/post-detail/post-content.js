import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import PostHeader from './post-header'
import classes from './post-content.module.css'

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  console.log('boom pop', post.slug, post.image)
  
  const customRenderers = {
    // image(image) {
    //   return (

    //     <Image 
    //     src={`/images/posts/${post.slug}/${image.src}`} 
    //     alt={image.alt} 
    //     width={600} 
    //     height={300}
    //     />
    //   )
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      
      if (node.children[0].type === 'image') {
        console.log('explode', node.children[0])
        const image = node.children[0];

        return (
          <div className={classes.image}>
            
            <Image 
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt} 
              width={600} 
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    }
  }

  return (
    <article className={classes.content}>
      {/* {console.log('custom', customRenderers)} */}
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent