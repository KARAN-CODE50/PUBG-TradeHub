"use client"
import React from 'react'
import { Sparkles } from 'lucide-react'
import {motion} from "framer-motion"

interface WorkDataItem {
    for: string,
    items: Array<{
        heading: string,
        content: string
    }>
}

const howItWorksData: WorkDataItem[] = [
    {
        for: 'Buyers',
        items: [
            {
                heading: 'Browse Listings',
                content: 'Explore a wide range of PUBG accounts with detailed descriptions and screenshots.'
            },
            {
                heading: 'Make Your Choice',
                content: 'Select the account that suits your preferences and budget.'
            },
            {
                heading: 'Secure Payment',
                content: 'Use our secure payment gateway to complete your purchase.'
            },
            {
                heading: 'Account Transfer',
                content: 'Receive your new account details securely and start your new adventure in PUBG.'
            },
        ]
    },
    {
        for: 'Sellers',
        items: [
            {
                heading: 'Create an Account',
                content: 'Sign up quickly with your email or social media.'
            },
            {
                heading: 'List Your Account',
                content: 'Provide detailed information about your PUBG account, including rank, skins, and other valuable features.'
            },
            {
                heading: 'Set Your Price',
                content: 'Choose a competitive price for your account.'
            },
            {
                heading: 'Sell Safely',
                content: 'Once a buyer is interested, our platform will facilitate the secure transfer and payment process.'
            },
        ]
    },
]

export default function Works() {
    return (
        <div>
            <div className='flex justify-center mb-8 items-center gap-5'>
                <div className=' opacity-50 w-[20em] bg-gradient-to-l from-white to-primary h-[0.2em] rounded-full bg-white' />
                <p className='text-3xl text-center font-semibold'>How it Works ?</p>
                <div className=' opacity-50 w-[20em] bg-gradient-to-r from-white to-primary h-[0.2em] rounded-full bg-white' />
            </div>

            <div className='grid grid-cols-2 mx-[13%] gap-5'>
                {howItWorksData.map((who) => (
                    <WhoCard for={who.for} items={who.items} />
                ))}
            </div>
        </div>
    )
}

function WhoCard({ for: who, items }: WorkDataItem) {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className='p-[0.1em] rounded-lg bg-gradient-to-r from-lime-200 to-green-400'>
            <div className='p-5 rounded-md w-full h-full bg-primary'>
                <p className='text-3xl text-center text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-emerald-300 font-bebas tracking-widest mb-3'>For {who}</p>
                <div className='flex flex-col gap-5'>
                    {items.map((list) => (
                        <motion.div initial={{scale: 0}} animate={{scale: 1}} className='flex items-center gap-5'>
                            <div className=' opacity-25'>
                                <Sparkles size={40} />
                            </div>
                            <div>
                                <p className=' text-md'>{list.heading}</p>
                                <p className=' opacity-70 font-[200]'>{list.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
