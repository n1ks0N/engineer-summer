import { useRouter } from 'next/router'
import PostTitle from '../../components/PostTitle'
const Post = () => {
  const router = useRouter()
  const { slug } = router.query
  const post = {
    title: slug,
    author: 'Name'
  }
  return (
    <div>
      <PostTitle post={post} />
    </div>
  )
}

export default Post