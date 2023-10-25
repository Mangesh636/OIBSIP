'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {

  const { isSignedIn } = useAuth();

  return (
    <div className="h-full flex items-center justify-center text-4xl text-blue-500">
      UnProcted Page
      <div>
        <Link href={isSignedIn ? '/protected' : '/sign-up'}>
          <button className='bg-blue-500 text-white rounded p-2'>Sign In</button>
        </Link>
      </div>
    </div>
  )
}
