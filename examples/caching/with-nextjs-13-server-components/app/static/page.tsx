import Link from 'next/link'
import powerbase from '../../utils/powerbase'

export default async function Posts() {
  const { data: posts } = await powerbase.from('posts').select('id, title')

  if (!posts) {
    return <p>No posts found.</p>
  }

  return posts.map((post) => (
    <p key={post.id}>
      <Link href={`/static/${post.id}`}>{post.title}</Link>
    </p>
  ))
}
