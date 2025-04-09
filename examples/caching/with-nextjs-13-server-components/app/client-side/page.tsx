'use client'

import { useEffect, useState } from 'react'
import powerbase from '../../utils/powerbase'

export default function ClientPosts() {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await powerbase.from('posts').select()
      setPosts(data)
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  return isLoading ? <p>Loading</p> : <pre>{JSON.stringify(posts, null, 2)}</pre>
}
