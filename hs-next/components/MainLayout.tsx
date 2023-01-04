import Link from 'next/link'
import Head from 'next/head'

interface MainLayoutProps {
  title?: string,
  children: any
}

export function MainLayout({ children, title = 'Next App' }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        
        nav a {
          color: #fff;
          text-decoration: none;
        }
        
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}