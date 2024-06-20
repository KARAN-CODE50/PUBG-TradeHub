import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface buydata {
    name: string,
    level: number,
    desc: string,
    price: number,
    photoId: number
}

export default function BuyCard({name, level, desc, price, photoId} : buydata) {
    return (
        <div className=' bg-primary-two px-6 py-4 rounded-lg w-[25em]'>
            <div className='rounded-md flex flex-col gap-2'>
                <div className='flex items-center justify-between mb-2'>
                    <div className='flex gap-3 text-md'>
                        <p className='font-semibold'>{name}</p>
                        <p>•</p>
                        <p className=' text-white opacity-50 font-[400]'>Level {level}</p>
                    </div>
                    <ChevronRight />
                </div>
                <div className='text-[1.05em] h-[135px] flex pb-2 gap-2 justify-between'>
                    <div className='flex flex-col w-[50%] font-[300]'>
                        <p className='text-ellipsis text-[0.8em] opacity-90 font-[200] overflow-hidden'>{desc}</p>
                        <p className='hover:underline cursor-pointer opacity-60'>Read More</p>
                    </div>
                    <div className='relative flex-none w-[135px] rounded-lg overflow-hidden'>
                        <Image alt='logo' src={`/accPhotos/image-photo-${photoId}.jpg`} fill sizes='h-[135px] w-[135px]'></Image>
                    </div>
                </div>
                <div className='flex justify-between items-end py-1 text-[1.2em]'>
                    <p className='font-[800] font-manrope text-transparent bg-clip-text'>$ {price}</p>
                    <p className='text-[0.8em] opacity-40'>@believe4u</p>
                </div>
            </div>
        </div>
    )
}