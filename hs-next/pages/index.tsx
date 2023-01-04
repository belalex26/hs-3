import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      <h1>Hello Next.JS!</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/posts">Posts</Link></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </MainLayout>
  )
}