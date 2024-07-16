"use client"
import React, { useState } from 'react'
import { CircleDollarSign, CircleX, Home, Phone } from 'lucide-react'
import SellForm from './SellForm'
import Navbar from '../(home)/navbar'

function Sell() {
  const [sent, setSent] = useState(false);

  return (
    <div className={`bg-primary md:h-screen text-white`}>
      <div className={`${sent ? 'blur-lg' : 'none'}`}>
        <Navbar />
        <div className='px-[9%] py-[5%]'>
          <div className='flex gap-2 items-center'>
            <CircleDollarSign size={30} />
            <p className=' font-manrope font-bold text-3xl'>SELL ACCOUNTS</p>
          </div>
          <SellForm setSent={setSent} />
        </div>
      </div>

      {sent && (
        <div className='border-2 border-secondary-two bg-secondary rounded-lg absolute p-4 m-auto inset-0 md:h-[24em] md:w-[25em] h-[27em] mx-6 md:mx-0'>
          <div className='flex font-manrope justify-between'>
            <p className=' opacity-80'>Account Sent Successfully</p>
            <div role='button' onClick={() => setSent(!sent)} className=' opacity-50'>
              <CircleX strokeWidth={2} />
            </div>
          </div>
          <p className=' font-[300] opacity-60 py-5 pr-2 text-justify'>Thank you for submitting your PUBG account details to <b>PUBG TradeHub</b>. <br /> We have received your information and our team is currently evaluating your account. We will get back to you shortly with the next steps.Please allow us up to <b>48 hours</b> for a thorough review. If you have any questions in the meantime, feel free to reach out to our support team.Thank you for choosing PUBG TradeHub!</p>
          <div className='flex gap-3'>
            <a className='bg-primary-two p-2 rounded-md flex flex-1 justify-center items-center gap-2' href="/"><Phone size={18} /> Contact Us</a>
            <a className='bg-primary-two p-2 rounded-md flex flex-1 justify-center items-center gap-2' href="/"><Home size={18} /> Home</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sell