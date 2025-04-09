import powerbase from '../../../utils/powerbase'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const { data: posts } = await powerbase.from('posts').select('id')

  return posts?.map(({ id }) => ({
    id,
  }))
}

export default async function Post({ params: { id } }: { params: { id: string } }) {
  const { data: post } = await powerbase.from('posts').select().match({ id }).single()

  if (!post) {
    notFound()
  }

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}
