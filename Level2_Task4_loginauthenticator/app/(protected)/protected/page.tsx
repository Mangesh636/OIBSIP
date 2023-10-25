'use client'

import { useUser } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs"

export default function ProtectedPage() {

    const { isLoaded, isSignedIn, user} = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }
  return (
    <>
        <div className="flex p-4">
            <div className='flex w-full justify-end'>
                 <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <div className="text-6xl text-red-500">Hello, {user.firstName} welcome to Protected Page</div>
        </div>
    </>
  )
}
