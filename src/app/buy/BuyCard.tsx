import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from 'next/navigation'

interface buydata {
    id: string,
    name: string,
    level: number,
    desc: string,
    price: number,
    photoId: number
}

export default function BuyCard({ id, name, level, desc, price, photoId }: buydata) {
    const router = useRouter();

    function goToAcc(id : string) {
        router.push(`/buy/${id}`)
    }
    
    return (
        <motion.div onClick={() => goToAcc(id)} layoutId={id} whileHover="hovered" variants={{ hovered: { scale: 1.04 } }} className='border-2 border-primary-two hover:border-2 hover:border-secondary-two cursor-pointer bg-primary-two px-6 py-4 rounded-lg w-full lg:w-[25em]'>
            <div className='rounded-md flex flex-col gap-2'>
                <div className='flex items-center justify-between mb-2'>
                    <div className='flex gap-3 md:text-md text-[0.7em]'>
                        <motion.p variants={{}} className='font-semibold'>{name}</motion.p>
                        <p>•</p>
                        <p className=' text-white opacity-50 font-[400]'>Level {level}</p>
                    </div>
                    <ChevronRight />
                </div>
                <div className='text-[1.05em] h-[135px] flex pb-2 gap-2 justify-between'>
                    <div className='flex flex-col w-[50%] font-[300]'>
                        <p className='text-ellipsis md:text-[0.8em] text-[0.7em] opacity-90 font-[200] overflow-hidden'>{desc}</p>
                        <p className='hover:underline text-sm cursor-pointer opacity-60'>Read More</p>
                    </div>
                    <div className='relative flex-none md:w-[135px] w-[100px] rounded-lg overflow-hidden'>
                        <Image alt='logo' src={`/accPhotos/image-photo-${photoId}.jpg`} fill sizes='h-[135px] w-[135px]'></Image>
                    </div>
                </div>
                <div className='flex justify-between items-end py-1 text-[1.2em]'>
                    <div className=' bg-secondary px-2 py-1 rounded-lg'>
                        <p className='font-[800] opacity-70 font-manrope bg-white text-transparent bg-clip-text'>$ {price}</p>
                    </div>
                    <p className='text-[0.8em] opacity-40'>@believe4u</p>
                </div>
            </div>
        </motion.div>
    )
}