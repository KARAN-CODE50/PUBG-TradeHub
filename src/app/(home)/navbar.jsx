import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { SignedOut } from '@clerk/nextjs'
import { SignedIn, UserButton } from '@clerk/clerk-react'

function Navbar() {
    return (
        <div className='flex justify-center'>
            <div className='flex w-[80%] my-8 justify-between bg-secondary items-center rounded-full px-10 py-2'>
                <div className='flex items-center gap-3'>
                    <img src="/mainlogo.png" alt="mainlogo" className='h-8' />
                    <p className='text-[2.2em] font-bebas tracking-wide'>PUBG TradeHub</p>
                </div>
                <div className='flex items-center gap-5 font-manrope tracking-wide'>
                    <p className=' cursor-pointer'>BUY</p>
                    <p className=' cursor-pointer'>SELL</p>
                    <SignedOut>
                        <Link href="/sign-up">
                            <p className=' cursor-pointer text-black bg-primary-blue p-2 rounded-xl hover:bg-primary-two hover:text-white font-bold'>LOGIN</p>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <div>
                            <UserButton afterSignOutUrl='/' />
                        </div>
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}

export default Navbar