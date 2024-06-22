"use client"
import React, { useId } from 'react'
import { ChevronRight, ShoppingCart } from 'lucide-react'
import BuyCard from './BuyCard'
import Navbar from '../(home)/navbar'
import BuyData from "../data/accounts"

function Buy() {
    return (
        <div className='bg-primary text-white'>
            <Navbar/>
            <div className='mx-[9%] py-[3%]'>
                <div className='flex gap-3 items-center mb-5'>
                    <ShoppingCart strokeWidth={3} size={28} />
                    <p className='text-3xl font-bold font-manrope'>BUY ACCOUNTS</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {BuyData.map((data, index) => (
                        <BuyCard key={index} id={data.id} name={data.accName} level={data.level} desc={data.desc} price={data.price} photoId={data.photoId} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Buy