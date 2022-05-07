import type { NextPage } from 'next'
import Welcome from './welcome'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url:any) => url !== router.asPath && setLoading(true)
    const handleComplete = (url:any) => url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  return (
    <>
      {loading && <div>Loading....{/*I have an animation here*/}</div>}
      <Welcome />
    </>
  )
}

export default Home
