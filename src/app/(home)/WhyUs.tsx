"use client"
import React from 'react'
import { Lock, BadgeCheck, Trophy, Gem, LucideIcon } from 'lucide-react'
import { motion } from "framer-motion"

interface WhyDataItem {
    heading: string,
    content: string,
    icon: LucideIcon
}

const whyData: WhyDataItem[] = [
    {
        heading: 'Safe and Secure Transactions',
        content: 'We prioritize your security. Our platform uses advanced encryption and secure payment gateways to ensure every transaction is safe.',
        icon: Lock
    },
    {
        heading: 'Verified Accounts',
        content: 'Each account listed on our platform is thoroughly verified to guarantee authenticity and fair play. Buy with confidence and sell with ease.',
        icon: BadgeCheck
    },
    {
        heading: 'User-Friendly Interface',
        content: 'Our intuitive and easy-to-navigate website makes buying and selling PUBG accounts a breeze, even for first-time users.',
        icon: Gem
    },
    {
        heading: 'Competitive Pricing',
        content: 'Find the best deals on PUBG accounts with competitive pricing and transparent listing details.',
        icon: Trophy
    },
]

export default function WhyUs() {
    return (
        <div className='mx-[13%] mt-[5%] mb-[10%] font-manrope'>
            <div className='flex justify-center mb-8 items-center gap-5'>
                <div className=' opacity-50 w-[20em] bg-gradient-to-l from-white to-primary h-[0.2em] rounded-full bg-white' />
                <p className='text-3xl text-center font-semibold'>Why Choose Us ?</p>
                <div className=' opacity-50 w-[20em] bg-gradient-to-r from-white to-primary h-[0.2em] rounded-full bg-white' />
            </div>
            {/* <p className='text-center text-xl opacity-70'>Are you a passionate PUBG player looking to buy a high-level account or eager to sell your own? PUBG TradeHub is your one-stop destination for seamless transactions, secure trading, and an unmatched gaming community experience.</p> */}
            <div className=' grid grid-cols-2 gap-7 my-[1.5em]'>
                {whyData.map((obj, index) => (
                    <WhyComp key={index} icon={obj.icon} heading={obj.heading} content={obj.content} />
                ))}
            </div>
        </div>
    )
}

function WhyComp({icon: Icon, heading, content} : WhyDataItem) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} className='p-5 rounded-lg bg-secondary flex justify-center items-center gap-5'>
            <div>
                <Icon size={50} color='#5AB2FF ' />
            </div>
            <div>
                <p className=' bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text text-2xl font-bebas tracking-wide'>{heading}</p>
                <p className=' text-justify'>{content}</p>
            </div>
        </motion.div>
    )
}
