const PostTitle = ({ post }) => {
  return (
    <div>
      <p style={{color: 'red'}}>{post.title}</p>
      <p>{post.author}</p>
    </div>
  )
}

export default PostTitle