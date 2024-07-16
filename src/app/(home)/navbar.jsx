import React, { useEffect, useState } from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { CircleDollarSign, CircleX, DollarSign, Menu, ShoppingCart, User } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    const { user } = useKindeBrowserClient();
    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <div className='flex justify-center relative'>
            <div className='flex w-full mx-6 md:w-[85%] my-8 justify-between bg-secondary items-center rounded-full px-4 md:pl-10 md:pr-5 py-2'>
                <Link href='/'>
                    <div className='flex items-center gap-3'>
                        <Image width={30} height={20} src="/mainlogo.png" alt="mainlogo" />
                        <p className='text-[1.6em] sm:text-[2.2em] font-bebas tracking-wide'>PUBG TradeHub</p>
                    </div>
                </Link>
                <div className='flex items-center gap-2 font-manrope tracking-wide'>
                    <Link href='/buy'>
                        <motion.p className='hidden hover:bg-primary-two rounded-full py-1 px-3 cursor-pointer md:flex justify-center items-center gap-2'> <ShoppingCart size={20} className=' opacity-50'/> BUY</motion.p>
                    </Link>
                    <Link href='/sell'>
                        <motion.p className='hidden hover:bg-primary-two rounded-full py-1 px-3 cursor-pointer md:flex justify-center items-center gap-2'><CircleDollarSign size={22} className=' opacity-50'/>SELL</motion.p>
                    </Link>
                    {!user ? (
                        <LoginLink className='rounded-full px-3 py-2 bg-secondary-two md:px-3 font-bold hover:bg-primary-two'>Log in</LoginLink>
                    ) : (
                        <div>
                            <div onClick={toggleMenu} role='button' className='md:hidden mr-1'>
                                <Menu />
                            </div>
                            {openMenu &&
                                <div className=' min-h-screen p-5 overflow-y-auto bg-secondary absolute top-0 right-0 w-[60%] z-40'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col gap-3 font-semibold'>
                                            <div className={`flex z-20 items-center gap-2 bg-primary-two py-2 px-3 rounded-full`}>
                                                {user.picture ? <Image width={35} height={8} className='rounded-full' src={user.picture} alt="pic" /> : <User fill='white' size={20} />}
                                                <p className='font-semibold'>{user.given_name}</p>
                                            </div>
                                        </div>
                                        <div onClick={toggleMenu}>
                                            <CircleX size={30} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-5 gap-5'>
                                        <a href='/buy' className='pl-3 text-black font-bold p-2 rounded-full text-center bg-primary-green'>BUY</a>
                                        <a href='/sell' className='pl-3 text-black font-bold p-2 rounded-full text-center bg-primary-blue'>SELL</a>
                                    </div>
                                </div>
                            }
                            <div
                                className={`hidden md:flex gap-4 overflow-hidden items-center bg-primary-two rounded-full pl-1`}>
                                <div className={`flex z-20 items-center gap-2`}>
                                    {user.picture ? <Image width={35} height={8} className='rounded-full' src={user.picture} alt="pic" /> : <User fill='white' size={20} />}
                                    <p className='font-semibold'>{user.given_name}</p>
                                </div>
                                <LogoutLink className='bg-secondary-two py-2 px-3 rounded-full font-bold hover:bg-primary hover:opacity-100'>Log Out</LogoutLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Navbar