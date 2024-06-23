"use client"
import BuyData from '@/app/data/accounts'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { ChevronRight, ShoppingCart, Timer, Triangle, TriangleAlert, Zap } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/app/(home)/navbar'
import { LoginLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useRouter } from 'next/navigation'

interface buydata {
    id: string,
    name: string,
    level: number,
    desc: string,
    price: number,
    photoId: number
}

function Account({ params }: { params: { id: string } }) {
    const [accountData, setAccountData] = useState<buydata | null>(null);
    
    const { isAuthenticated } = useKindeBrowserClient();
    console.log(isAuthenticated);
    
    useEffect(() => {
        const checkID = decodeURIComponent(params.id)
        const data = BuyData.find((item) => item.id === checkID);
        if (data) {
            setAccountData({
                id: data.id,
                name: data.accName, // mapping accName to name
                level: Number(data.level), // assuming level is a number
                desc: data.desc,
                price: Number(data.price), // assuming price is a number
                photoId: data.photoId
            });
        } else {
            setAccountData(null);
        }
    }, [params.id]);

    function discount(price : number) {
        return price / 10;
    }

    function finalPrice(price : number) {
        return price - price / 10;
    }

    return (
        <div className=' bg-primary min-h-screen pb-16 text-white'>
            <Navbar />
            {accountData ? (
                <div className='flex mx-[12%] mt-5 gap-5' >
                    <motion.div className='border-2 border-primary-two hover:border-2 hover:border-secondary-two bg-primary-two p-6 rounded-lg w-full lg:w-[55%]'>
                        <div className='rounded-md flex flex-col gap-2'>
                            <div className='bg-secondary relative h-[235px] rounded-lg overflow-hidden'>
                                <Image alt='logo' fill objectFit='contain' src={`/accPhotos/image-photo-${accountData.photoId}.jpg`}></Image>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                                <div className='flex gap-3 text-lg'>
                                    <motion.p className='font-semibold'>{accountData.name}</motion.p>
                                    <p>•</p>
                                    <p className=' text-white opacity-50 font-[400]'>Level {accountData.level}</p>
                                </div>
                            </div>
                            <hr className=' opacity-20' />
                            <div className='text-[1.05em] flex pb-2 gap-2 justify-between'>
                                <div className='flex flex-col font-[300]'>
                                    {/* <p className='text-[1em] opacity-90 font-[200]'>{accountData.desc}</p> */}
                                    <p>{accountData.desc.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className=' bg-primary-two font-manrope flex flex-col gap-3 px-5 py-6 h-[300px] flex-1 rounded-lg'>
                        <div className='flex text-lg justify-between'>
                            <p className=''>Delivery Time</p>
                            <div className='flex items-center gap-2'>
                                <Zap color='#08dac4' />
                                <p>Instant</p>
                            </div>
                        </div>
                        <hr className='border border-secondary-two' />
                        <div className='flex text-lg justify-between'>
                            <p className=''>Warranty</p>
                            <div className='flex items-center gap-2'>
                                <Timer color='#fbd684' />
                                <p>2 Days</p>
                            </div>
                        </div>
                        <hr className='border border-secondary-two' />
                        <div className=' flex flex-col gap-1 pb-2'>
                            <div className='flex justify-between px-2 opacity-70'>
                                <p>Base Price</p>
                                <p>$ {accountData.price}</p>
                            </div>
                            <div className='flex justify-between px-2 opacity-70'>
                                <p>Discount (10%)</p>
                                <p>- $ {discount(accountData.price)}</p>
                            </div>
                            <div className='flex justify-between text-lg px-2'>
                                <p>Final Price</p>
                                <p>$ {finalPrice(accountData.price)}</p>
                            </div>
                        </div>
                        {isAuthenticated ? <motion.a href='https://buy.stripe.com/test_28o8AAdvW5sCaZyfYY' whileHover={{ scale: 1.02 }} className='flex hover:bg-blue-400 items-center justify-center gap-2 p-2 rounded-full bg-primary-blue text-primary font-bold text-xl'>
                            <ShoppingCart strokeWidth={3} />
                            Buy Now
                        </motion.a> : (
                            <LoginLink postLoginRedirectURL={`/buy/${accountData.id}`} className='flex hover:bg-amber-400 items-center justify-center gap-2 p-2 rounded-full bg-amber-200 text-primary font-bold text-xl'>Log In</LoginLink>
                        )}
                    </div>
                </div>
            ) : (
                <div className='mx-[13%] text-5xl border-2 flex justify-center gap-5 items-center py-5 text-red-500 rounded-full border-red-700'>
                    <TriangleAlert size={55} />
                    <p className=''>Account not found</p>
                </div>
            )}
        </div>

    )
}

export default Account