import React from 'react'
import Image from 'next/image'
import { ChevronRight, ShoppingCart  } from 'lucide-react'

function Buy() {
  return (
    <div className='mx-[10%] py-32'>
        <div className='flex gap-3 items-center mb-3'>
            <ShoppingCart size={28}/>
            <p className='text-3xl font-bold font-manrope'>BUY ACCOUNTS</p>
        </div>
        <div className=' bg-primary-two px-6 py-4 rounded-lg w-[30em]'>
            <div className='rounded-md flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-3 text-lg'>
                        <p>Account Name</p>
                        <p>•</p>
                        <p className=' text-white opacity-50 font-[400]'>Level</p>
                    </div>
                    <ChevronRight/>
                </div>
                <div className='text-[1.05em] h-[135px] flex pb-2 gap-8 justify-between'>
                    <div className='flex-1 flex flex-col text-justify font-[300]'>
                        <p className='text-ellipsis opacity-90 font-[200] overflow-hidden'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, id temporibus culpa voluptate iusto qui quos molestias enim amet. Dolor? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, optio.</p>
                        <p className='underline opacity-60'>Read More</p>
                    </div>
                    <div className='relative flex-none w-[27%] h-full'>
                        <Image src='/pubg-logo.png' layout='fill' objectFit='contain'></Image>
                    </div>
                </div>
                <div className='flex justify-between items-end py-1 text-[1.2em]'>
                    <p className='font-[500]'>$ PRICE</p>
                    <p className='text-[0.8em] opacity-40'>@believe4u</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buy