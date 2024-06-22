"use client"
import React from 'react'
import Navbar from './navbar'
import { motion } from "framer-motion"
import Image from 'next/image'
import { CircleDollarSign, ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react'
import Link from 'next/link'

export default function Content() {
  return (
    <div
      className='h-screen'
      style={{
        background: 'radial-gradient(circle, hsla(204, 37%, 16%, 0.9) 1%, hsla(205, 51%, 12%, 1) 100%), url(/background.jpg)'
      }}
    >
      <Navbar />
      <div className='flex relative mt-5 h-[70%] justify-center items-center'>
        <div className='z-10  ml-[13%] mr-[45%] font-manrope flex flex-col'>
          <p className=' text-3xl pb-1 text-[#FCDC94]'>Welcome to <b>PUBG TradeHub:</b></p>
          <p className=' text-7xl pb-3 relative'>
            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-b from-lime-300 to-green-300 '>Buy</span> and
            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-sky-400'> Sell</span> PUBG Accounts Easily and Securely</p>
          <p className=' opacity-60 text-2xl font-thin'>Discover Your Next PUBG Adventure or Find the Perfect Buyer for Your Account</p>
          <div className='flex gap-3 mt-5 text-2xl text-secondary font-bold'>
            <Link href='/buy'>
              <motion.div initial="initial" whileHover="hovered" className=' flex overflow-hidden items-center justify-center cursor-pointer bg-primary-green rounded-md py-1 px-4'>
                BUY
                <div className=' relative'>
                  <motion.div variants={{
                    initial: { y: 100 },
                    hovered: { y: 0 }
                  }}
                  >
                    <ArrowUpRight size={30} />
                  </motion.div>
                  <motion.div
                    className='absolute inset-0'
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-50px" }
                    }}
                  >
                    <ArrowUpRight size={30} />
                  </motion.div>
                </div>
              </motion.div>
            </Link>

            <Link href='/sell'>
              <motion.div initial="initial" whileHover="hovered" className=' flex overflow-hidden items-center justify-center cursor-pointer bg-primary-blue rounded-md py-1 px-4'>
                SELL
                <div className=' relative'>
                  <motion.div variants={{
                    initial: { y: 100 },
                    hovered: { y: 0 }
                  }}
                  >
                    <ArrowUpRight size={30} />
                  </motion.div>
                  <motion.div
                    className='absolute inset-0'
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-50px" }
                    }}
                  >
                    <ArrowUpRight size={30} />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
        <div className=' absolute right-32'>
          <CircleDollarSign size={100} strokeWidth={1.5} stroke='#34BE82' fill='#9CFF2E' className='absolute left-[50px] top-[150px] inline-block transform rotate-[-30deg]' />
          <CircleDollarSign size={100} strokeWidth={1.5} stroke='#3ABEF9' fill='#A7E6FF' className='absolute right-[50px] top-[150px] inline-block transform rotate-[30deg]' />
          <Image width={500} height={30} src="/manicon.svg" alt="icon" />
        </div>
      </div>
    </div >
  )
}