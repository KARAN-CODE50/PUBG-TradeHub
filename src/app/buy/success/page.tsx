"use client"
import Navbar from '@/app/(home)/navbar'
import { Backpack, Check, CircleCheck, Home, HomeIcon, ShoppingCart } from 'lucide-react'
import React from 'react'

function Success() {
  return (
    <div className=' bg-primary h-screen text-white'>
      <Navbar />
      <div className='flex bg-secondary text-xl p-5 rounded-lg text-green-500 flex-col justify-center items-center mx-[35%] my-[4%]'>
        <CircleCheck size={100} />
        <p className='text-2xl pt-5 pb-1'>
          Account bought successfully
        </p>
        <p className='text-md'>
          All the details have been sent to your <u>email</u>
        </p>
      </div>
      <div className=' flex gap-2 justify-center'>
        <a href='/buy' className='px-3 py-2 hover:bg-secondary-two rounded-md bg-primary-two flex items-center gap-2'><ShoppingCart size={20} />Buy More</a>
        <a href='/' className='px-3 py-2 hover:bg-secondary-two rounded-md bg-primary-two flex items-center gap-2'><HomeIcon size={20} />Go to Home</a>
      </div>
    </div>
  )
}

export default Success