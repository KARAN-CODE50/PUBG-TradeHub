import { SignedOut } from '@clerk/nextjs'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="from-blue-500 flex min-h-screen items-center justify-center bg-gradient-to-br to-purple-500">
      <Head>
        <title>Hello Pages Router with Next.js & Clerk</title>
        <meta name="description" content="A simple Hello World homepage using Next.js and TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-blue-500 mb-4 text-2xl font-bold">Hello, Pages Router!</h1>
        <p className="text-gray-600">This is a simple homepage built with Next.js and Clerk</p>

        <SignedOut>
          <Link href="/sign-up">
            <div>
              <h3 className="text-blue-500 mb-4 text-xl font-bold">Sign in or sign up for an account</h3>
            </div>
          </Link>
        </SignedOut>
      </div>
    </div>
  )
}