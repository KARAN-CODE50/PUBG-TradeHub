"use client"
import React from 'react'
import { CircleDollarSign } from 'lucide-react'
import SellForm from './SellForm'
import Navbar from '../(home)/navbar'

function Sell() {
  return (
    <div className=' bg-primary h-screen text-white'>
      <Navbar/>
      <div className='px-[9%] py-[5%]'>
        <div className='flex gap-2 items-center'>
          <CircleDollarSign size={30} />
          <p className=' font-manrope font-bold text-3xl'>SELL ACCOUNTS</p>
        </div>
        <SellForm />
      </div>
    </div>
  )
}

export default Sell